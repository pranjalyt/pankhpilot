import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Plane } from 'lucide-react';

const Hero = () => {
    return (
        <section className="hero-section relative w-full min-h-[90vh] flex items-center overflow-hidden transition-all duration-500">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-orange/5 to-transparent skew-x-12 transform origin-top-right"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="space-y-2">
                            <h2 className="text-brand-orange font-bold tracking-wider text-sm uppercase">Welcome to</h2>
                            <h1 className="text-5xl md:text-7xl font-extrabold text-brand-navy leading-tight">
                                PANKH PILOT <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-red">PLATFORM</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-brand-navy font-light mt-4 opacity-90">
                                TO BECOME THE WORLD’S BEST PILOT
                            </p>
                        </div>

                        <p className="text-lg text-gray-600 max-w-lg border-l-4 border-brand-orange pl-4 italic">
                            "WE HELP YOU TO ACHIEVE INDUSTRIAL GOAL IN ECONOMIC COST"
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link
                                to="/courses"
                                className="px-8 py-4 bg-brand-navy text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:bg-brand-charcoal transition-all transform hover:-translate-y-1 flex items-center justify-center space-x-2"
                            >
                                <span>Become a Pilot</span>
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                to="/contact"
                                className="px-8 py-4 bg-white text-brand-navy border-2 border-brand-navy font-bold rounded-full hover:bg-brand-light transition-all flex items-center justify-center"
                            >
                                Enquire Now
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right Illustration */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative w-full aspect-square max-w-lg mx-auto">
                            {/* Abstract Plane Shape */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy to-brand-charcoal rounded-[3rem] rotate-6 shadow-2xl opacity-10"></div>
                            <div className="absolute inset-0 bg-white rounded-[3rem] shadow-xl border border-gray-100 flex items-center justify-center overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                                <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-navy/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                                <div className="relative z-10 text-center space-y-6 p-8">
                                    <div className="w-24 h-24 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Plane className="w-12 h-12 text-brand-orange" />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-4xl font-bold text-brand-navy">200+</h3>
                                        <p className="text-gray-500 font-medium">Hours of Flight Training</p>
                                    </div>
                                    <div className="w-full h-px bg-gray-100 my-4"></div>
                                    <div className="grid grid-cols-2 gap-4 text-left">
                                        <div>
                                            <h4 className="font-bold text-brand-navy text-lg">100%</h4>
                                            <p className="text-xs text-gray-500">Placement Assistance</p>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-brand-navy text-lg">Expert</h4>
                                            <p className="text-xs text-gray-500">Pilot Instructors</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Badge */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex items-center space-x-3"
                            >
                                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                    <span className="text-green-600 font-bold">✓</span>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-brand-navy">DGCA Approved</p>
                                    <p className="text-xs text-gray-500">Curriculum</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
