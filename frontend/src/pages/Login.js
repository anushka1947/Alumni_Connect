import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import authService from '../services/authService';
import toast from 'react-hot-toast';
import ForgotPasswordModal from '../components/auth/ForgotPasswordModal';

export default function Login() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();
    const [isForgotModalOpen, setForgotModalOpen] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await authService.login(formData);
            login(res.data.token);
            toast.success('Logged in successfully!');
            navigate('/');
        } catch (error) {
            const message = error.response?.data?.message || 'Login failed. Please try again.';
            toast.error(message);
            setLoading(false);
        }
    };

    return (
        <>
            <div className="flex items-center justify-center min-h-[80vh] py-8 sm:py-12 px-3 sm:px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(147,51,234,0.15),transparent_50%)] pointer-events-none"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.1),transparent_50%)] pointer-events-none"></div>
                <div className="max-w-md w-full space-y-6 sm:space-y-8 p-6 sm:p-8 lg:p-10 bg-surface/40 backdrop-blur-xl border border-white/10 rounded-3xl shadow-premium relative z-10">
                    {/* ... Login form header ... */}
                    <div>
                        <h2 className="mt-4 sm:mt-6 text-center text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-light via-primary to-secondary drop-shadow-sm pb-1">Welcome Back</h2>
                        <p className="mt-2 text-center text-sm text-muted">Sign in to your account or{' '}<Link to="/register" className="font-medium text-primary-light hover:text-white transition-colors">create a new one</Link></p>
                    </div>
                    <form className="mt-6 sm:mt-8 space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
                        {/* ... email and password inputs ... */}
                        <input name="email" type="email" placeholder="Email Address" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-white/10 rounded-xl bg-black/40 text-on-surface placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-300 text-sm sm:text-base" />
                        <input name="password" type="password" placeholder="Password" required value={formData.password} onChange={handleChange} className="w-full px-4 py-3 border border-white/10 rounded-xl bg-black/40 text-on-surface placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-300 text-sm sm:text-base" />
                        <div className="flex items-center justify-end">
                            <div className="text-sm">
                                <button type="button" onClick={() => setForgotModalOpen(true)} className="font-medium text-primary-light hover:text-white transition-colors">
                                    Forgot your password?
                                </button>
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full py-3 px-4 rounded-xl text-white text-sm font-medium transition-all duration-300 shadow-premium premium-button overflow-hidden
      ${loading ? 'bg-surface/50 cursor-not-allowed' : 'bg-gradient-to-r from-primary-light to-primary hover:from-primary hover:to-primary-dark hover:shadow-premium-hover transform hover:-translate-y-1'}`}
                            >
                                {loading ? 'Signing in...' : 'Sign in'}
                            </button>
                        </div>

                    </form>
                </div>
            </div>
            {isForgotModalOpen && <ForgotPasswordModal onClose={() => setForgotModalOpen(false)} />}
        </>
    );
}