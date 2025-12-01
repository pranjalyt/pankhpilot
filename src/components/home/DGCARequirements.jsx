import React from 'react';
import { Check } from 'lucide-react';

const DGCARequirements = () => {
    const reqs = [
        {
            title: "AGE",
            desc: "Minimum 18 years for CPL issuance."
        },
        {
            title: "EDUCATIONAL QUALIFICATION",
            desc: "10+2 with Physics and Maths."
        },
        {
            title: "MEDICAL",
            desc: "Class II Medical (Initial) & Class I Medical (Final)."
        },
        {
            title: "KNOWLEDGE",
            desc: "Pass all DGCA Ground Exams."
        },
        {
            title: "EXPERIENCE",
            desc: "Minimum 200 Hours of Flying."
        }
    ];

    return (
        <section className="py-20 bg-brand-navy text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">DGCA REQUIREMENTS</h2>
                    <p className="text-gray-400">Essential criteria to become a Commercial Pilot in India.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reqs.map((req, index) => (
                        <div key={index} className="bg-brand-charcoal p-6 rounded-xl border border-gray-700 hover:border-brand-orange transition-colors">
                            <div className="flex items-start space-x-4">
                                <div className="w-8 h-8 bg-brand-orange/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                                    <Check className="w-4 h-4 text-brand-orange" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-2">{req.title}</h3>
                                    <p className="text-gray-400 text-sm">{req.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Summary Card */}
                    <div className="bg-brand-orange p-6 rounded-xl flex items-center justify-center text-center">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">200 Hours</h3>
                            <p className="text-white/80 text-sm">Total Flight Experience Required</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DGCARequirements;
