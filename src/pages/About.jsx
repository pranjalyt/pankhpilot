import React from 'react';
import MeetTheCrew from '../components/home/MeetTheCrew';
import LearnWithTrust from '../components/home/LearnWithTrust';
import DGCARequirements from '../components/home/DGCARequirements';

const About = () => {
    return (
        <div className="min-h-screen bg-brand-light">
            {/* Hero */}
            <div className="bg-brand-navy text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        We are a team of passionate aviators dedicated to shaping the future of aviation in India.
                    </p>
                </div>
            </div>

            <LearnWithTrust />

            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-brand-navy mb-4">Our Mission</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            To provide world-class ground training and mentorship to aspiring pilots, ensuring they are not just exam-ready but industry-ready.
                            We strive to make aviation education accessible, affordable, and transparent.
                        </p>
                    </div>
                </div>
            </div>

            <MeetTheCrew />

            <DGCARequirements />
        </div>
    );
};

export default About;
