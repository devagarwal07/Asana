"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Heart, Users, Building2, Camera, Calendar, Star, ArrowRight } from "lucide-react";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import LoaderWrapper, { useLoading } from "@/components/ui/loader-wrapper";
import { ScrollReveal, TextReveal, ImageReveal } from "@/components/ui/scroll-animations";

const eventTypes = [
    {
        icon: Heart,
        name: "Weddings",
        description: "Say 'I do' in paradise. Our stunning venues and dedicated team create magical celebrations.",
        href: "/events/weddings",
        image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800",
        capacity: "Up to 200 guests",
    },
    {
        icon: Building2,
        name: "Corporate Retreats",
        description: "Inspire your team with unique meeting spaces, team-building activities, and wellness programs.",
        href: "/events/corporate",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800",
        capacity: "Up to 100 attendees",
    },
    {
        icon: Users,
        name: "Private Events",
        description: "From milestone birthdays to anniversary celebrations, create unforgettable memories.",
        href: "/events",
        image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=800",
        capacity: "Customizable",
    },
    {
        icon: Camera,
        name: "Photoshoots",
        description: "Picture-perfect settings for editorial shoots, brand campaigns, and creative projects.",
        href: "/events/photoshoots",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800",
        capacity: "Flexible arrangements",
    },
];

const features = [
    "Dedicated event planner",
    "Custom menu design",
    "Premium audiovisual equipment",
    "Floral & décor services",
    "Transportation coordination",
    "Guest accommodation packages",
];

function EventsContent() {
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
                        src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2000"
                        alt="Events at Asana Resort"
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
                        className="flex items-center justify-center gap-2 mb-4"
                    >
                        <Calendar size={18} className="text-accent" />
                        <span className="label-caps text-accent">Special Occasions</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-white mb-4"
                    >
                        Events & Celebrations
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-white/80 text-[17px] max-w-[500px] mx-auto"
                    >
                        Create extraordinary moments in an extraordinary setting
                    </motion.p>
                </motion.div>
            </section>

            {/* Event Types */}
            <section className="section-padding">
                <div className="container">
                    <ScrollReveal direction="up" distance={40}>
                        <div className="text-center mb-16">
                            <span className="label-caps block mb-4">Our Venues</span>
                            <h2>
                                Every Occasion, <span className="italic text-secondary">Perfected</span>
                            </h2>
                            <div className="divider mx-auto mt-6" />
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {eventTypes.map((event, index) => (
                            <ScrollReveal key={event.name} direction="up" distance={50} scale>
                                <Link href={event.href}>
                                    <motion.div
                                        whileHover={{ y: -10 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        className="group relative aspect-[16/10] overflow-hidden"
                                    >
                                        <Image
                                            src={event.image}
                                            alt={event.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                                        <div className="absolute bottom-0 left-0 right-0 p-8">
                                            <div className="flex items-center gap-3 mb-3">
                                                <event.icon size={24} className="text-accent" />
                                                <h3 className="text-[24px] font-display text-white group-hover:text-accent transition-colors">
                                                    {event.name}
                                                </h3>
                                            </div>
                                            <p className="text-white/70 text-[14px] mb-4 max-w-[400px]">
                                                {event.description}
                                            </p>
                                            <div className="flex items-center justify-between">
                                                <span className="text-[12px] text-accent uppercase tracking-wider">
                                                    {event.capacity}
                                                </span>
                                                <span className="text-white text-[13px] font-medium uppercase tracking-wider flex items-center gap-2 group-hover:text-accent transition-colors">
                                                    Learn More
                                                    <ArrowRight size={14} />
                                                </span>
                                            </div>
                                        </div>
                                    </motion.div>
                                </Link>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-20 bg-subtle">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <ImageReveal>
                            <div className="relative aspect-[4/5]">
                                <Image
                                    src="https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=800"
                                    alt="Event planning"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </ImageReveal>
                        <div>
                            <ScrollReveal direction="up" distance={40}>
                                <span className="label-caps block mb-4">Full Service</span>
                                <h2 className="mb-6">
                                    We Handle <span className="italic text-secondary">Every Detail</span>
                                </h2>
                                <p className="text-muted-foreground mb-8">
                                    Our experienced events team ensures flawless execution from concept to celebration. Let us bring your vision to life.
                                </p>
                            </ScrollReveal>
                            <ScrollReveal direction="up" distance={40}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {features.map((feature, index) => (
                                        <motion.div
                                            key={feature}
                                            whileHover={{ x: 5 }}
                                            className="flex items-center gap-3 p-4 bg-white"
                                        >
                                            <Star size={16} className="text-secondary flex-shrink-0" />
                                            <span className="text-[14px] text-foreground">{feature}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-primary text-white">
                <div className="container text-center">
                    <ScrollReveal direction="up" distance={40}>
                        <h2 className="text-white mb-4">
                            Let's Plan Your <span className="italic">Event</span>
                        </h2>
                        <p className="text-white/70 max-w-[500px] mx-auto mb-8">
                            Contact our events team to discuss your vision and receive a customized proposal.
                        </p>
                        <Link href="/contact" className="btn-secondary">
                            Request Proposal
                        </Link>
                    </ScrollReveal>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default function EventsPage() {
    return (
        <LoaderWrapper>
            <EventsContent />
        </LoaderWrapper>
    );
}
