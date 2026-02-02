"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Heart, Star, Check, Users, Music, Utensils, Camera } from "lucide-react";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import LoaderWrapper, { useLoading } from "@/components/ui/loader-wrapper";
import { ScrollReveal, TextReveal, ImageReveal } from "@/components/ui/scroll-animations";

const venues = [
    {
        name: "Garden Pavilion",
        capacity: "Up to 200 guests",
        description: "An open-air venue surrounded by tropical gardens with stunning mountain views.",
        image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800",
    },
    {
        name: "Lakeside Terrace",
        capacity: "Up to 100 guests",
        description: "Intimate waterfront setting perfect for romantic ceremonies and receptions.",
        image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=800",
    },
    {
        name: "Grand Ballroom",
        capacity: "Up to 300 guests",
        description: "Elegant indoor space with crystal chandeliers and panoramic windows.",
        image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800",
    },
];

const packages = [
    {
        name: "Intimate",
        guests: "Up to 50",
        includes: ["Ceremony venue", "2-hour reception", "Basic floral", "Champagne toast"],
    },
    {
        name: "Classic",
        guests: "Up to 100",
        includes: ["Ceremony + reception venue", "4-hour reception", "Premium florals", "3-course dinner", "Wedding cake"],
    },
    {
        name: "Luxury",
        guests: "Up to 200",
        includes: ["Full venue access", "6-hour reception", "Luxury florals", "5-course dinner", "Custom cake", "Live music", "Bridal suite"],
    },
];

const services = [
    { icon: Users, name: "Wedding Planner" },
    { icon: Utensils, name: "Catering & Menu Design" },
    { icon: Music, name: "Entertainment" },
    { icon: Camera, name: "Photography & Video" },
];

function WeddingsContent() {
    const { isLoaded } = useLoading();
    const heroRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
    const heroScale = useTransform(smoothProgress, [0, 1], [1, 1.2]);
    const heroOpacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero */}
            <section ref={heroRef} className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <motion.div style={{ scale: heroScale }} className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000"
                        alt="Weddings at Asana Resort"
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-black/50" />

                <motion.div
                    style={{ opacity: heroOpacity }}
                    className="relative z-10 text-center text-white"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex items-center justify-center gap-2 mb-4"
                    >
                        <Heart size={18} className="text-accent" fill="currentColor" />
                        <span className="label-caps text-accent">Forever Begins Here</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-white mb-4"
                    >
                        Weddings
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-white/80 text-[17px] max-w-[500px] mx-auto"
                    >
                        Create the wedding of your dreams in paradise
                    </motion.p>
                </motion.div>
            </section>

            {/* Intro */}
            <section className="section-padding">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <ScrollReveal direction="up" distance={40}>
                            <span className="label-caps block mb-4">Your Special Day</span>
                            <h2 className="mb-6">
                                A <span className="italic text-secondary">Magical</span> Setting for Your Love Story
                            </h2>
                            <p className="text-muted-foreground text-[17px] leading-relaxed">
                                Nestled in the misty highlands of Đà Lạt, Asana Resort offers breathtaking venues for your wedding celebration. From intimate garden ceremonies to grand ballroom receptions, our dedicated team ensures every detail reflects your unique love story.
                            </p>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Venues */}
            <section className="py-20 bg-subtle">
                <div className="container">
                    <ScrollReveal direction="up" distance={40}>
                        <div className="text-center mb-16">
                            <span className="label-caps block mb-4">Our Venues</span>
                            <h2>
                                Stunning <span className="italic text-secondary">Locations</span>
                            </h2>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {venues.map((venue, index) => (
                            <ScrollReveal key={venue.name} direction="up" distance={50} scale>
                                <motion.div
                                    whileHover={{ y: -10 }}
                                    className="bg-white overflow-hidden group"
                                >
                                    <div className="relative aspect-[4/3] overflow-hidden">
                                        <Image
                                            src={venue.image}
                                            alt={venue.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-[20px] font-display text-foreground mb-2">
                                            {venue.name}
                                        </h3>
                                        <p className="text-secondary text-[13px] uppercase tracking-wider mb-3">
                                            {venue.capacity}
                                        </p>
                                        <p className="text-muted-foreground text-[14px]">
                                            {venue.description}
                                        </p>
                                    </div>
                                </motion.div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Packages */}
            <section className="section-padding">
                <div className="container">
                    <ScrollReveal direction="up" distance={40}>
                        <div className="text-center mb-16">
                            <span className="label-caps block mb-4">Packages</span>
                            <h2>
                                Wedding <span className="italic text-secondary">Collections</span>
                            </h2>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {packages.map((pkg, index) => (
                            <ScrollReveal key={pkg.name} direction="up" distance={50}>
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className={`p-8 h-full ${index === 2 ? 'bg-primary text-white' : 'bg-subtle'}`}
                                >
                                    <h3 className={`text-[24px] font-display mb-2 ${index === 2 ? 'text-white' : 'text-foreground'}`}>
                                        {pkg.name}
                                    </h3>
                                    <p className={`text-[14px] uppercase tracking-wider mb-6 ${index === 2 ? 'text-accent' : 'text-secondary'}`}>
                                        {pkg.guests} guests
                                    </p>
                                    <ul className="space-y-3">
                                        {pkg.includes.map((item) => (
                                            <li key={item} className={`flex items-center gap-3 text-[14px] ${index === 2 ? 'text-white/80' : 'text-muted-foreground'}`}>
                                                <Check size={16} className={index === 2 ? 'text-accent' : 'text-secondary'} />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-20 bg-subtle">
                <div className="container">
                    <ScrollReveal direction="up" distance={40}>
                        <div className="text-center mb-12">
                            <h2>
                                Full-Service <span className="italic text-secondary">Support</span>
                            </h2>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {services.map((service, index) => (
                            <ScrollReveal key={service.name} direction="up" distance={40}>
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="p-6 bg-white text-center"
                                >
                                    <service.icon size={32} className="text-secondary mx-auto mb-4" />
                                    <p className="text-[14px] font-medium text-foreground">{service.name}</p>
                                </motion.div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-primary text-white">
                <div className="container text-center">
                    <ScrollReveal direction="up" distance={40}>
                        <Heart size={40} className="text-accent mx-auto mb-6" fill="currentColor" />
                        <h2 className="text-white mb-4">
                            Begin Your <span className="italic">Forever</span>
                        </h2>
                        <p className="text-white/70 max-w-[500px] mx-auto mb-8">
                            Schedule a venue tour and consultation with our wedding specialists.
                        </p>
                        <Link href="/contact" className="btn-secondary">
                            Schedule Consultation
                        </Link>
                    </ScrollReveal>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default function WeddingsPage() {
    return (
        <LoaderWrapper>
            <WeddingsContent />
        </LoaderWrapper>
    );
}
