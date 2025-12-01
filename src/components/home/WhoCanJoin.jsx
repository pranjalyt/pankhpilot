import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, User, Plane, Globe } from 'lucide-react';

const WhoCanJoin = () => {
    const categories = [
        {
            title: "Beginner",
            desc: "9th to 11th Standard Students",
            icon: <BookOpen className="w-8 h-8 text-brand-orange" />
        },
        {
            title: "Fresher",
            desc: "12th Science, Arts & Commerce",
            icon: <GraduationCap className="w-8 h-8 text-brand-orange" />
        },
        {
            title: "Degree Holders",
            desc: "Graduates from any stream",
            icon: <User className="w-8 h-8 text-brand-orange" />
        },
        {
            title: "Hobby Flyers",
            desc: "Flying for passion",
            icon: <Plane className="w-8 h-8 text-brand-orange" />
        },
        {
            title: "Overseas",
            desc: "Students planning to train abroad",
            icon: <Globe className="w-8 h-8 text-brand-orange" />
        }
    ];

    return (
        <section className="py-20 bg-[var(--bg-primary)] transition-colors duration-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">WHO CAN JOIN?</h2>
                    <p className="text-[var(--text-secondary)]">Aviation is open to everyone with the passion to fly.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={cat.title}
                            whileHover={{ y: -5 }}
                            className="bg-[var(--card-bg)] p-6 rounded-xl shadow-sm hover:shadow-md transition-all text-center border border-[var(--border)] flex flex-col items-center h-full"
                        >
                            <div className="mb-4 p-3 bg-brand-orange/10 rounded-full">
                                {cat.icon}
                            </div>
                            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">{cat.title}</h3>
                            <p className="text-sm text-[var(--text-secondary)]">{cat.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhoCanJoin;
