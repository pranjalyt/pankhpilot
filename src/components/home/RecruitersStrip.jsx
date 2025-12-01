import React from 'react';

const RecruitersStrip = () => {
    const recruiters = [
        "AIR INDIA", "INDIGO", "AKASA AIR", "VISTARA", "SPICEJET", "ALLIANCE AIR"
    ];

    return (
        <section className="py-12 bg-brand-light border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">
                    Top Recruiters in the Industry
                </p>

                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {recruiters.map((name, index) => (
                        <div key={index} className="text-xl md:text-2xl font-bold text-brand-navy/40 hover:text-brand-navy transition-colors cursor-default">
                            {name}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RecruitersStrip;
