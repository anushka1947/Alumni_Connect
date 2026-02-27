import React from 'react';

export default function Spinner({ className = "" }) {
    return (
        <div className={`flex justify-center items-center py-4 ${className}`}>
            <div className="relative flex w-12 h-12 items-center justify-center">
                <div className="absolute inset-0 rounded-full border-t-2 border-primary/80 border-r-2 border-r-transparent border-b-2 border-transparent border-l-2 border-l-transparent animate-spin ring-1 ring-primary/20 glow-primary shadow-[0_0_15px_rgba(147,51,234,0.5)]"></div>
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_10px_rgba(147,51,234,0.8)]"></div>
            </div>
        </div>
    );
}