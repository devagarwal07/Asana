"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Briefcase, Heart, Sun, Users, MapPin, ArrowRight } from "lucide-react";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import LoaderWrapper, { useLoading } from "@/components/ui/loader-wrapper";
import { ScrollReveal, ImageReveal } from "@/components/ui/scroll-animations";

const openings = [
    { title: "Front Office Manager", department: "Guest Services", type: "Full-time" },
    { title: "Spa Therapist", department: "Wellness", type: "Full-time" },
    { title: "Executive Chef", department: "Culinary", type: "Full-time" },
    { title: "Housekeeping Supervisor", department: "Operations", type: "Full-time" },
    { title: "Marketing Coordinator", department: "Marketing", type: "Full-time" },
];

const benefits = [
    { icon: Heart, title: "Health & Wellness", description: "Comprehensive health coverage and spa access" },
    { icon: Sun, title: "Work-Life Balance", description: "Flexible schedules and paid time off" },
    { icon: Users, title: "Team Culture", description: "Supportive environment and team events" },
    { icon: MapPin, title: "Beautiful Location", description: "Work in one of Vietnam's most scenic areas" },
];

function CareersContent() {
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
                    <Image src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2000" alt="Careers" fill className="object-cover" priority />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-b from-primary/60 to-black/50" />
                <motion.div style={{ opacity: heroOpacity }} className="relative z-10 text-center text-white">
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={isLoaded ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} className="flex items-center justify-center gap-2 mb-4">
                        <Briefcase size={18} className="text-accent" />
                        <span className="label-caps text-accent">Join Our Team</span>
                    </motion.div>
                    <motion.h1 initial={{ opacity: 0, y: 50 }} animate={isLoaded ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.4 }} className="text-white mb-4">Careers</motion.h1>
                    <motion.p initial={{ opacity: 0, y: 40 }} animate={isLoaded ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.6 }} className="text-white/80 text-[17px] max-w-[500px] mx-auto">
                        Build your career with a world-class hospitality team
                    </motion.p>
                </motion.div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <ScrollReveal direction="up" distance={40}>
                        <div className="text-center mb-16">
                            <span className="label-caps block mb-4">Why Asana</span>
                            <h2>Benefits & <span className="italic text-secondary">Perks</span></h2>
                        </div>
                    </ScrollReveal>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit) => (
                            <ScrollReveal key={benefit.title} direction="up" distance={50} scale>
                                <motion.div whileHover={{ y: -10 }} className="p-6 bg-subtle text-center">
                                    <benefit.icon size={40} className="text-secondary mx-auto mb-4" />
                                    <h3 className="text-[18px] font-display text-foreground mb-3">{benefit.title}</h3>
                                    <p className="text-muted-foreground text-[14px]">{benefit.description}</p>
                                </motion.div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-subtle">
                <div className="container">
                    <ScrollReveal direction="up" distance={40}>
                        <div className="text-center mb-16">
                            <span className="label-caps block mb-4">Opportunities</span>
                            <h2>Open <span className="italic text-secondary">Positions</span></h2>
                        </div>
                    </ScrollReveal>
                    <div className="max-w-3xl mx-auto space-y-4">
                        {openings.map((job) => (
                            <ScrollReveal key={job.title} direction="up" distance={40}>
                                <motion.div whileHover={{ x: 10 }} className="p-6 bg-white flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div>
                                        <h3 className="text-[18px] font-display text-foreground">{job.title}</h3>
                                        <p className="text-muted-foreground text-[14px]">{job.department} • {job.type}</p>
                                    </div>
                                    <Link href="/contact" className="text-secondary text-[13px] font-medium uppercase tracking-wider flex items-center gap-2 hover:opacity-70">
                                        Apply <ArrowRight size={14} />
                                    </Link>
                                </motion.div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-primary text-white">
                <div className="container text-center">
                    <ScrollReveal direction="up" distance={40}>
                        <h2 className="text-white mb-4">Don't See Your <span className="italic">Role?</span></h2>
                        <p className="text-white/70 max-w-[500px] mx-auto mb-8">We're always looking for talented individuals. Send us your resume.</p>
                        <a href="mailto:careers@asanaresort.com" className="btn-secondary">Email Your Resume</a>
                    </ScrollReveal>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default function CareersPage() {
    return <LoaderWrapper><CareersContent /></LoaderWrapper>;
}
