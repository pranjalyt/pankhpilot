import React from 'react';
import { Link } from 'react-router-dom';
import { User } from 'lucide-react';

const MeetTheCrew = () => {
    const crew = [
        {
            name: "CAPT. Maruf Patel",
            role: "Chief Ground Instructor (CGI)",
            desc: "Experienced airline pilot passionate about training the next generation."
        },
        {
            name: "CAPT. Yashwant Raj",
            role: "Ground Instructor (GI)",
            desc: "Expert in navigation and technical subjects with years of teaching experience."
        },
        {
            name: "Mr. Prasad Kamble",
            role: "Operations Supervisor (OS)",
            desc: "Ensures smooth operations and student support throughout the training."
        }
    ];

    return (
        <section className="py-20 bg-[var(--bg-secondary)] transition-colors duration-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">MEET THE CREW</h2>
                    <p className="text-[var(--text-secondary)]">Learn from the best in the industry.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {crew.map((member, index) => (
                        <div key={index} className="bg-[var(--surface-bg)] rounded-2xl p-8 text-center hover:shadow-lg transition-shadow border border-[var(--border)]">
                            <div className="w-24 h-24 bg-brand-navy rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-white shadow-md">
                                <User className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1">{member.name}</h3>
                            <p className="text-brand-orange font-medium text-sm mb-4">{member.role}</p>
                            <p className="text-[var(--text-secondary)] text-sm mb-6">{member.desc}</p>
                            <Link to="/about" className="text-sm font-semibold text-[var(--text-primary)] hover:text-brand-orange transition-colors">
                                View Full Profile
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MeetTheCrew;
