"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    MessageSquare,
    Send,
    Check,
    Star,
} from "lucide-react";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import LoaderWrapper, { useLoading } from "@/components/ui/loader-wrapper";
import { ScrollReveal, TextReveal, ImageReveal, Parallax, FadeInView } from "@/components/ui/scroll-animations";

const contactInfo = [
    {
        icon: Phone,
        title: "Phone",
        details: ["+62 5641 8120", "+62 5641 8121"],
        action: "tel:+6256418120",
    },
    {
        icon: Mail,
        title: "Email",
        details: ["reservations@asanaresort.com", "info@asanaresort.com"],
        action: "mailto:reservations@asanaresort.com",
    },
    {
        icon: Clock,
        title: "Hours",
        details: ["Reception: 24/7", "Concierge: 7:00 AM - 10:00 PM"],
        action: null,
    },
    {
        icon: MapPin,
        title: "Address",
        details: ["123 Valley Road, Đà Lạt", "Lâm Đồng, Vietnam"],
        action: "https://maps.google.com",
    },
];

const inquiryTypes = [
    "General Inquiry",
    "Room Reservation",
    "Spa Booking",
    "Restaurant Reservation",
    "Events & Weddings",
    "Corporate Retreats",
    "Press & Media",
];

function ContactContent() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        inquiryType: "",
        arrivalDate: "",
        departureDate: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const { isLoaded } = useLoading();
    const heroRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
    const heroScale = useTransform(smoothProgress, [0, 1], [1, 1.2]);
    const heroOpacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero */}
            <section ref={heroRef} className="relative h-[55vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <motion.div style={{ scale: heroScale }} className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2000"
                        alt="Asana Resort aerial view"
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
                    >
                        <div className="flex items-center justify-center gap-1 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={14} className="text-accent" fill="currentColor" />
                            ))}
                        </div>
                        <span className="label-caps text-accent block mb-4">
                            Get In Touch
                        </span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-white"
                    >
                        Contact Us
                    </motion.h1>
                </motion.div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-16 bg-subtle">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {contactInfo.map((item, index) => (
                            <ScrollReveal key={index} direction="up" distance={50} scale>
                                <motion.div
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="p-6 bg-white text-center group hover:shadow-lg transition-all"
                                >
                                    <div className="w-14 h-14 mx-auto mb-4 bg-secondary/10 rounded-full flex items-center justify-center group-hover:bg-secondary transition-colors">
                                        <item.icon
                                            size={24}
                                            className="text-secondary group-hover:text-white transition-colors"
                                        />
                                    </div>
                                    <h3 className="text-[16px] font-display text-foreground mb-3">
                                        {item.title}
                                    </h3>
                                    {item.details.map((detail, i) => (
                                        <p key={i} className="text-[14px] text-muted-foreground">
                                            {item.action && i === 0 ? (
                                                <a
                                                    href={item.action}
                                                    className="hover:text-secondary transition-colors"
                                                >
                                                    {detail}
                                                </a>
                                            ) : (
                                                detail
                                            )}
                                        </p>
                                    ))}
                                </motion.div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form & Map */}
            <section className="section-padding">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Form */}
                        <div>
                            <ScrollReveal direction="up" distance={50}>
                                <span className="label-caps block mb-4">Send a Message</span>
                            </ScrollReveal>
                            <TextReveal>
                                <h2 className="mb-6">
                                    We'd Love to
                                    <span className="italic text-secondary"> Hear From You</span>
                                </h2>
                            </TextReveal>
                            <ScrollReveal direction="up" distance={40}>
                                <div className="divider mb-8" />
                            </ScrollReveal>

                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="p-12 bg-subtle text-center"
                                >
                                    <div className="w-16 h-16 mx-auto mb-6 bg-secondary rounded-full flex items-center justify-center">
                                        <Check size={32} className="text-white" />
                                    </div>
                                    <h3 className="text-[24px] font-display text-foreground mb-4">
                                        Thank You!
                                    </h3>
                                    <p className="text-muted-foreground mb-6">
                                        Your message has been received. Our team will respond within 24 hours.
                                    </p>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="btn-outline"
                                    >
                                        Send Another Message
                                    </button>
                                </motion.div>
                            ) : (
                                <ScrollReveal direction="up" distance={40}>
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-[11px] font-medium uppercase tracking-wider text-muted-foreground mb-2">
                                                    Full Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full p-4 border border-border bg-subtle text-foreground text-[14px] focus:outline-none focus:border-secondary transition-colors"
                                                    placeholder="Your name"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-[11px] font-medium uppercase tracking-wider text-muted-foreground mb-2">
                                                    Email Address *
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full p-4 border border-border bg-subtle text-foreground text-[14px] focus:outline-none focus:border-secondary transition-colors"
                                                    placeholder="your@email.com"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-[11px] font-medium uppercase tracking-wider text-muted-foreground mb-2">
                                                    Phone Number
                                                </label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="w-full p-4 border border-border bg-subtle text-foreground text-[14px] focus:outline-none focus:border-secondary transition-colors"
                                                    placeholder="+1 234 567 890"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-[11px] font-medium uppercase tracking-wider text-muted-foreground mb-2">
                                                    Inquiry Type *
                                                </label>
                                                <select
                                                    name="inquiryType"
                                                    value={formData.inquiryType}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full p-4 border border-border bg-subtle text-foreground text-[14px] focus:outline-none focus:border-secondary transition-colors"
                                                >
                                                    <option value="">Select an option</option>
                                                    {inquiryTypes.map((type) => (
                                                        <option key={type} value={type}>
                                                            {type}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-[11px] font-medium uppercase tracking-wider text-muted-foreground mb-2">
                                                    Arrival Date
                                                </label>
                                                <input
                                                    type="date"
                                                    name="arrivalDate"
                                                    value={formData.arrivalDate}
                                                    onChange={handleChange}
                                                    className="w-full p-4 border border-border bg-subtle text-foreground text-[14px] focus:outline-none focus:border-secondary transition-colors"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-[11px] font-medium uppercase tracking-wider text-muted-foreground mb-2">
                                                    Departure Date
                                                </label>
                                                <input
                                                    type="date"
                                                    name="departureDate"
                                                    value={formData.departureDate}
                                                    onChange={handleChange}
                                                    className="w-full p-4 border border-border bg-subtle text-foreground text-[14px] focus:outline-none focus:border-secondary transition-colors"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-[11px] font-medium uppercase tracking-wider text-muted-foreground mb-2">
                                                Your Message *
                                            </label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                rows={5}
                                                className="w-full p-4 border border-border bg-subtle text-foreground text-[14px] focus:outline-none focus:border-secondary resize-none transition-colors"
                                                placeholder="How can we help you?"
                                            />
                                        </div>

                                        <motion.button
                                            type="submit"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="btn-primary flex items-center gap-2"
                                        >
                                            Send Message
                                            <Send size={14} />
                                        </motion.button>
                                    </form>
                                </ScrollReveal>
                            )}
                        </div>

                        {/* Map & Quick Contact */}
                        <div className="space-y-8">
                            {/* Map Placeholder */}
                            <ImageReveal>
                                <div className="relative aspect-[4/3] bg-muted overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800"
                                        alt="Resort location"
                                        fill
                                        className="object-cover opacity-30"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center bg-subtle/80">
                                        <div className="text-center">
                                            <motion.div
                                                animate={{ y: [0, -10, 0] }}
                                                transition={{ repeat: Infinity, duration: 2 }}
                                            >
                                                <MapPin size={48} className="text-secondary mx-auto mb-4" />
                                            </motion.div>
                                            <h3 className="text-[20px] font-display text-foreground mb-2">
                                                Đà Lạt, Vietnam
                                            </h3>
                                            <p className="text-muted-foreground text-[14px] mb-4">
                                                123 Valley Road, Lâm Đồng
                                            </p>
                                            <a
                                                href="https://maps.google.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn-outline inline-block"
                                            >
                                                View on Google Maps
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </ImageReveal>

                            {/* Quick Actions */}
                            <ScrollReveal direction="up" distance={40}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <motion.a
                                        href="tel:+6256418120"
                                        whileHover={{ scale: 1.02, x: 5 }}
                                        className="p-6 bg-secondary text-white flex items-center gap-4 hover:bg-secondary-dark transition-colors"
                                    >
                                        <Phone size={24} />
                                        <div>
                                            <div className="text-[11px] uppercase tracking-wider opacity-70">
                                                Call Reception
                                            </div>
                                            <div className="text-[16px] font-medium">
                                                +62 5641 8120
                                            </div>
                                        </div>
                                    </motion.a>
                                    <motion.a
                                        href="https://wa.me/6256418120"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.02, x: 5 }}
                                        className="p-6 bg-primary text-white flex items-center gap-4 hover:bg-primary/90 transition-colors"
                                    >
                                        <MessageSquare size={24} />
                                        <div>
                                            <div className="text-[11px] uppercase tracking-wider opacity-70">
                                                WhatsApp
                                            </div>
                                            <div className="text-[16px] font-medium">
                                                Chat With Us
                                            </div>
                                        </div>
                                    </motion.a>
                                </div>
                            </ScrollReveal>

                            {/* FAQ Teaser */}
                            <ScrollReveal direction="up" distance={40}>
                                <motion.div
                                    whileHover={{ scale: 1.01 }}
                                    className="p-8 bg-subtle"
                                >
                                    <h3 className="text-[20px] font-display text-foreground mb-4">
                                        Frequently Asked Questions
                                    </h3>
                                    <ul className="space-y-3 text-[14px] text-muted-foreground">
                                        <li className="flex items-start gap-2">
                                            <Check size={14} className="text-secondary mt-1 flex-shrink-0" />
                                            Check-in time: 3:00 PM | Check-out: 11:00 AM
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check size={14} className="text-secondary mt-1 flex-shrink-0" />
                                            Airport transfers available upon request
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check size={14} className="text-secondary mt-1 flex-shrink-0" />
                                            Pets are welcome with prior arrangement
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check size={14} className="text-secondary mt-1 flex-shrink-0" />
                                            Free cancellation up to 48 hours before arrival
                                        </li>
                                    </ul>
                                </motion.div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default function ContactPage() {
    return (
        <LoaderWrapper>
            <ContactContent />
        </LoaderWrapper>
    );
}
