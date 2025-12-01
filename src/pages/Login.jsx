import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Plane, Mail, Lock } from 'lucide-react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from || '/dashboard';

    const handleSubmit = (e) => {
        e.preventDefault();
        if (login(email, password)) {
            navigate(from, { replace: true });
        }
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-[var(--bg-primary)] px-4 transition-colors duration-200">
            <div className="bg-[var(--card-bg)] p-8 rounded-2xl shadow-xl w-full max-w-md border border-[var(--border)]">
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center text-white mx-auto mb-4">
                        <Plane className="w-8 h-8 transform -rotate-45" />
                    </div>
                    <h2 className="text-2xl font-bold text-[var(--text-primary)]">Welcome Back</h2>
                    <p className="text-[var(--text-secondary)] text-sm">Login to continue your journey</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Email Address</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange transition-all bg-[var(--surface-bg)] text-[var(--text-primary)]"
                                placeholder="you@example.com"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange transition-all bg-[var(--surface-bg)] text-[var(--text-primary)]"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-brand-navy text-white font-bold rounded-lg hover:bg-brand-charcoal transition-colors shadow-md"
                    >
                        Login
                    </button>
                </form>

                <div className="mt-6 text-center text-sm text-[var(--text-secondary)]">
                    Don't have an account?{' '}
                    <Link to="/register" className="text-brand-orange font-semibold hover:underline">
                        Register Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
