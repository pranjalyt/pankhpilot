import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Plane, User } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '../ui/ThemeToggle';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user, logout } = useAuth();
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About CPL', path: '/about' },
        { name: 'Courses', path: '/courses' },
        { name: 'FAQ', path: '/faq' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="sticky top-0 z-40 w-full border-b border-gray-100 shadow-sm transition-colors duration-200" style={{ backgroundColor: 'var(--navbar-bg)', color: 'var(--navbar-text)', backdropFilter: 'blur(12px)' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2 group">
                        <div className="w-10 h-10 bg-gradient-to-br from-brand-orange to-brand-red rounded-full flex items-center justify-center text-white shadow-md group-hover:shadow-lg transition-all">
                            <Plane className="w-5 h-5 transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-lg font-bold text-brand-navy leading-none">PANKH PILOT</span>
                            <span className="text-xs text-brand-charcoal/60 font-medium tracking-wider">PLATFORM</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm font-medium transition-colors duration-200 ${isActive(link.path)
                                    ? 'text-brand-orange'
                                    : 'text-gray-600 hover:text-brand-navy'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Auth Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <ThemeToggle />
                        {user ? (
                            <div className="flex items-center space-x-4">
                                <Link to="/dashboard" className="text-sm font-medium text-brand-navy hover:text-brand-orange">
                                    Dashboard
                                </Link>
                                <button
                                    onClick={logout}
                                    className="text-sm font-medium text-gray-500 hover:text-gray-700"
                                >
                                    Logout
                                </button>
                                <div className="w-8 h-8 bg-brand-navy rounded-full flex items-center justify-center text-white">
                                    <User className="w-4 h-4" />
                                </div>
                            </div>
                        ) : (
                            <>
                                <Link
                                    to="/login"
                                    className="text-sm font-medium text-brand-navy hover:text-brand-orange transition-colors"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/register"
                                    className="px-5 py-2.5 text-sm font-semibold text-white bg-brand-navy hover:bg-brand-charcoal rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                                >
                                    Become a Pilot
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-brand-navy focus:outline-none"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(link.path)
                                        ? 'bg-brand-light text-brand-orange'
                                        : 'text-gray-700 hover:bg-gray-50 hover:text-brand-navy'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 border-t border-gray-100 mt-4 space-y-3">
                                <div className="flex justify-center pb-2">
                                    <ThemeToggle />
                                </div>
                                {user ? (
                                    <>
                                        <Link
                                            to="/dashboard"
                                            onClick={() => setIsOpen(false)}
                                            className="block w-full text-left px-3 py-2 text-base font-medium text-brand-navy hover:bg-gray-50 rounded-md"
                                        >
                                            Dashboard
                                        </Link>
                                        <button
                                            onClick={() => { logout(); setIsOpen(false); }}
                                            className="block w-full text-left px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 rounded-md"
                                        >
                                            Logout
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <Link
                                            to="/login"
                                            onClick={() => setIsOpen(false)}
                                            className="block w-full text-center px-4 py-2 text-brand-navy font-medium border border-gray-200 rounded-lg hover:bg-gray-50"
                                        >
                                            Login
                                        </Link>
                                        <Link
                                            to="/register"
                                            onClick={() => setIsOpen(false)}
                                            className="block w-full text-center px-4 py-2 bg-brand-navy text-white font-medium rounded-lg hover:bg-brand-charcoal shadow-md"
                                        >
                                            Become a Pilot
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
