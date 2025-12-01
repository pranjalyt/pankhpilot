import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-brand-navy text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center text-white">
                                <Plane className="w-5 h-5 transform -rotate-45" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold leading-none">PANKH PILOT</span>
                                <span className="text-xs text-gray-400 font-medium tracking-wider">PLATFORM</span>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            We help you achieve your industrial goal at an economic cost. A joint initiative of Airline Pilots and Student Pilots to guide the next generation.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-brand-orange transition-colors"><Facebook className="w-5 h-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-brand-orange transition-colors"><Instagram className="w-5 h-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-brand-orange transition-colors"><Twitter className="w-5 h-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-brand-orange transition-colors"><Linkedin className="w-5 h-5" /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-brand-orange">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About CPL</Link></li>
                            <li><Link to="/courses" className="text-gray-400 hover:text-white transition-colors">Our Courses</Link></li>
                            <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
                            <li><a href="https://www.dgca.gov.in/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">DGCA Examination</a></li>
                            <li><a href="https://egca.dgca.gov.in/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">eGCA</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-brand-orange">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-brand-orange shrink-0 mt-1" />
                                <span className="text-gray-400 text-sm">
                                    Pearls Plaza, 4th Floor, Facility B-420,<br />
                                    Near Andheri Railway Station,<br />
                                    Andheri West, Mumbai 400058
                                </span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-brand-orange shrink-0" />
                                <span className="text-gray-400 text-sm">+91 9173214549 / +91 8369329059</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-brand-orange shrink-0" />
                                <span className="text-gray-400 text-sm">info@pankhpilot.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Consultation CTA */}
                    <div className="bg-brand-charcoal p-6 rounded-xl border border-gray-800">
                        <h4 className="font-semibold text-white mb-2">Need Guidance?</h4>
                        <p className="text-xs text-gray-400 mb-4">
                            An actual pilot will guide you and clear all your queries.
                        </p>
                        <Link
                            to="/contact"
                            className="block w-full text-center py-2 px-4 bg-brand-orange hover:bg-brand-accent text-white text-sm font-semibold rounded-lg transition-colors"
                        >
                            Consult Now
                        </Link>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Pankh Pilot Platform. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="text-gray-500 hover:text-white text-sm">Privacy Policy</a>
                        <a href="#" className="text-gray-500 hover:text-white text-sm">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
