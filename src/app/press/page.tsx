"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Newspaper, Award, Download, Mail } from "lucide-react";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import LoaderWrapper, { useLoading } from "@/components/ui/loader-wrapper";
import { ScrollReveal, ImageReveal } from "@/components/ui/scroll-animations";

const awards = [
    { year: "2024", title: "World Luxury Hotel Awards - Best Wellness Retreat" },
    { year: "2024", title: "TripAdvisor Travelers' Choice Award" },
    { year: "2023", title: "Condé Nast Traveler Readers' Choice" },
    { year: "2023", title: "Forbes Travel Guide Five-Star Rating" },
    { year: "2022", title: "World Spa Awards - Best Resort Spa Asia" },
];

const pressReleases = [
    { date: "January 2024", title: "Asana Resort Announces New Sustainability Initiative" },
    { date: "November 2023", title: "Award-Winning Chef Joins Asana Culinary Team" },
    { date: "August 2023", title: "Asana Resort Celebrates 8th Anniversary" },
];

function PressContent() {
    const { isLoaded } = useLoading();
    const heroRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
    const heroScale = useTransform(smoothProgress, [0, 1], [1, 1.2]);
    const heroOpacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);

    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <section ref={heroRef} className="relative h-[55vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <motion.div style={{ scale: heroScale }} className="absolute inset-0">
                    <Image src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2000" alt="Press" fill className="object-cover" priority />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-b from-primary/60 to-black/50" />
                <motion.div style={{ opacity: heroOpacity }} className="relative z-10 text-center text-white">
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={isLoaded ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} className="flex items-center justify-center gap-2 mb-4">
                        <Newspaper size={18} className="text-accent" />
                        <span className="label-caps text-accent">Media Center</span>
                    </motion.div>
                    <motion.h1 initial={{ opacity: 0, y: 50 }} animate={isLoaded ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.4 }} className="text-white">Press</motion.h1>
                </motion.div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <ScrollReveal direction="up" distance={40}>
                                <span className="label-caps block mb-4">Recognition</span>
                                <h2 className="mb-8">Awards & <span className="italic text-secondary">Accolades</span></h2>
                            </ScrollReveal>
                            <div className="space-y-4">
                                {awards.map((award) => (
                                    <ScrollReveal key={award.title} direction="up" distance={40}>
                                        <motion.div whileHover={{ x: 10 }} className="p-4 bg-subtle flex items-center gap-4">
                                            <Award size={24} className="text-secondary flex-shrink-0" />
                                            <div>
                                                <span className="text-[12px] text-secondary uppercase tracking-wider">{award.year}</span>
                                                <p className="text-[14px] text-foreground">{award.title}</p>
                                            </div>
                                        </motion.div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                        <div>
                            <ScrollReveal direction="up" distance={40}>
                                <span className="label-caps block mb-4">News</span>
                                <h2 className="mb-8">Press <span className="italic text-secondary">Releases</span></h2>
                            </ScrollReveal>
                            <div className="space-y-4">
                                {pressReleases.map((release) => (
                                    <ScrollReveal key={release.title} direction="up" distance={40}>
                                        <motion.div whileHover={{ x: 10 }} className="p-4 bg-subtle">
                                            <span className="text-[12px] text-muted-foreground">{release.date}</span>
                                            <p className="text-[14px] text-foreground font-medium">{release.title}</p>
                                        </motion.div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-subtle">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                        <ScrollReveal direction="up" distance={40}>
                            <motion.div whileHover={{ y: -5 }} className="p-8 bg-white text-center">
                                <Download size={40} className="text-secondary mx-auto mb-4" />
                                <h3 className="text-[18px] font-display text-foreground mb-3">Press Kit</h3>
                                <p className="text-muted-foreground text-[14px] mb-4">Download logos, images, and fact sheets</p>
                                <Link href="/contact" className="btn-outline text-[12px]">Download</Link>
                            </motion.div>
                        </ScrollReveal>
                        <ScrollReveal direction="up" distance={40}>
                            <motion.div whileHover={{ y: -5 }} className="p-8 bg-white text-center">
                                <Mail size={40} className="text-secondary mx-auto mb-4" />
                                <h3 className="text-[18px] font-display text-foreground mb-3">Media Inquiries</h3>
                                <p className="text-muted-foreground text-[14px] mb-4">Contact our communications team</p>
                                <a href="mailto:press@asanaresort.com" className="btn-outline text-[12px]">Email Us</a>
                            </motion.div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default function PressPage() {
    return <LoaderWrapper><PressContent /></LoaderWrapper>;
}
