import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQPreview = () => {
    const faqs = [
        {
            question: "What is the minimum age to start pilot training?",
            answer: "You can start your training as early as 16 years old, but you must be 18 years old to be issued a Commercial Pilot License (CPL)."
        },
        {
            question: "Is Physics and Maths compulsory for CPL?",
            answer: "Yes, Physics and Mathematics at the 10+2 level are mandatory. If you are from a Commerce or Arts background, you can clear these subjects through NIOS (National Institute of Open Schooling)."
        },
        {
            question: "How long does it take to become a pilot?",
            answer: "Typically, it takes about 18-24 months to complete your CPL training, including ground classes and flight training."
        }
    ];

    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="py-20 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">FREQUENTLY ASKED QUESTIONS</h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                            >
                                <span className="font-semibold text-brand-navy">{faq.question}</span>
                                {openIndex === index ? (
                                    <Minus className="w-5 h-5 text-brand-orange" />
                                ) : (
                                    <Plus className="w-5 h-5 text-gray-400" />
                                )}
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="bg-brand-light"
                                    >
                                        <div className="p-6 pt-0 text-gray-600 text-sm leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                <div className="mt-10 text-center">
                    <Link
                        to="/faq"
                        className="inline-block px-6 py-3 border border-brand-navy text-brand-navy font-semibold rounded-full hover:bg-brand-navy hover:text-white transition-all"
                    >
                        View All FAQs
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FAQPreview;
