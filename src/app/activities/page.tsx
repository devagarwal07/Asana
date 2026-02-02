"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
    Mountain,
    Bike,
    Sailboat,
    TreePine,
    Camera,
    Coffee,
    Utensils,
    Star,
    ArrowRight,
} from "lucide-react";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import LoaderWrapper, { useLoading } from "@/components/ui/loader-wrapper";
import { ScrollReveal, TextReveal, ImageReveal } from "@/components/ui/scroll-animations";

const activities = [
    {
        icon: Mountain,
        name: "Mountain Trekking",
        description: "Explore scenic trails through lush hills with our expert guides. Experience breathtaking sunrise views at Lang Biang Peak.",
        duration: "4-6 hours",
        difficulty: "Moderate",
        image: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800",
    },
    {
        icon: Bike,
        name: "Cycling Tours",
        description: "Discover hidden villages and tea plantations on guided cycling adventures through the Vietnamese countryside.",
        duration: "3-4 hours",
        difficulty: "Easy to Moderate",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800",
    },
    {
        icon: Sailboat,
        name: "Lake Excursions",
        description: "Peaceful boat rides on Tuyền Lâm Lake with picnic options and photography stops at scenic viewpoints.",
        duration: "2-3 hours",
        difficulty: "Easy",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800",
    },
    {
        icon: TreePine,
        name: "Forest Bathing",
        description: "Japanese-inspired Shinrin-yoku experience in our ancient pine forests. Mindfulness and nature connection.",
        duration: "2 hours",
        difficulty: "Easy",
        image: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=800",
    },
    {
        icon: Camera,
        name: "Photography Tours",
        description: "Capture stunning landscapes with professional photographer guidance. Dawn and dusk sessions available.",
        duration: "3 hours",
        difficulty: "Easy",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800",
    },
    {
        icon: Coffee,
        name: "Coffee Plantation Visit",
        description: "Learn about Vietnamese coffee culture with plantation tours, roasting demonstrations, and tasting sessions.",
        duration: "2-3 hours",
        difficulty: "Easy",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800",
    },
    {
        icon: Utensils,
        name: "Cooking Classes",
        description: "Master Vietnamese cuisine with our chefs. Market visits, hands-on cooking, and dining on your creations.",
        duration: "4 hours",
        difficulty: "Easy",
        image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800",
    },
];

function ActivitiesContent() {
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
            <section ref={heroRef} className="relative h-[60vh] min-h-[450px] flex items-center justify-center overflow-hidden">
                <motion.div style={{ scale: heroScale }} className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=2000"
                        alt="Activities at Asana Resort"
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-b from-primary/60 to-black/50" />

                <motion.div
                    style={{ opacity: heroOpacity }}
                    className="relative z-10 text-center text-white"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex items-center justify-center gap-1 mb-4"
                    >
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={14} className="text-accent" fill="currentColor" />
                        ))}
                    </motion.div>
                    <motion.span
                        initial={{ opacity: 0, y: 40 }}
                        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="label-caps text-accent block mb-4"
                    >
                        Curated Experiences
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-white mb-4"
                    >
                        Activities & Adventures
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-white/80 text-[17px] max-w-[500px] mx-auto"
                    >
                        Discover the natural beauty of Đà Lạt through immersive experiences
                    </motion.p>
                </motion.div>
            </section>

            {/* Activities Grid */}
            <section className="section-padding">
                <div className="container">
                    <ScrollReveal direction="up" distance={40}>
                        <div className="text-center mb-16">
                            <span className="label-caps block mb-4">Explore</span>
                            <h2>
                                Unforgettable <span className="italic text-secondary">Experiences</span>
                            </h2>
                            <div className="divider mx-auto mt-6" />
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {activities.map((activity, index) => (
                            <ScrollReveal key={activity.name} direction="up" distance={50} scale>
                                <motion.div
                                    whileHover={{ y: -10 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="group bg-white overflow-hidden"
                                >
                                    <div className="relative aspect-[4/3] overflow-hidden">
                                        <Image
                                            src={activity.image}
                                            alt={activity.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <div className="flex items-center gap-2 mb-2">
                                                <activity.icon size={20} className="text-accent" />
                                                <span className="text-white/80 text-[12px] uppercase tracking-wider">
                                                    {activity.duration}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-[20px] font-display text-foreground mb-3 group-hover:text-secondary transition-colors">
                                            {activity.name}
                                        </h3>
                                        <p className="text-muted-foreground text-[14px] mb-4 line-clamp-3">
                                            {activity.description}
                                        </p>
                                        <div className="flex justify-between items-center">
                                            <span className="text-[12px] text-secondary uppercase tracking-wider">
                                                {activity.difficulty}
                                            </span>
                                            <Link
                                                href="/contact"
                                                className="text-secondary text-[13px] font-medium uppercase tracking-wider hover:opacity-70 transition-opacity inline-flex items-center gap-2"
                                            >
                                                Book Now
                                                <ArrowRight size={14} />
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary text-white">
                <div className="container text-center">
                    <ScrollReveal direction="up" distance={40}>
                        <h2 className="text-white mb-4">
                            Plan Your <span className="italic">Adventure</span>
                        </h2>
                        <p className="text-white/70 max-w-[500px] mx-auto mb-8">
                            Our concierge team is ready to curate your perfect experience. Contact us to customize your adventure.
                        </p>
                        <Link href="/contact" className="btn-secondary">
                            Contact Concierge
                        </Link>
                    </ScrollReveal>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default function ActivitiesPage() {
    return (
        <LoaderWrapper>
            <ActivitiesContent />
        </LoaderWrapper>
    );
}
