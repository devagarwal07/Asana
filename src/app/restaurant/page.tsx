"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Clock, Utensils, Wine, Coffee, ChefHat, MapPin, Star, Award } from "lucide-react";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import LoaderWrapper, { useLoading } from "@/components/ui/loader-wrapper";
import { ScrollReveal, TextReveal, ImageReveal, Parallax, FadeInView } from "@/components/ui/scroll-animations";

const restaurants = [
    {
        id: "lotus-garden",
        name: "Lotus Garden",
        cuisine: "Vietnamese Fine Dining",
        description: "A celebration of Vietnamese culinary heritage with a modern twist. Chef Minh's creations showcase the best local ingredients in an elegant setting.",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1000",
        hours: "6:30 PM - 10:30 PM",
        dressCode: "Smart Casual",
        featured: true,
    },
    {
        id: "sunrise-terrace",
        name: "Sunrise Terrace",
        cuisine: "International Breakfast & Brunch",
        description: "Start your day with panoramic valley views and a lavish breakfast buffet featuring local specialties and international favorites.",
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800",
        hours: "6:30 AM - 11:00 AM",
        dressCode: "Casual",
        featured: false,
    },
    {
        id: "the-pool-bar",
        name: "The Pool Bar",
        cuisine: "Light Bites & Cocktails",
        description: "Sip refreshing cocktails and enjoy light bites by the infinity pool. The perfect spot for a relaxed afternoon.",
        image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=800",
        hours: "11:00 AM - 7:00 PM",
        dressCode: "Resort Casual",
        featured: false,
    },
];

const menuHighlights = [
    {
        name: "Pho Wagyu",
        description: "Traditional pho elevated with premium wagyu beef",
        price: 38,
        category: "Signature",
    },
    {
        name: "Highland Lamb Rack",
        description: "Locally-sourced lamb with Dalat vegetables",
        price: 52,
        category: "Main",
    },
    {
        name: "Mekong River Prawns",
        description: "Grilled prawns with lemongrass butter",
        price: 45,
        category: "Seafood",
    },
    {
        name: "Chocolate Volcano",
        description: "Molten chocolate cake with Vietnamese coffee ice cream",
        price: 18,
        category: "Dessert",
    },
];

const experiences = [
    {
        icon: ChefHat,
        name: "Private Chef's Table",
        description: "An exclusive 8-course tasting menu prepared tableside",
        price: "From $180 per person",
    },
    {
        icon: Utensils,
        name: "Cooking Classes",
        description: "Learn authentic Vietnamese recipes with our master chef",
        price: "$95 per person",
    },
    {
        icon: Wine,
        name: "Wine Pairing Dinner",
        description: "Curated wines paired with a 5-course seasonal menu",
        price: "$150 per person",
    },
];

function RestaurantContent() {
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
            <section ref={heroRef} className="relative h-[70vh] min-h-[550px] flex items-center justify-center overflow-hidden">
                <motion.div style={{ scale: heroScale }} className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2000"
                        alt="Fine dining at Asana Resort"
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
                        className="flex items-center justify-center gap-3 mb-4"
                    >
                        <Star size={16} className="text-accent" fill="currentColor" />
                        <Star size={16} className="text-accent" fill="currentColor" />
                        <span className="label-caps text-accent mx-2">Michelin Starred</span>
                        <Star size={16} className="text-accent" fill="currentColor" />
                        <Star size={16} className="text-accent" fill="currentColor" />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-white mb-6"
                    >
                        Culinary
                        <span className="italic text-accent block">Excellence</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-white/85 text-[18px] leading-relaxed"
                    >
                        From farm-fresh breakfasts to candlelit Michelin-starred dinners,
                        every meal at Asana is crafted to be an unforgettable journey.
                    </motion.p>
                </motion.div>

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

            {/* Our Restaurants */}
            <section className="section-padding">
                <div className="container">
                    <div className="text-center mb-16">
                        <ScrollReveal direction="up" distance={50}>
                            <span className="label-caps block mb-4">Our Venues</span>
                        </ScrollReveal>
                        <TextReveal>
                            <h2>Restaurants & Bars</h2>
                        </TextReveal>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {restaurants.map((restaurant, index) => (
                            <ScrollReveal key={restaurant.id} direction="up" distance={50} scale>
                                <motion.div
                                    whileHover={{ y: -10 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className={`group ${restaurant.featured ? "lg:row-span-2" : ""}`}
                                >
                                    <div className={`relative overflow-hidden ${restaurant.featured ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                                        <Image
                                            src={restaurant.image}
                                            alt={restaurant.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                                        {restaurant.featured && (
                                            <span className="absolute top-4 left-4 px-3 py-1.5 bg-secondary text-white text-[10px] uppercase tracking-wider font-semibold flex items-center gap-2">
                                                <Award size={12} />
                                                2 Michelin Stars
                                            </span>
                                        )}

                                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                            <span className="text-accent text-[12px] uppercase tracking-wider font-medium">
                                                {restaurant.cuisine}
                                            </span>
                                            <h3 className="text-[28px] font-display mt-2 mb-3">
                                                {restaurant.name}
                                            </h3>
                                            <p className="text-white/80 text-[14px] mb-4 line-clamp-2">
                                                {restaurant.description}
                                            </p>
                                            <div className="flex items-center gap-4 text-[12px] text-white/70">
                                                <span className="flex items-center gap-1.5">
                                                    <Clock size={12} />
                                                    {restaurant.hours}
                                                </span>
                                                <span>•</span>
                                                <span>{restaurant.dressCode}</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Menu Highlights */}
            <section className="section-padding bg-subtle">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <ScrollReveal direction="up" distance={50}>
                                <span className="label-caps block mb-4">Seasonal Selections</span>
                            </ScrollReveal>
                            <TextReveal>
                                <h2 className="mb-6">Menu Highlights</h2>
                            </TextReveal>
                            <ScrollReveal direction="up" distance={40}>
                                <div className="divider mb-8" />
                            </ScrollReveal>
                            <ScrollReveal direction="up" distance={50} blur>
                                <p className="text-muted-foreground mb-10">
                                    Our chefs source the finest local ingredients to create dishes that
                                    honor Vietnamese culinary traditions while embracing innovation.
                                </p>
                            </ScrollReveal>

                            <div className="space-y-6">
                                {menuHighlights.map((item, index) => (
                                    <ScrollReveal key={index} direction="up" distance={40}>
                                        <motion.div
                                            whileHover={{ x: 10 }}
                                            className="flex justify-between items-start pb-4 border-b border-border"
                                        >
                                            <div className="flex-1">
                                                <span className="text-[10px] uppercase tracking-wider text-secondary font-medium">
                                                    {item.category}
                                                </span>
                                                <h4 className="text-[18px] font-display text-foreground mt-1">
                                                    {item.name}
                                                </h4>
                                                <p className="text-[13px] text-muted-foreground mt-1">
                                                    {item.description}
                                                </p>
                                            </div>
                                            <span className="text-[18px] font-display text-secondary ml-6">
                                                ${item.price}
                                            </span>
                                        </motion.div>
                                    </ScrollReveal>
                                ))}
                            </div>

                            <ScrollReveal direction="up" distance={40}>
                                <div className="mt-8">
                                    <Link href="/contact" className="btn-outline">
                                        View Full Menu
                                    </Link>
                                </div>
                            </ScrollReveal>
                        </div>

                        <div className="relative">
                            <ImageReveal>
                                <div className="relative aspect-square">
                                    <Image
                                        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800"
                                        alt="Signature dish"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </ImageReveal>
                            <Parallax speed={0.4}>
                                <div className="absolute -top-8 -right-8 w-[45%] aspect-square bg-white p-3 floating-shadow z-10">
                                    <div className="relative w-full h-full">
                                        <Image
                                            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=500"
                                            alt="Restaurant ambiance"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </Parallax>
                        </div>
                    </div>
                </div>
            </section>

            {/* Culinary Experiences */}
            <section className="section-padding">
                <div className="container">
                    <div className="text-center mb-16">
                        <ScrollReveal direction="up" distance={50}>
                            <span className="label-caps block mb-4">Beyond Dining</span>
                        </ScrollReveal>
                        <TextReveal>
                            <h2>Culinary Experiences</h2>
                        </TextReveal>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {experiences.map((exp, index) => (
                            <ScrollReveal key={index} direction="up" distance={50} scale>
                                <motion.div
                                    whileHover={{ y: -10, scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="p-8 bg-subtle hover:bg-white hover:shadow-xl transition-all duration-500 group text-center"
                                >
                                    <exp.icon
                                        size={40}
                                        className="text-secondary mx-auto mb-6 group-hover:scale-110 transition-transform"
                                    />
                                    <h3 className="text-[22px] font-display text-foreground mb-4">
                                        {exp.name}
                                    </h3>
                                    <p className="text-muted-foreground text-[14px] mb-6">
                                        {exp.description}
                                    </p>
                                    <span className="text-secondary font-medium text-[14px]">
                                        {exp.price}
                                    </span>
                                </motion.div>
                            </ScrollReveal>
                        ))}
                    </div>

                    <ScrollReveal direction="up" distance={40}>
                        <div className="text-center mt-12">
                            <Link href="/contact" className="btn-primary">
                                Make a Reservation
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Reservation CTA */}
            <section className="relative py-24 overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200"
                    alt="Restaurant interior"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/80" />
                <div className="container relative z-10 text-center text-white">
                    <ScrollReveal direction="up" distance={50}>
                        <h2 className="text-white mb-6">Reserve Your Table</h2>
                    </ScrollReveal>
                    <ScrollReveal direction="up" distance={40} blur>
                        <p className="text-white/80 text-[17px] max-w-[500px] mx-auto mb-8">
                            For reservations, dietary requirements, or special occasions, our
                            team is here to assist you.
                        </p>
                    </ScrollReveal>
                    <ScrollReveal direction="up" distance={40}>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="/contact" className="btn-primary">
                                Book Online
                            </Link>
                            <a
                                href="tel:+6256418120"
                                className="btn-outline border-white/50 text-white hover:bg-white hover:text-primary"
                            >
                                Call +62 5641 8120
                            </a>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default function RestaurantPage() {
    return (
        <LoaderWrapper>
            <RestaurantContent />
        </LoaderWrapper>
    );
}
