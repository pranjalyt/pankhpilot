import React from 'react';
import { CheckCircle } from 'lucide-react';

const EarnYourWings = () => {
    const benefits = [
        "Comprehensive Ground Training",
        "Expert Guidance from Airline Pilots",
        "Cost-Effective Solutions",
        "Personalized Mentorship",
        "Career Counseling",
        "Visa & Medical Assistance"
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
                        EARN YOUR WINGS WITH <span className="text-brand-orange">PANKH PILOT PLATFORM</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 text-gray-600 leading-relaxed">
                        <p>
                            Flying for pleasure is a wonderful hobby, but becoming a professional pilot is a serious career choice that requires dedication, discipline, and rigorous training.
                        </p>
                        <p>
                            The Directorate General of Civil Aviation (DGCA) sets strict standards for pilot licensing in India. Navigating these requirements can be overwhelming for newcomers.
                        </p>
                        <p>
                            At Pankh Pilot Platform, we simplify this journey for you. We provide the roadmap, the resources, and the support you need to earn your wings and launch your career in aviation.
                        </p>
                    </div>

                    <div className="bg-brand-light p-8 rounded-2xl border border-brand-orange/20 shadow-lg">
                        <h3 className="text-xl font-bold text-brand-navy mb-6">Why Choose Us?</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-start space-x-3">
                                    <CheckCircle className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                                    <span className="text-sm font-medium text-gray-700">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EarnYourWings;
