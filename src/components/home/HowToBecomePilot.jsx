import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, BookOpen, Clock, Award } from 'lucide-react';

const HowToBecomePilot = () => {
    const cards = [
        {
            country: "IN INDIA",
            items: [
                "AIR NAVIGATION",
                "AIR METEOROLOGY",
                "AIR REGULATIONS",
                "TECHNICAL SPECIFIC",
                "TECHNICAL GENERAL",
                "RTR – A",
                "200 HRS of Flight Training"
            ]
        },
        {
            country: "IN SOUTH AFRICA",
            items: [
                "AIR LAW",
                "METEOROLOGY",
                "NAVIGATION",
                "AIRCRAFT TECHNICAL AND GENERAL",
                "HUMAN PERFORMANCE",
                "FLIGHT PLANNING",
                "PRINCIPLES OF FLIGHT",
                "RADIOTELEPHONY"
            ]
        },
        {
            country: "IN USA",
            items: [
                "PRIVATE PILOT LICENSE",
                "INSTRUMENT RATING",
                "COMMERCIAL PILOT LICENSE",
                "MULTI ENGINE RATING",
                "CFI / CFII (Optional)"
            ]
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">HOW TO BECOME AN AIRLINE PILOT</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        CPL Includes Theory Papers and 200 HRS of Flight Training. The requirements vary slightly by region.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <motion.div
                            key={card.country}
                            whileHover={{ y: -10 }}
                            className="bg-brand-light rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100"
                        >
                            <div className="flex items-center justify-center w-12 h-12 bg-brand-orange/10 rounded-full mb-6 mx-auto">
                                <MapPin className="w-6 h-6 text-brand-orange" />
                            </div>
                            <h3 className="text-xl font-bold text-brand-navy text-center mb-6">{card.country}</h3>
                            <ul className="space-y-3">
                                {card.items.map((item, idx) => (
                                    <li key={idx} className="flex items-start space-x-3 text-sm text-gray-600">
                                        <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-1.5 shrink-0"></span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowToBecomePilot;
