import React from 'react';
import { motion } from 'framer-motion';
import { Plane } from 'lucide-react';

const Preloader = () => {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-200 overflow-hidden">
            <div className="loader-container relative w-64 h-64 flex items-center justify-center" style={{ perspective: '1200px' }}>

                {/* 3D Zoom Plane */}
                <motion.div
                    animate={{
                        y: [-30, 10, -10, -30],
                        scale: [0.6, 1.25, 0.9, 0.6],
                        rotateY: [20, 0, -10, 20],
                        rotateZ: [-5, 0, 3, -5],
                        opacity: [0.8, 1, 0.9, 0.8]
                    }}
                    transition={{
                        duration: 2.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        times: [0, 0.4, 0.8, 1]
                    }}
                    className="relative z-10"
                >
                    {/* Plane Icon - Nose facing viewer implies standard orientation, but let's rotate it to look like it's flying towards us */}
                    <div className="drop-shadow-2xl">
                        <Plane className="w-24 h-24 text-brand-orange fill-current" strokeWidth={1.5} />
                    </div>
                </motion.div>

                {/* Dynamic Shadow */}
                <motion.div
                    animate={{
                        opacity: [0.1, 0.4, 0.2, 0.1],
                        scale: [0.4, 1.2, 0.8, 0.4],
                        y: [60, 80, 70, 60]
                    }}
                    transition={{
                        duration: 2.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        times: [0, 0.4, 0.8, 1]
                    }}
                    className="absolute bottom-0 w-24 h-6 bg-black/20 dark:bg-white/10 blur-xl rounded-full"
                />
            </div>

            <motion.h2
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="mt-12 text-xl font-light tracking-[0.2em] text-[var(--text-secondary)] uppercase"
            >
                Earning Your Wings...
            </motion.h2>
        </div>
    );
};

export default Preloader;
