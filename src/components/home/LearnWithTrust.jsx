import React from 'react';
import { ShieldCheck } from 'lucide-react';

const LearnWithTrust = () => {
    return (
        <section className="py-20 bg-brand-navy text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-orange via-brand-navy to-brand-navy"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div>
                        <div className="flex items-center space-x-2 text-brand-orange mb-4">
                            <ShieldCheck className="w-6 h-6" />
                            <span className="font-bold tracking-wider uppercase">Learn With Trust</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            ABOUT <span className="text-brand-orange">INITIATIVE</span>
                        </h2>
                        <blockquote className="text-xl italic text-gray-300 border-l-4 border-brand-orange pl-4 mb-8">
                            "WE HELP YOU TO ACHIEVE INDUSTRY GOAL IN ECONOMIC COST"
                        </blockquote>
                    </div>

                    <div className="space-y-6 text-gray-300 leading-relaxed">
                        <p>
                            Pankh Pilot Platform is a joint initiative of Airline Pilots and Student Pilots.
                            We understand the challenges faced by aspiring aviators because we have been there ourselves.
                        </p>
                        <p>
                            Our mission is to provide high-quality, affordable ground training and guidance to help you
                            navigate the complex path of becoming a commercial pilot. We believe that financial constraints
                            should not be a barrier to achieving your dreams of flying.
                        </p>
                        <p>
                            With a team of experienced instructors and mentors, we offer a comprehensive curriculum that
                            covers all DGCA requirements, ensuring you are well-prepared for your exams and your future career in the skies.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default LearnWithTrust;
