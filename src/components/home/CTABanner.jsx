import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTABanner = () => {
    return (
        <section className="py-20 bg-gradient-to-r from-brand-navy to-brand-charcoal text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to earn your wings?</h2>
                <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                    Join the Pankh Pilot Platform today and take the first step towards your dream career in aviation.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        to="/register"
                        className="w-full sm:w-auto px-8 py-4 bg-brand-orange text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:bg-brand-accent transition-all transform hover:-translate-y-1 flex items-center justify-center"
                    >
                        Register Now <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                    <Link
                        to="/contact"
                        className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-brand-navy transition-all flex items-center justify-center"
                    >
                        Consult an Actual Pilot
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CTABanner;
