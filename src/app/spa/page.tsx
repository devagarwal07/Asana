"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
    Droplets,
    Flower2,
    Heart,
    Sparkles,
    Clock,
    Check,
    Leaf,
    Award,
    Star,
} from "lucide-react";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import LoaderWrapper, { useLoading } from "@/components/ui/loader-wrapper";
import { ScrollReveal, TextReveal, ImageReveal, Parallax, FadeInView } from "@/components/ui/scroll-animations";

const treatments = [
    {
        category: "Massage",
        items: [
            {
                name: "Vietnamese Traditional Massage",
                duration: "60 min",
                price: 85,
                description: "Ancient healing techniques passed down through generations",
            },
            {
                name: "Hot Stone Therapy",
                duration: "90 min",
                price: 120,
                description: "Volcanic stones combined with aromatherapy oils",
            },
            {
                name: "Deep Tissue Massage",
                duration: "75 min",
                price: 110,
                description: "Intensive treatment for muscle tension relief",
            },
            {
                name: "Couples Retreat",
                duration: "120 min",
                price: 280,
                description: "Shared wellness journey for two",
            },
        ],
    },
    {
        category: "Body Treatments",
        items: [
            {
                name: "Coffee Body Scrub",
                duration: "45 min",
                price: 75,
                description: "Local highland coffee for exfoliation and energizing",
            },
            {
                name: "Herbal Body Wrap",
                duration: "60 min",
                price: 95,
                description: "Traditional Vietnamese botanicals detox wrap",
            },
            {
                name: "Mud Therapy",
                duration: "75 min",
                price: 105,
                description: "Mineral-rich volcanic mud treatment",
            },
        ],
    },
    {
        category: "Facial Treatments",
        items: [
            {
                name: "Signature Facial",
                duration: "60 min",
                price: 90,
                description: "Customized treatment for radiant skin",
            },
            {
                name: "Anti-Aging Ritual",
                duration: "90 min",
                price: 150,
                description: "Advanced rejuvenation with premium ingredients",
            },
            {
                name: "Hydration Boost",
                duration: "45 min",
                price: 70,
                description: "Deep moisture restoration for tired skin",
            },
        ],
    },
];

const packages = [
    {
        name: "Half Day Retreat",
        duration: "3 hours",
        price: 250,
        includes: ["Welcome drink", "Body scrub", "Massage (60 min)", "Facial", "Herbal tea"],
        featured: false,
    },
    {
        name: "Full Day Wellness",
        duration: "6 hours",
        price: 450,
        includes: ["Welcome ritual", "Body treatment", "Lunch", "Massage (90 min)", "Facial", "Manicure", "Meditation session"],
        featured: true,
    },
    {
        name: "Couples Bliss",
        duration: "4 hours",
        price: 520,
        includes: ["Champagne welcome", "Couples massage", "Private jacuzzi", "Body treatment", "Romantic dinner setup"],
        featured: false,
    },
];

const facilities = [
    { name: "Infinity Pool", description: "Overlooking the valley" },
    { name: "Steam Room", description: "Eucalyptus-infused" },
    { name: "Jacuzzi", description: "Indoor & outdoor options" },
    { name: "Yoga Pavilion", description: "Daily classes" },
    { name: "Meditation Garden", description: "Tranquil sanctuary" },
    { name: "Tea Lounge", description: "Herbal refreshments" },
];

function SpaContent() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const { isLoaded } = useLoading();
    const heroRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
    const heroScale = useTransform(smoothProgress, [0, 1], [1, 1.2]);
    const heroOpacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);

    const categories = ["All", ...treatments.map((t) => t.category)];

    const filteredTreatments = selectedCategory === "All"
        ? treatments
        : treatments.filter((t) => t.category === selectedCategory);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
    };

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero */}
            <section ref={heroRef} className="relative h-[70vh] min-h-[550px] flex items-center justify-center overflow-hidden">
                <motion.div style={{ scale: heroScale }} className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2000"
                        alt="Luxury spa sanctuary"
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/30 to-black/60" />

                <motion.div
                    style={{ opacity: heroOpacity }}
                    className="relative z-10 text-center text-white max-w-[750px] px-6"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <Award size={18} className="text-accent" />
                            <span className="label-caps text-accent">World Luxury Spa Awards 2024</span>
                        </div>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-white mb-6"
                    >
                        The Sanctuary
                        <span className="italic text-accent block">Spa & Wellness</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-white/85 text-[18px] leading-relaxed"
                    >
                        Immerse yourself in a world of tranquility spanning 3,000 square meters
                        where ancient Vietnamese healing traditions meet modern wellness.
                    </motion.p>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isLoaded ? { opacity: 1 } : {}}
                    transition={{ delay: 1.2 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="flex flex-col items-center gap-2 text-white/60"
                    >
                        <span className="text-[10px] uppercase tracking-[0.2em]">Explore</span>
                        <div className="w-[1px] h-6 bg-white/40" />
                    </motion.div>
                </motion.div>
            </section>

            {/* Introduction */}
            <section className="section-padding">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <ScrollReveal direction="up" distance={50}>
                                <span className="label-caps block mb-4">Our Philosophy</span>
                            </ScrollReveal>
                            <TextReveal>
                                <h2 className="mb-6">
                                    Healing Through
                                    <span className="italic text-secondary"> Balance</span>
                                </h2>
                            </TextReveal>
                            <ScrollReveal direction="up" distance={40}>
                                <div className="divider mb-8" />
                            </ScrollReveal>
                            <ScrollReveal direction="up" distance={50} blur>
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    At The Sanctuary Spa, we believe true wellness comes from harmony
                                    between mind, body, and spirit. Our therapists are trained in both
                                    traditional Vietnamese healing arts and contemporary techniques.
                                </p>
                            </ScrollReveal>
                            <ScrollReveal direction="up" distance={50} blur>
                                <p className="text-muted-foreground leading-relaxed mb-8">
                                    Using locally-sourced ingredients and organic products, each
                                    treatment is designed to restore balance and rejuvenate your senses.
                                </p>
                            </ScrollReveal>
                            <ScrollReveal direction="up" distance={40}>
                                <Link href="/contact" className="btn-primary">
                                    Book a Treatment
                                </Link>
                            </ScrollReveal>
                        </div>

                        <div className="relative">
                            <ImageReveal>
                                <div className="relative aspect-[4/5]">
                                    <Image
                                        src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800"
                                        alt="Spa treatment"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </ImageReveal>
                            <Parallax speed={0.4}>
                                <div className="absolute -bottom-8 -left-8 w-[55%] aspect-square p-4 bg-white floating-shadow z-10">
                                    <Image
                                        src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=500"
                                        alt="Spa pool"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </Parallax>
                        </div>
                    </div>
                </div>
            </section>

            {/* Spa Packages */}
            <section className="section-padding bg-subtle">
                <div className="container">
                    <div className="text-center mb-16">
                        <ScrollReveal direction="up" distance={50}>
                            <span className="label-caps block mb-4">Curated Experiences</span>
                        </ScrollReveal>
                        <TextReveal>
                            <h2>Spa Packages</h2>
                        </TextReveal>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {packages.map((pkg, index) => (
                            <ScrollReveal key={index} direction="up" distance={50} scale>
                                <motion.div
                                    whileHover={{ y: -10, scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className={`bg-white p-8 h-full ${pkg.featured ? "ring-2 ring-secondary relative" : ""}`}
                                >
                                    {pkg.featured && (
                                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-secondary text-white text-[10px] uppercase tracking-wider font-semibold">
                                            Most Popular
                                        </span>
                                    )}
                                    <h3 className="text-[24px] font-display text-foreground mb-2">
                                        {pkg.name}
                                    </h3>
                                    <div className="flex items-center gap-2 text-muted-foreground text-[13px] mb-4">
                                        <Clock size={14} />
                                        {pkg.duration}
                                    </div>
                                    <div className="text-[36px] font-display text-secondary mb-6">
                                        ${pkg.price}
                                    </div>
                                    <div className="h-[1px] bg-border mb-6" />
                                    <ul className="space-y-3 mb-8">
                                        {pkg.includes.map((item, i) => (
                                            <li key={i} className="flex items-center gap-2 text-[14px] text-muted-foreground">
                                                <Check size={14} className="text-secondary flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link
                                        href="/contact"
                                        className={pkg.featured ? "btn-primary w-full text-center block" : "btn-outline w-full text-center block"}
                                    >
                                        Book Package
                                    </Link>
                                </motion.div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Treatment Menu */}
            <section className="section-padding">
                <div className="container">
                    <div className="text-center mb-12">
                        <ScrollReveal direction="up" distance={50}>
                            <span className="label-caps block mb-4">Treatment Menu</span>
                        </ScrollReveal>
                        <TextReveal>
                            <h2>À La Carte</h2>
                        </TextReveal>
                    </div>

                    {/* Category Filter */}
                    <ScrollReveal direction="up" distance={40}>
                        <div className="flex flex-wrap justify-center gap-3 mb-12">
                            {categories.map((cat) => (
                                <motion.button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`px-5 py-2.5 text-[12px] font-medium uppercase tracking-wider transition-all ${selectedCategory === cat
                                        ? "bg-secondary text-white"
                                        : "bg-subtle text-muted-foreground hover:bg-muted"
                                        }`}
                                >
                                    {cat}
                                </motion.button>
                            ))}
                        </div>
                    </ScrollReveal>

                    {/* Treatment List */}
                    <div className="max-w-[800px] mx-auto">
                        {filteredTreatments.map((category, catIndex) => (
                            <ScrollReveal key={catIndex} direction="up" distance={40}>
                                <div className="mb-12">
                                    <h3 className="text-[22px] font-display text-foreground mb-6 flex items-center gap-3">
                                        <Leaf size={20} className="text-secondary" />
                                        {category.category}
                                    </h3>
                                    <div className="space-y-4">
                                        {category.items.map((item, itemIndex) => (
                                            <motion.div
                                                key={itemIndex}
                                                whileHover={{ x: 10, backgroundColor: "white", boxShadow: "0 10px 40px rgba(0,0,0,0.1)" }}
                                                className="flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-subtle transition-all group"
                                            >
                                                <div className="flex-1">
                                                    <h4 className="text-[16px] font-medium text-foreground group-hover:text-secondary transition-colors">
                                                        {item.name}
                                                    </h4>
                                                    <p className="text-[13px] text-muted-foreground mt-1">
                                                        {item.description}
                                                    </p>
                                                </div>
                                                <div className="flex items-center gap-6 mt-4 sm:mt-0">
                                                    <span className="text-[13px] text-muted-foreground">
                                                        {item.duration}
                                                    </span>
                                                    <span className="text-[18px] font-display text-secondary">
                                                        ${item.price}
                                                    </span>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Facilities */}
            <section className="section-padding bg-primary text-white">
                <div className="container">
                    <div className="text-center mb-12">
                        <ScrollReveal direction="up" distance={50}>
                            <span className="label-caps text-accent block mb-4">Spa Facilities</span>
                        </ScrollReveal>
                        <TextReveal>
                            <h2 className="text-white">Our Amenities</h2>
                        </TextReveal>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {facilities.map((facility, index) => (
                            <ScrollReveal key={index} direction="up" distance={40} scale>
                                <motion.div
                                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                                    className="text-center p-6 border border-white/20 transition-colors"
                                >
                                    <h4 className="text-[15px] font-medium mb-2">{facility.name}</h4>
                                    <p className="text-[12px] text-white/60">{facility.description}</p>
                                </motion.div>
                            </ScrollReveal>
                        ))}
                    </div>

                    <ScrollReveal direction="up" distance={40}>
                        <div className="text-center mt-12">
                            <Link href="/contact" className="btn-outline border-white/50 text-white hover:bg-white hover:text-primary">
                                Book Your Spa Experience
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default function SpaPage() {
    return (
        <LoaderWrapper>
            <SpaContent />
        </LoaderWrapper>
    );
}
