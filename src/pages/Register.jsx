import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Plane, User, Mail, Lock } from 'lucide-react';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const { register } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords don't match!");
            return;
        }
        if (register(formData)) {
            navigate('/dashboard');
        }
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-[var(--bg-primary)] px-4 py-12 transition-colors duration-200">
            <div className="bg-[var(--card-bg)] p-8 rounded-2xl shadow-xl w-full max-w-md border border-[var(--border)]">
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-brand-navy rounded-full flex items-center justify-center text-white mx-auto mb-4">
                        <Plane className="w-8 h-8 transform -rotate-45" />
                    </div>
                    <h2 className="text-2xl font-bold text-[var(--text-primary)]">Create Account</h2>
                    <p className="text-[var(--text-secondary)] text-sm">Start your aviation career today</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Full Name</label>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full pl-10 pr-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange transition-all bg-[var(--surface-bg)] text-[var(--text-primary)]"
                                placeholder="John Doe"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Email Address</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
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
                                name="password"
                                required
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full pl-10 pr-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange transition-all bg-[var(--surface-bg)] text-[var(--text-primary)]"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Confirm Password</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="password"
                                name="confirmPassword"
                                required
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className="w-full pl-10 pr-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange transition-all bg-[var(--surface-bg)] text-[var(--text-primary)]"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    <div className="flex items-center space-x-2 text-sm text-[var(--text-secondary)]">
                        <input type="checkbox" required className="rounded text-brand-orange focus:ring-brand-orange" />
                        <span>I agree to the Terms & Conditions</span>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-brand-orange text-white font-bold rounded-lg hover:bg-brand-accent transition-colors shadow-md"
                    >
                        Register
                    </button>
                </form>

                <div className="mt-6 text-center text-sm text-[var(--text-secondary)]">
                    Already have an account?{' '}
                    <Link to="/login" className="text-brand-navy font-semibold hover:underline dark:text-white">
                        Login Here
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
