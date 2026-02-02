"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Heart, Award, Users, Leaf, Star } from "lucide-react";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import LoaderWrapper, { useLoading } from "@/components/ui/loader-wrapper";
import { ScrollReveal, ImageReveal } from "@/components/ui/scroll-animations";

const values = [
    { icon: Heart, title: "Heartfelt Service", description: "Every interaction designed to make you feel treasured and cared for." },
    { icon: Award, title: "Excellence", description: "Uncompromising standards in every detail of your experience." },
    { icon: Leaf, title: "Sustainability", description: "Committed to preserving our natural environment for future generations." },
    { icon: Users, title: "Community", description: "Supporting local artisans, farmers, and traditions." },
];

const stats = [
    { number: "2015", label: "Established" },
    { number: "45", label: "Luxury Rooms" },
    { number: "150+", label: "Team Members" },
    { number: "98%", label: "Guest Satisfaction" },
];

function AboutContent() {
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
                    <Image src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2000" alt="About Asana Resort" fill className="object-cover" priority />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-b from-primary/60 to-black/50" />
                <motion.div style={{ opacity: heroOpacity }} className="relative z-10 text-center text-white">
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={isLoaded ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} className="flex items-center justify-center gap-1 mb-4">
                        {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-accent" fill="currentColor" />)}
                    </motion.div>
                    <motion.span initial={{ opacity: 0, y: 40 }} animate={isLoaded ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.3 }} className="label-caps text-accent block mb-4">Our Story</motion.span>
                    <motion.h1 initial={{ opacity: 0, y: 50 }} animate={isLoaded ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.4 }} className="text-white">About Us</motion.h1>
                </motion.div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <ScrollReveal direction="up" distance={40}>
                                <span className="label-caps block mb-4">Our Beginning</span>
                                <h2 className="mb-6">A Vision of <span className="italic text-secondary">Tranquility</span></h2>
                                <p className="text-muted-foreground mb-6">
                                    Founded in 2015, Asana Resort was born from a dream to create a sanctuary where luxury meets nature. Nestled in the misty highlands of Đà Lạt, Vietnam, our resort offers an escape from the ordinary.
                                </p>
                                <p className="text-muted-foreground">
                                    Every element of Asana has been thoughtfully designed to nurture your well-being—from our award-winning spa to our farm-to-table dining, from our sustainably-designed architecture to our genuine Vietnamese hospitality.
                                </p>
                            </ScrollReveal>
                        </div>
                        <ImageReveal>
                            <div className="relative aspect-[4/5]">
                                <Image src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800" alt="Resort entrance" fill className="object-cover" />
                            </div>
                        </ImageReveal>
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
                    <ScrollReveal direction="up" distance={40}>
                        <div className="text-center mb-16">
                            <span className="label-caps block mb-4">What We Stand For</span>
                            <h2>Our <span className="italic text-secondary">Values</span></h2>
                        </div>
                    </ScrollReveal>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value) => (
                            <ScrollReveal key={value.title} direction="up" distance={50} scale>
                                <motion.div whileHover={{ y: -10 }} className="p-6 bg-subtle text-center">
                                    <value.icon size={40} className="text-secondary mx-auto mb-4" />
                                    <h3 className="text-[18px] font-display text-foreground mb-3">{value.title}</h3>
                                    <p className="text-muted-foreground text-[14px]">{value.description}</p>
                                </motion.div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-subtle">
                <div className="container text-center">
                    <ScrollReveal direction="up" distance={40}>
                        <h2 className="mb-4">Experience <span className="italic text-secondary">Asana</span></h2>
                        <p className="text-muted-foreground max-w-[500px] mx-auto mb-8">We invite you to discover the magic of our highland sanctuary.</p>
                        <Link href="/contact" className="btn-primary">Plan Your Visit</Link>
                    </ScrollReveal>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default function AboutPage() {
    return <LoaderWrapper><AboutContent /></LoaderWrapper>;
}
