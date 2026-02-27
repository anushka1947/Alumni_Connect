import React from 'react';
import { CakeIcon, XMarkIcon } from '@heroicons/react/24/solid';

const API_URL = process.env.REACT_APP_API_URL.replace("/api", "");

export default function BirthdayCard({ user, onDismiss }) {

    // It determines which image to show: the uploaded one or a default avatar.
    const profileImageUrl = user.profilePicture?.startsWith('http')
        ? user.profilePicture
        : user.profilePicture && user.profilePicture !== 'no-photo.jpg'
            ? `${API_URL}${user.profilePicture}`
            : `https://ui-avatars.com/api/?name=${user.fullName}&background=A066CB&color=fff`;

    return (
        <div className="bg-white/5 border border-white/10 rounded-2xl p-3 sm:p-4 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.8)] hover:border-white/20 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(147,51,234,0.1),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <div className="flex items-center gap-3 sm:gap-4 relative z-10">
                {/* Profile Picture */}
                <div className="relative">
                    <img
                        src={profileImageUrl}
                        alt={user.fullName}
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-primary/20 shadow-sm"
                    />
                    <div className="absolute -top-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-primary rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(147,51,234,0.6)]">
                        <span className="text-white text-xs sm:text-sm font-bold">🎂</span>
                    </div>
                </div>

                {/* User Info */}
                <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-white tracking-tight text-sm sm:text-base truncate">
                        {user.fullName}
                    </h3>
                    <p className="text-white/60 font-light text-xs sm:text-sm">
                        Class of {user.batchYear}
                    </p>
                    {user.currentOrganization && (
                        <p className="text-white/40 font-light text-xs truncate">
                            {user.currentOrganization}
                        </p>
                    )}
                </div>

                {/* Dismiss Button */}
                <button
                    onClick={() => onDismiss(user._id)}
                    className="p-1.5 sm:p-2 text-white/40 hover:text-white hover:bg-white/10 rounded-full transition-colors duration-200 flex-shrink-0"
                    title="Dismiss"
                >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
