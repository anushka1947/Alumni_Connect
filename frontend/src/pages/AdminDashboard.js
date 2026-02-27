import React, { useState } from 'react';
import PendingUsers from '../components/admin/PendingUsers';
import PendingPosts from '../components/admin/PendingPosts';
import ViewFeedback from '../components/admin/ViewFeedback';

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState('users');
    const tabs = [
        { id: 'users', name: 'Pending Registrations' },
        // { id: 'posts', name: 'Pending Posts' },
        { id: 'feedback', name: 'View Feedback' }
    ];

    return (
        <div className="min-h-screen bg-black relative">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">
                <div className="mb-8">
                    <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-2">Admin Control</h1>
                    <p className="text-white/50 font-light text-sm sm:text-base">System management and oversight protocol.</p>
                </div>

                {/* Mobile Dropdown Menu */}
                <div className="sm:hidden mb-6">
                    <label htmlFor="tabs" className="sr-only">Select a view</label>
                    <select
                        id="tabs"
                        name="tabs"
                        className="block w-full bg-white/5 border border-white/10 text-white rounded-xl focus:border-primary/50 focus:ring-1 focus:ring-primary/50 py-3 px-4 font-medium transition-colors"
                        onChange={(e) => setActiveTab(e.target.value)}
                        value={activeTab}
                    >
                        {tabs.map((tab) => (<option key={tab.id} value={tab.id} className="bg-black text-white">{tab.name}</option>))}
                    </select>
                </div>

                {/* Desktop Tab Navigation */}
                <div className="hidden sm:block mb-8">
                    <div className="border-b border-white/10">
                        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.name}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`${activeTab === tab.id
                                        ? 'border-primary text-white font-medium'
                                        : 'border-transparent text-white/50 hover:text-white hover:border-white/20 font-light'} 
                                        whitespace-nowrap py-4 px-1 border-b-2 text-sm transition-all duration-300`}
                                >
                                    {tab.name}
                                </button>
                            ))}
                        </nav>
                    </div>
                </div>

                <div className="mt-6">
                    <div className="bg-black border border-white/10 rounded-3xl shadow-[0_4px_30px_rgba(0,0,0,0.5)] p-6 sm:p-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.05),transparent_50%)] pointer-events-none"></div>
                        <div className="relative z-10">
                            {activeTab === 'users' && <PendingUsers />}
                            {activeTab === 'posts' && <PendingPosts />}
                            {activeTab === 'feedback' && <ViewFeedback />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
