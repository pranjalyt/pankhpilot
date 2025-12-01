import React from 'react';
import { FileCheck, Stethoscope, BadgeCheck, PlaneTakeoff, FileText, Globe } from 'lucide-react';

const SimplifyingPrep = () => {
    const steps = [
        { text: "10th and 12th Board Verification", icon: <FileCheck /> },
        { text: "Class I and II Medicals", icon: <Stethoscope /> },
        { text: "Police Verification Certificate", icon: <BadgeCheck /> },
        { text: "Computer Number", icon: <FileText /> },
        { text: "Ground Classes", icon: <BookOpenIcon /> },
        { text: "Visa Medicals & Applications", icon: <Globe /> },
        { text: "SPL, FRTOL, CPL Issuance", icon: <PlaneTakeoff /> },
        { text: "License Conversion Checks", icon: <FileCheck /> },
    ];

    // Helper component for icon since BookOpen is used above but not imported here
    function BookOpenIcon() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
        )
    }

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">SIMPLIFYING PILOT’S PREPARATION</h2>
                    <p className="text-gray-600">We guide you through every administrative hurdle.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-6 bg-brand-light rounded-xl border border-gray-100">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-orange shadow-sm mb-4">
                                {React.cloneElement(step.icon, { className: "w-6 h-6" })}
                            </div>
                            <p className="font-medium text-brand-navy">{step.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SimplifyingPrep;
