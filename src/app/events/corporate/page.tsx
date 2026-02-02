"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Building2, Users, Wifi, Coffee, Presentation, Target, Check } from "lucide-react";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import LoaderWrapper, { useLoading } from "@/components/ui/loader-wrapper";
import { ScrollReveal, ImageReveal } from "@/components/ui/scroll-animations";

const meetingSpaces = [
    { name: "Executive Boardroom", capacity: "12 guests", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800" },
    { name: "Conference Center", capacity: "50 guests", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800" },
    { name: "Outdoor Pavilion", capacity: "80 guests", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800" },
];

const teamActivities = ["Cooking challenges", "Mountain trekking", "Mindfulness workshops", "Coffee tours", "Team games", "Wellness sessions"];

function CorporateContent() {
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
                    <Image src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2000" alt="Corporate Retreats" fill className="object-cover" priority />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-b from-primary/60 to-black/50" />
                <motion.div style={{ opacity: heroOpacity }} className="relative z-10 text-center text-white">
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={isLoaded ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} className="flex items-center justify-center gap-2 mb-4">
                        <Building2 size={18} className="text-accent" />
                        <span className="label-caps text-accent">Inspire Your Team</span>
                    </motion.div>
                    <motion.h1 initial={{ opacity: 0, y: 50 }} animate={isLoaded ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.4 }} className="text-white mb-4">Corporate Retreats</motion.h1>
                </motion.div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <ScrollReveal direction="up" distance={40}>
                        <div className="text-center mb-16">
                            <span className="label-caps block mb-4">Our Spaces</span>
                            <h2>Meeting <span className="italic text-secondary">Venues</span></h2>
                        </div>
                    </ScrollReveal>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {meetingSpaces.map((space) => (
                            <ScrollReveal key={space.name} direction="up" distance={50} scale>
                                <motion.div whileHover={{ y: -10 }} className="bg-white overflow-hidden group">
                                    <div className="relative aspect-[4/3] overflow-hidden">
                                        <Image src={space.image} alt={space.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-[20px] font-display text-foreground mb-2">{space.name}</h3>
                                        <p className="text-secondary text-[13px] uppercase tracking-wider">{space.capacity}</p>
                                    </div>
                                </motion.div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-subtle">
                <div className="container">
                    <ScrollReveal direction="up" distance={40}>
                        <div className="text-center mb-12">
                            <h2>Team <span className="italic text-secondary">Activities</span></h2>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                            {teamActivities.map((activity) => (
                                <div key={activity} className="flex items-center gap-3 p-4 bg-white">
                                    <Check size={16} className="text-secondary" />
                                    <span className="text-[14px]">{activity}</span>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <section className="py-20 bg-primary text-white">
                <div className="container text-center">
                    <ScrollReveal direction="up" distance={40}>
                        <h2 className="text-white mb-4">Plan Your <span className="italic">Retreat</span></h2>
                        <p className="text-white/70 max-w-[500px] mx-auto mb-8">Let our corporate events team design a customized program for your organization.</p>
                        <Link href="/contact" className="btn-secondary">Request Proposal</Link>
                    </ScrollReveal>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default function CorporatePage() {
    return <LoaderWrapper><CorporateContent /></LoaderWrapper>;
}
