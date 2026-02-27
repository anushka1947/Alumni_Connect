import React from 'react';
import { Link } from 'react-router-dom';
import { AcademicCapIcon, UserGroupIcon, GlobeAltIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const notableAlumni = [
    { name: 'Priya Sharma', batch: '2010', achievement: 'CEO of TechSolutions Inc.', role: 'Tech Leader' },
    { name: 'Amit Singh', batch: '2008', achievement: 'Lead Scientist at BioGen Labs', role: 'Innovator' },
    { name: 'Anjali Verma', batch: '2012', achievement: 'Award-winning Documentary Filmmaker', role: 'Creative' },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: 'spring', stiffness: 100, damping: 20 }
    }
};

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-black text-[#ededed] font-jakarta selection:bg-white/20 relative overflow-hidden">
            {/* Global Noise Overlay */}
            <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.035] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>

            {/* Subtle Gradient Glows */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none"></div>

            {/* Premium Hero Section */}
            <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 z-10 pt-20">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-center max-w-5xl mx-auto flex flex-col items-center"
                >
                    <motion.div variants={itemVariants} className="mb-6 inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-medium tracking-wide text-white/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-white mr-2 animate-pulse"></span>
                        Introducing the new Alumni Connect
                    </motion.div>

                    <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl lg:text-[10rem] font-medium tracking-tighter leading-[0.9] text-white">
                        KV Bhopal.
                    </motion.h1>
                    <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-normal tracking-tight text-white/50 mt-4 mb-8">
                        The 1% Network.
                    </motion.h2>

                    <motion.p variants={itemVariants} className="text-lg md:text-xl text-white/40 max-w-2xl font-light tracking-wide leading-relaxed mb-12">
                        An elite digital space engineered to reconnect visionary alumni, foster profound opportunities, and honor the legacy of our alma mater.
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            to="/register"
                            className="group relative inline-flex items-center justify-center gap-2 bg-white text-black font-medium py-3 px-8 text-sm rounded-full transition-transform hover:scale-[1.02] overflow-hidden"
                        >
                            <span className="relative z-10 transition-transform group-hover:-translate-x-1">Request Access</span>
                            <ArrowRightIcon className="h-4 w-4 relative z-10 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                        </Link>
                        <Link
                            to="/login"
                            className="inline-flex items-center justify-center gap-2 bg-transparent text-white/70 font-medium py-3 px-8 text-sm rounded-full border border-white/10 hover:bg-white/5 transition-colors"
                        >
                            Sign In
                        </Link>
                    </motion.div>
                </motion.div>
            </section>

            {/* Bento Grid Features Section */}
            <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]"
                >
                    {/* Large Bento Box */}
                    <div className="md:col-span-2 md:row-span-2 bg-black border border-white/10 rounded-3xl p-10 flex flex-col justify-end relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent_50%)] group-hover:bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_50%)] transition-colors duration-500"></div>

                        <AcademicCapIcon className="h-12 w-12 text-white/80 absolute top-10 right-10 z-20 opacity-20 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-20">
                            <h3 className="text-3xl font-medium tracking-tight text-white mb-4">Unrelenting Excellence.</h3>
                            <p className="text-white/50 text-lg font-light leading-relaxed max-w-lg">
                                KV Bhopal has been an architectural pillar of knowledge. We engineer environments that breed curiosity, resulting in alumni who shape the global frontier.
                            </p>
                        </div>
                    </div>

                    {/* Small Bento Box 1 */}
                    <div className="bg-black border border-white/10 rounded-3xl p-8 flex flex-col relative overflow-hidden group">
                        <UserGroupIcon className="h-8 w-8 text-white/50 mb-6 group-hover:text-white transition-colors duration-300" />
                        <h4 className="text-xl font-medium text-white mb-2">The Syndicate</h4>
                        <p className="text-white/40 text-sm font-light">A highly vetted network of pioneers, founders, and leaders.</p>
                        <div className="absolute bottom-0 right-0 w-32 h-32 bg-indigo-500/10 blur-2xl group-hover:bg-indigo-500/20 transition-colors duration-500"></div>
                    </div>

                    {/* Small Bento Box 2 */}
                    <div className="bg-black border border-white/10 rounded-3xl p-8 flex flex-col relative overflow-hidden group">
                        <GlobeAltIcon className="h-8 w-8 text-white/50 mb-6 group-hover:text-white transition-colors duration-300" />
                        <h4 className="text-xl font-medium text-white mb-2">Global Footprint</h4>
                        <p className="text-white/40 text-sm font-light">Our alumni dictate the pace of innovation across universally active sectors.</p>
                        <div className="absolute bottom-0 right-0 w-32 h-32 bg-cyan-500/10 blur-2xl group-hover:bg-cyan-500/20 transition-colors duration-500"></div>
                    </div>
                </motion.div>
            </section>

            {/* Kinetic Alumni Section */}
            <section id="notable-alumni" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative border-t border-white/5">
                <div className="mb-16">
                    <h3 className="text-4xl font-medium tracking-tight text-white">The Vanguard</h3>
                    <p className="text-white/40 mt-2">Pioneers actively reshaping the landscape.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {notableAlumni.map((alumnus, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group p-6 rounded-2xl bg-black border border-white/5 hover:border-white/20 transition-all duration-300"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <div className="text-xs font-mono text-white/30 tracking-widest uppercase">{alumnus.role}</div>
                                <div className="text-xs font-mono bg-white/5 px-2 py-1 rounded text-white/50">{alumnus.batch}</div>
                            </div>
                            <h4 className="text-2xl font-medium text-white mb-2 group-hover:translate-x-2 transition-transform duration-300">{alumnus.name}</h4>
                            <p className="text-sm font-light text-white/40">{alumnus.achievement}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
