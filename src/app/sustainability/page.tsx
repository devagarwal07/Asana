"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Leaf, Droplets, Sun, Recycle, Users, Heart, Check } from "lucide-react";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import LoaderWrapper, { useLoading } from "@/components/ui/loader-wrapper";
import { ScrollReveal, ImageReveal } from "@/components/ui/scroll-animations";

const initiatives = [
    { icon: Droplets, title: "Water Conservation", description: "Rainwater harvesting and greywater recycling systems" },
    { icon: Sun, title: "Solar Energy", description: "40% of our energy comes from renewable sources" },
    { icon: Recycle, title: "Zero Waste Goal", description: "Comprehensive recycling and composting programs" },
    { icon: Users, title: "Community Support", description: "Partnership with local farmers and artisans" },
];

const stats = [
    { number: "40%", label: "Renewable Energy" },
    { number: "80%", label: "Local Sourcing" },
    { number: "0", label: "Single-Use Plastics" },
    { number: "5000+", label: "Trees Planted" },
];

const practices = [
    "Organic farm-to-table dining",
    "Biodegradable amenities",
    "Electric vehicle fleet",
    "Wildlife habitat preservation",
    "Staff sustainability training",
    "Carbon offset program",
];

function SustainabilityContent() {
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
                    <Image src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2000" alt="Sustainability" fill className="object-cover" priority />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-b from-primary/60 to-black/50" />
                <motion.div style={{ opacity: heroOpacity }} className="relative z-10 text-center text-white">
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={isLoaded ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} className="flex items-center justify-center gap-2 mb-4">
                        <Leaf size={18} className="text-accent" />
                        <span className="label-caps text-accent">Our Commitment</span>
                    </motion.div>
                    <motion.h1 initial={{ opacity: 0, y: 50 }} animate={isLoaded ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.4 }} className="text-white mb-4">Sustainability</motion.h1>
                    <motion.p initial={{ opacity: 0, y: 40 }} animate={isLoaded ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.6 }} className="text-white/80 text-[17px] max-w-[500px] mx-auto">
                        Preserving natural beauty for future generations
                    </motion.p>
                </motion.div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <ScrollReveal direction="up" distance={40}>
                        <div className="text-center mb-16">
                            <span className="label-caps block mb-4">Our Initiatives</span>
                            <h2>Environmental <span className="italic text-secondary">Stewardship</span></h2>
                        </div>
                    </ScrollReveal>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {initiatives.map((item) => (
                            <ScrollReveal key={item.title} direction="up" distance={50} scale>
                                <motion.div whileHover={{ y: -10 }} className="p-6 bg-subtle text-center">
                                    <item.icon size={40} className="text-secondary mx-auto mb-4" />
                                    <h3 className="text-[18px] font-display text-foreground mb-3">{item.title}</h3>
                                    <p className="text-muted-foreground text-[14px]">{item.description}</p>
                                </motion.div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-primary text-white">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat) => (
                            <ScrollReveal key={stat.label} direction="up" distance={40}>
                                <div className="text-center">
                                    <div className="text-[48px] font-display text-accent mb-2">{stat.number}</div>
                                    <div className="text-[14px] text-white/70 uppercase tracking-wider">{stat.label}</div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <ImageReveal>
                            <div className="relative aspect-[4/5]">
                                <Image src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800" alt="Green practices" fill className="object-cover" />
                            </div>
                        </ImageReveal>
                        <div>
                            <ScrollReveal direction="up" distance={40}>
                                <span className="label-caps block mb-4">Our Practices</span>
                                <h2 className="mb-6">Green <span className="italic text-secondary">Operations</span></h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {practices.map((practice) => (
                                        <div key={practice} className="flex items-center gap-3 p-4 bg-subtle">
                                            <Check size={16} className="text-secondary" />
                                            <span className="text-[14px]">{practice}</span>
                                        </div>
                                    ))}
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-subtle">
                <div className="container text-center">
                    <ScrollReveal direction="up" distance={40}>
                        <Leaf size={40} className="text-secondary mx-auto mb-6" />
                        <h2 className="mb-4">Join Our <span className="italic text-secondary">Mission</span></h2>
                        <p className="text-muted-foreground max-w-[500px] mx-auto mb-8">Learn how you can contribute to sustainable tourism during your stay.</p>
                        <Link href="/contact" className="btn-primary">Learn More</Link>
                    </ScrollReveal>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default function SustainabilityPage() {
    return <LoaderWrapper><SustainabilityContent /></LoaderWrapper>;
}
