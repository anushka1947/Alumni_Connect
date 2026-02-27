import React, { useState } from 'react';
import { MentionsInput, Mention } from 'react-mentions';
import userService from '../../services/userService';
import postService from '../../services/postService';
import toast from 'react-hot-toast';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { formatDistanceToNowStrict } from 'date-fns';
// import useAuth from '../../hooks/useAuth';
import './mentionStyle.css';
import StyledText from '../common/StyledText';

export default function CommentSection({ postId, comments: initialComments, onCommentPosted }) {
    // const { user, isAdmin } = useAuth();
    const [comments, setComments] = useState(initialComments || []);
    const [newComment, setNewComment] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchUsersForMention = (query, callback) => {
        if (!query) return;
        userService.searchUsers(query)
            .then(res => {

                const transformedData = res.data.data.map(user => ({ id: user.display, display: user.display }));
                callback(transformedData);
            })
            .catch(() => callback([]));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!newComment.trim()) return;
        setLoading(true);
        try {
            const res = await postService.addComment(postId, { text: newComment });
            setComments(res.data.data);
            setNewComment('');
            onCommentPosted();
        } catch (error) {
            toast.error('Failed to post comment.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4 sm:p-6 bg-black border-t border-white/5">
            <form onSubmit={handleSubmit} className="grid grid-cols-[1fr_auto] gap-3 sm:gap-4 mb-4 w-full max-w-full">
                <div className="w-full max-w-full overflow-hidden pr-1">
                    <MentionsInput
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Write a comment..."
                        className="mentions"
                        a11ySuggestionsListLabel={"Suggested users for mention"}
                        style={{ width: '100%', maxWidth: '100%', overflow: 'hidden' }}
                    >
                        <Mention
                            trigger="@"
                            data={fetchUsersForMention}
                            markup="@[__display__]" // <-- Simplified markup
                            displayTransform={(id, display) => `@${display}`}
                            className="mentions__mention"
                        />
                    </MentionsInput>
                </div>
                <button
                    type="submit"
                    disabled={loading || !newComment.trim()}
                    className="p-2.5 bg-white/10 rounded-full text-white hover:bg-white/20 disabled:bg-white/5 disabled:text-white/30 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105 shadow-md backdrop-blur-md"
                    style={{ minWidth: '44px', width: '44px', height: '44px', flexShrink: 0 }}
                >
                    <PaperAirplaneIcon className="w-5 h-5" />
                </button>
            </form>

            <div className="space-y-3">
                {comments
                    .slice()
                    .sort(createdAt => new Date(createdAt).getTime())
                    .map(comment => (
                        <div key={comment._id} className="bg-white/5 p-3 sm:p-4 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.3)] border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all duration-200 group">
                            <div className="flex justify-between items-baseline mb-2">
                                <p className="font-medium text-sm text-white">{comment.name}</p>
                                <p className="text-xs text-white/40">{formatDistanceToNowStrict(new Date(comment.createdAt))} ago</p>
                            </div>
                            <div className="text-white/70 text-sm font-light whitespace-pre-wrap">
                                <StyledText text={comment.text} />
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}
