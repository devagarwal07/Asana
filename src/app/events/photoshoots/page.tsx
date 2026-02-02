"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Camera, Sun, Sunset, Star, Check } from "lucide-react";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import LoaderWrapper, { useLoading } from "@/components/ui/loader-wrapper";
import { ScrollReveal, ImageReveal } from "@/components/ui/scroll-animations";

const locations = [
    { name: "Tropical Gardens", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=800" },
    { name: "Infinity Pool", image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800" },
    { name: "Mountain Views", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800" },
    { name: "Luxury Suites", image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=800" },
];

const included = ["Location scouting", "Changing rooms", "Power supply", "On-site assistance", "Catering options", "Equipment storage"];

function PhotoshootsContent() {
    const { isLoaded } = useLoading();
    const heroRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
    const heroScale = useTransform(smoothProgress, [0, 1], [1, 1.2]);
    const heroOpacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);

    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <section ref={heroRef} className="relative h-[60vh] min-h-[450px] flex items-center justify-center overflow-hidden">
                <motion.div style={{ scale: heroScale }} className="absolute inset-0">
                    <Image src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2000" alt="Photoshoots" fill className="object-cover" priority />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-b from-primary/60 to-black/50" />
                <motion.div style={{ opacity: heroOpacity }} className="relative z-10 text-center text-white">
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={isLoaded ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} className="flex items-center justify-center gap-2 mb-4">
                        <Camera size={18} className="text-accent" />
                        <span className="label-caps text-accent">Picture Perfect</span>
                    </motion.div>
                    <motion.h1 initial={{ opacity: 0, y: 50 }} animate={isLoaded ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.4 }} className="text-white mb-4">Photoshoots</motion.h1>
                    <motion.p initial={{ opacity: 0, y: 40 }} animate={isLoaded ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.6 }} className="text-white/80 text-[17px] max-w-[500px] mx-auto">
                        Stunning backdrops for editorial, brand, and creative photography
                    </motion.p>
                </motion.div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <ScrollReveal direction="up" distance={40}>
                        <div className="text-center mb-16">
                            <span className="label-caps block mb-4">Locations</span>
                            <h2>Stunning <span className="italic text-secondary">Settings</span></h2>
                        </div>
                    </ScrollReveal>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {locations.map((loc) => (
                            <ScrollReveal key={loc.name} direction="up" distance={50} scale>
                                <motion.div whileHover={{ y: -10 }} className="group">
                                    <div className="relative aspect-[3/4] overflow-hidden mb-4">
                                        <Image src={loc.image} alt={loc.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                    </div>
                                    <h3 className="text-[16px] font-display text-foreground text-center">{loc.name}</h3>
                                </motion.div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-subtle">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <ScrollReveal direction="up" distance={40}>
                                <span className="label-caps block mb-4">Services</span>
                                <h2 className="mb-6">What's <span className="italic text-secondary">Included</span></h2>
                                <div className="grid grid-cols-2 gap-3">
                                    {included.map((item) => (
                                        <div key={item} className="flex items-center gap-3 p-4 bg-white">
                                            <Check size={16} className="text-secondary" />
                                            <span className="text-[14px]">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </ScrollReveal>
                        </div>
                        <ImageReveal>
                            <div className="relative aspect-square">
                                <Image src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800" alt="Photography" fill className="object-cover" />
                            </div>
                        </ImageReveal>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-primary text-white">
                <div className="container text-center">
                    <ScrollReveal direction="up" distance={40}>
                        <h2 className="text-white mb-4">Book Your <span className="italic">Shoot</span></h2>
                        <p className="text-white/70 max-w-[500px] mx-auto mb-8">Contact us for availability, rates, and customized packages.</p>
                        <Link href="/contact" className="btn-secondary">Get in Touch</Link>
                    </ScrollReveal>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default function PhotoshootsPage() {
    return <LoaderWrapper><PhotoshootsContent /></LoaderWrapper>;
}
