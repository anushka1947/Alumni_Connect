import React from 'react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-black relative py-12 px-4">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

            <div className="max-w-4xl mx-auto relative z-10 bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 shadow-[0_4px_30px_rgba(0,0,0,0.5)] overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_top_right,rgba(147,51,234,0.05),transparent_50%)] pointer-events-none"></div>

                <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-6 text-white">Privacy Protocol</h1>
                <div className="space-y-6 text-white/60 font-light prose prose-invert lg:prose-lg max-w-none">
                    <p><strong className="text-white">Effective Date:</strong> June 13, 2025</p>

                    <p>
                        At KV Bhopal Alumni Connect, we are committed to protecting your privacy and handling your personal information with transparency and care. This Privacy Protocol describes the types of data we collect, how we use it, and the measures we take to safeguard it.
                    </p>

                    <h2 className="text-2xl font-medium tracking-tight text-white mt-8 mb-4">1. Information We Collect</h2>
                    <p>We collect information to provide, maintain, and improve our services. This includes:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong className="text-white">Identity Data:</strong> Full name, email address, date of birth</li>
                        <li><strong className="text-white">Educational Data:</strong> Batch year, admission number</li>
                        <li><strong className="text-white">Contact Data:</strong> Phone number (optional)</li>
                        <li><strong className="text-white">Professional Data:</strong> Current organization or institution, location, LinkedIn profile (optional)</li>
                        <li><strong className="text-white">User-Generated Content:</strong> Profile details, posts, comments, and group chat messages</li>
                    </ul>

                    <h2 className="text-2xl font-medium tracking-tight text-white mt-8 mb-4">2. How We Use Your Information</h2>
                    <p>Your information is used strictly for purposes that enhance your experience and support the alumni network. These include:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong className="text-white">Authentication and Access:</strong> To verify your identity and grant secure access to your account</li>
                        <li><strong className="text-white">Directory Services:</strong> To display verified profiles within the alumni directory and facilitate networking</li>
                        <li><strong className="text-white">Communication:</strong> To deliver important updates, including account approvals, policy changes, and relevant notifications</li>
                        <li><strong className="text-white">Engagement:</strong> To associate content (posts, chats, comments) with your identity within the platform</li>
                        <li><strong className="text-white">Community Recognition:</strong> To highlight members on special occasions, such as birthdays</li>
                    </ul>

                    <h2 className="text-2xl font-medium tracking-tight text-white mt-8 mb-4">3. Data Security</h2>
                    <p>We implement robust technical and organizational measures to protect your personal data against unauthorized access, disclosure, or loss. These include:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Encrypted storage using a secure, cloud-hosted MongoDB database</li>
                        <li>Industry-standard password hashing using bcrypt; passwords are never stored in plain text</li>
                        <li>Strict access controls and privacy protections for the Alumni Directory, limited to authenticated and approved users only</li>
                    </ul>

                    <h2 className="text-2xl font-medium tracking-tight text-white mt-8 mb-4">4. Data Sharing and Disclosure</h2>
                    <p>
                        We do <strong className="text-white">not</strong> sell, rent, or otherwise disclose your personal information to advertisers or third-party marketing entities. Information may only be shared:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>With your explicit consent</li>
                        <li>As required by law, regulation, or legal process</li>
                        <li>To protect the rights, property, or safety of users or the platform</li>
                    </ul>

                    <h2 className="text-2xl font-medium tracking-tight text-white mt-8 mb-4">5. Your Rights and Choices</h2>
                    <p>
                        You maintain control over your personal information. Optional fields such as professional details, bio, and location can be updated or removed at any time via the Profile page. You may also request correction or deletion of your data by contacting the portal administrator.
                    </p>

                    <h2 className="text-2xl font-medium tracking-tight text-white mt-8 mb-4">6. Contact Us</h2>
                    <p>
                        If you have questions, concerns, or requests related to your data or this policy, please contact the platform administrator through the official communication channels provided on the portal.
                    </p>
                </div>

                <div className="text-center mt-12">
                    <Link to="/" className="inline-flex items-center px-8 py-3 bg-white/5 border border-white/10 text-white font-medium rounded-xl hover:bg-white/10 hover:border-white/30 hover:-translate-y-1 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] group">
                        Back to Home
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </Link>
                </div>
            </div>
        </div>

    );
}
