import React, { useState } from 'react';
import { Plus, Minus, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const FAQ = () => {
    const faqs = [
        {
            category: "General",
            questions: [
                { q: "What is the minimum age to start pilot training?", a: "You can start your training as early as 16 years old, but you must be 18 years old to be issued a Commercial Pilot License (CPL)." },
                { q: "Is Physics and Maths compulsory for CPL?", a: "Yes, Physics and Mathematics at the 10+2 level are mandatory. If you are from a Commerce or Arts background, you can clear these subjects through NIOS." },
                { q: "How long does it take to become a pilot?", a: "Typically, it takes about 18-24 months to complete your CPL training, including ground classes and flight training." }
            ]
        },
        {
            category: "Medical & Licensing",
            questions: [
                { q: "What are Class I and Class II Medicals?", a: "Class II is the initial medical exam required for Student Pilot License (SPL). Class I is a more rigorous exam required for Commercial Pilot License (CPL)." },
                { q: "Can I wear glasses?", a: "Yes, you can be a pilot with glasses as long as your vision is correctable to 6/6 with them." }
            ]
        },
        {
            category: "Training & Costs",
            questions: [
                { q: "What is the cost of CPL training?", a: "The cost varies depending on the flying school and country, but generally ranges from 35-50 Lakhs INR." },
                { q: "Do you provide job placement?", a: "We provide 100% placement assistance, including interview preparation and airline-specific coaching." }
            ]
        }
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (idx) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <div className="min-h-screen bg-brand-light pb-20">
            <div className="bg-brand-navy text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Everything you need to know about becoming a pilot.
                    </p>
                </div>
            </div>

            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    {faqs.map((section, sIdx) => (
                        <div key={sIdx} className="mb-8 last:mb-0">
                            <h3 className="text-xl font-bold text-brand-orange mb-4">{section.category}</h3>
                            <div className="space-y-4">
                                {section.questions.map((faq, qIdx) => {
                                    const uniqueIdx = `${sIdx}-${qIdx}`;
                                    return (
                                        <div key={uniqueIdx} className="border border-gray-200 rounded-xl overflow-hidden">
                                            <button
                                                onClick={() => toggleFAQ(uniqueIdx)}
                                                className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50 transition-colors"
                                            >
                                                <span className="font-semibold text-brand-navy pr-4">{faq.q}</span>
                                                {openIndex === uniqueIdx ? (
                                                    <Minus className="w-5 h-5 text-brand-orange shrink-0" />
                                                ) : (
                                                    <Plus className="w-5 h-5 text-gray-400 shrink-0" />
                                                )}
                                            </button>
                                            <AnimatePresence>
                                                {openIndex === uniqueIdx && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="bg-gray-50"
                                                    >
                                                        <div className="p-4 pt-0 text-gray-600 text-sm leading-relaxed border-t border-gray-100 mt-2">
                                                            {faq.a}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-600 mb-4">Didn't find your answer?</p>
                    <Link
                        to="/contact"
                        className="inline-block px-8 py-3 bg-brand-navy text-white font-bold rounded-full hover:bg-brand-charcoal transition-colors"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
