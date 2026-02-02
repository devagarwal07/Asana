"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoaderProps {
    onComplete?: () => void;
    duration?: number;
}

// Generate fixed particle positions to avoid hydration mismatch
const PARTICLE_POSITIONS = [
    { startX: 0.08, endX: 0.15 },
    { startX: 0.84, endX: 0.73 },
    { startX: 0.40, endX: 0.39 },
    { startX: 0.25, endX: 0.74 },
    { startX: 0.24, endX: 0.73 },
    { startX: 0.65, endX: 0.73 },
    { startX: 0.06, endX: 0.72 },
    { startX: 0.82, endX: 0.62 },
    { startX: 0.51, endX: 0.52 },
    { startX: 0.84, endX: 0.23 },
    { startX: 0.79, endX: 0.83 },
    { startX: 0.03, endX: 0.12 },
    { startX: 0.15, endX: 0.34 },
    { startX: 0.22, endX: 0.96 },
    { startX: 0.41, endX: 0.76 },
    { startX: 0.26, endX: 0.78 },
    { startX: 0.08, endX: 0.55 },
    { startX: 0.28, endX: 0.54 },
    { startX: 0.35, endX: 0.14 },
    { startX: 0.49, endX: 0.16 },
];

const PARTICLE_DELAYS = [0.1, 0.3, 0.5, 0.7, 0.9, 1.1, 0.2, 0.4, 0.6, 0.8, 1.0, 1.2, 0.15, 0.35, 0.55, 0.75, 0.95, 1.15, 0.25, 0.45];
const PARTICLE_DURATIONS = [5, 6, 4.5, 5.5, 6.5, 4, 5.2, 6.2, 4.8, 5.8, 6.8, 4.2, 5.4, 6.4, 4.6, 5.6, 6.6, 4.4, 5.3, 6.3];

const Loader: React.FC<LoaderProps> = ({ onComplete, duration = 3000 }) => {
    const [progress, setProgress] = useState(0);
    const [isComplete, setIsComplete] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        const startTime = Date.now();
        const interval = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const newProgress = Math.min((elapsed / duration) * 100, 100);
            setProgress(newProgress);

            if (newProgress >= 100) {
                clearInterval(interval);
                setTimeout(() => {
                    setIsComplete(true);
                    onComplete?.();
                }, 500);
            }
        }, 16);

        return () => clearInterval(interval);
    }, [duration, onComplete]);

    return (
        <AnimatePresence>
            {!isComplete && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-primary overflow-hidden"
                >
                    {/* Animated Background Particles - only render after mount to avoid hydration mismatch */}
                    {isMounted && (
                        <div className="absolute inset-0 overflow-hidden">
                            {PARTICLE_POSITIONS.map((pos, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-1 h-1 bg-accent/30 rounded-full"
                                    initial={{
                                        x: pos.startX * window.innerWidth,
                                        y: window.innerHeight + 50,
                                    }}
                                    animate={{
                                        y: -50,
                                        x: pos.endX * window.innerWidth,
                                    }}
                                    transition={{
                                        duration: PARTICLE_DURATIONS[i],
                                        repeat: Infinity,
                                        ease: "linear",
                                        delay: PARTICLE_DELAYS[i],
                                    }}
                                />
                            ))}
                        </div>
                    )}

                    {/* Decorative Circles */}
                    <motion.div
                        className="absolute w-[600px] h-[600px] rounded-full border border-white/5"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div
                        className="absolute w-[500px] h-[500px] rounded-full border border-white/5"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div
                        className="absolute w-[400px] h-[400px] rounded-full border border-accent/10"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Main Content */}
                    <div className="relative z-10 flex flex-col items-center">
                        {/* Logo Animation */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                            className="mb-8"
                        >
                            {/* Lotus Icon */}
                            <motion.svg
                                width="80"
                                height="80"
                                viewBox="0 0 80 80"
                                fill="none"
                                className="text-accent"
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <motion.path
                                    d="M40 10C40 10 50 25 50 40C50 55 40 70 40 70C40 70 30 55 30 40C30 25 40 10 40 10Z"
                                    fill="currentColor"
                                    fillOpacity="0.3"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                />
                                <motion.path
                                    d="M25 20C25 20 40 30 45 45C50 60 45 75 45 75C45 75 30 65 25 50C20 35 25 20 25 20Z"
                                    fill="currentColor"
                                    fillOpacity="0.2"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
                                />
                                <motion.path
                                    d="M55 20C55 20 40 30 35 45C30 60 35 75 35 75C35 75 50 65 55 50C60 35 55 20 55 20Z"
                                    fill="currentColor"
                                    fillOpacity="0.2"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 1.5, delay: 0.4, ease: "easeInOut" }}
                                />
                            </motion.svg>
                        </motion.div>

                        {/* Resort Name */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-center mb-12"
                        >
                            <h1 className="text-[36px] md:text-[48px] font-display text-white tracking-wider mb-2">
                                ASANA
                            </h1>
                            <motion.p
                                className="text-[12px] text-white/60 uppercase tracking-[0.4em]"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                            >
                                Luxury Resort & Spa
                            </motion.p>
                        </motion.div>

                        {/* Progress Bar */}
                        <div className="w-[200px] md:w-[280px]">
                            <div className="h-[2px] bg-white/10 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-accent via-accent to-accent/60"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progress}%` }}
                                    transition={{ duration: 0.1, ease: "linear" }}
                                />
                            </div>

                            {/* Progress Text */}
                            <motion.div
                                className="flex justify-between mt-4 text-[11px] uppercase tracking-wider"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                <span className="text-white/40">Loading</span>
                                <span className="text-accent font-medium">
                                    {Math.round(progress)}%
                                </span>
                            </motion.div>
                        </div>

                        {/* Tagline */}
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.6 }}
                            className="text-white/50 text-[13px] italic mt-12 text-center max-w-[300px]"
                        >
                            "Where luxury meets serenity"
                        </motion.p>
                    </div>

                    {/* Bottom Decorative Wave */}
                    <motion.div
                        className="absolute bottom-0 left-0 right-0 h-[150px]"
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                    >
                        <svg
                            viewBox="0 0 1440 150"
                            className="w-full h-full"
                            preserveAspectRatio="none"
                        >
                            <motion.path
                                d="M0,100 C360,150 720,50 1080,100 C1260,125 1360,140 1440,120 L1440,150 L0,150 Z"
                                fill="rgba(255,255,255,0.03)"
                                animate={{
                                    d: [
                                        "M0,100 C360,150 720,50 1080,100 C1260,125 1360,140 1440,120 L1440,150 L0,150 Z",
                                        "M0,120 C360,50 720,150 1080,80 C1260,95 1360,110 1440,100 L1440,150 L0,150 Z",
                                        "M0,100 C360,150 720,50 1080,100 C1260,125 1360,140 1440,120 L1440,150 L0,150 Z",
                                    ],
                                }}
                                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            />
                        </svg>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Loader;
