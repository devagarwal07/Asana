"use client";

import React, { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    Users,
    Maximize2,
    Wifi,
    AirVent,
    Coffee,
    Bath,
    Mountain,
    Tv,
    ChevronLeft,
    ChevronRight,
    X,
    Check,
    Calendar,
    Bed,
} from "lucide-react";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import {
    staggerContainer,
    staggerItem,
    viewportSettings,
} from "@/lib/animations";

const roomsData: Record<string, {
    id: string;
    type: string;
    name: string;
    price: number;
    images: string[];
    guests: number;
    size: string;
    bed: string;
    description: string;
    longDescription: string;
    amenities: string[];
    features: string[];
}> = {
    "standard-double": {
        id: "standard-double",
        type: "Room",
        name: "Standard Double",
        price: 200,
        images: [
            "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/892bb068-b17a-42a0-a26a-9e038bc43081-asanaresort-webflow-io/assets/images/60ba1b7d68141981e7d998a7_vojtech-bruzek-Yrxr3bsPdS-3.jpg",
            "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/892bb068-b17a-42a0-a26a-9e038bc43081-asanaresort-webflow-io/assets/images/60a7936d2e4466d293bc4354_visualsofdana-T5pL6ciEn-I-4.jpg",
            "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/892bb068-b17a-42a0-a26a-9e038bc43081-asanaresort-webflow-io/assets/images/60ba19145004ae59e197414e_5f513ec3045787e612184ab4_-5.jpg",
        ],
        guests: 2,
        size: "32 m²",
        bed: "1 Double Bed",
        description: "A cozy retreat with garden views",
        longDescription: "Our Standard Double rooms offer a peaceful retreat with beautiful garden views. Each room features a comfortable double bed, modern amenities, and thoughtful touches that make your stay memorable. Perfect for couples seeking comfort and tranquility in a serene setting.",
        amenities: ["wifi", "ac", "minibar", "bathroom", "hairdryer", "safe"],
        features: ["Garden View", "Daily Housekeeping", "Room Service", "24/7 Concierge"],
    },
    "premium-double": {
        id: "premium-double",
        type: "Room",
        name: "Premium Double",
        price: 280,
        images: [
            "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/892bb068-b17a-42a0-a26a-9e038bc43081-asanaresort-webflow-io/assets/images/60a7936d2e4466d293bc4354_visualsofdana-T5pL6ciEn-I-4.jpg",
            "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/892bb068-b17a-42a0-a26a-9e038bc43081-asanaresort-webflow-io/assets/images/60ba1b7d68141981e7d998a7_vojtech-bruzek-Yrxr3bsPdS-3.jpg",
            "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/892bb068-b17a-42a0-a26a-9e038bc43081-asanaresort-webflow-io/assets/images/60bf893254a432aca6666296_resort-2.jpg",
        ],
        guests: 2,
        size: "45 m²",
        bed: "1 King Size Bed",
        description: "Elevated luxury with private balcony",
        longDescription: "Experience elevated luxury in our Premium Double rooms. Featuring a spacious king-size bed and a private balcony with stunning valley views, these rooms offer the perfect blend of comfort and sophistication. Wake up to breathtaking sunrises and enjoy your morning coffee surrounded by nature's beauty.",
        amenities: ["wifi", "ac", "minibar", "bathroom", "view", "balcony", "safe"],
        features: ["Valley View", "Private Balcony", "Premium Toiletries", "Nespresso Machine", "Evening Turndown"],
    },
    "luxury-suite": {
        id: "luxury-suite",
        type: "Suite",
        name: "Luxury Suite",
        price: 450,
        images: [
            "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/892bb068-b17a-42a0-a26a-9e038bc43081-asanaresort-webflow-io/assets/images/60ba19145004ae59e197414e_5f513ec3045787e612184ab4_-5.jpg",
            "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/892bb068-b17a-42a0-a26a-9e038bc43081-asanaresort-webflow-io/assets/images/60a7936d2e4466d293bc4354_visualsofdana-T5pL6ciEn-I-4.jpg",
            "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/892bb068-b17a-42a0-a26a-9e038bc43081-asanaresort-webflow-io/assets/images/60b9f124476d05bba9cd4dff_girl-resort-21.jpg",
        ],
        guests: 4,
        size: "75 m²",
        bed: "1 King + Living Area",
        description: "Spacious sanctuary with panoramic views",
        longDescription: "Our Luxury Suite is a spacious sanctuary designed for discerning travelers. With a separate living area, king-size bedroom, and panoramic mountain views, this suite offers unparalleled comfort. Perfect for families or those seeking extra space to relax and unwind in style.",
        amenities: ["wifi", "ac", "minibar", "bathroom", "view", "tv", "living", "safe"],
        features: ["Panoramic Views", "Separate Living Area", "Walk-in Closet", "Rainfall Shower", "Butler Service"],
    },
    "presidential-villa": {
        id: "presidential-villa",
        type: "Villa",
        name: "Presidential Villa",
        price: 850,
        images: [
            "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/892bb068-b17a-42a0-a26a-9e038bc43081-asanaresort-webflow-io/assets/images/60b9f124476d05bba9cd4dff_girl-resort-21.jpg",
            "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/892bb068-b17a-42a0-a26a-9e038bc43081-asanaresort-webflow-io/assets/images/60ba19145004ae59e197414e_5f513ec3045787e612184ab4_-5.jpg",
            "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/892bb068-b17a-42a0-a26a-9e038bc43081-asanaresort-webflow-io/assets/images/60bf893254a432aca6666296_resort-2.jpg",
        ],
        guests: 6,
        size: "150 m²",
        bed: "2 King Beds",
        description: "Ultimate luxury with private pool",
        longDescription: "The Presidential Villa represents the pinnacle of luxury at Asana Resort. This exclusive retreat features two king bedrooms, a private infinity pool, personal butler service, and breathtaking 360-degree views. Every detail has been crafted to provide an unparalleled experience of indulgence and privacy.",
        amenities: ["wifi", "ac", "minibar", "bathroom", "view", "tv", "pool", "kitchen", "safe"],
        features: ["Private Pool", "Personal Butler", "Private Garden", "Outdoor Dining", "Spa Bathroom", "Chef's Kitchen"],
    },
};

const amenityLabels: Record<string, { icon: React.ElementType; label: string }> = {
    wifi: { icon: Wifi, label: "High-Speed WiFi" },
    ac: { icon: AirVent, label: "Climate Control" },
    minibar: { icon: Coffee, label: "Mini Bar" },
    bathroom: { icon: Bath, label: "Luxury Bathroom" },
    view: { icon: Mountain, label: "Scenic Views" },
    tv: { icon: Tv, label: "Smart TV" },
    balcony: { icon: Mountain, label: "Private Balcony" },
    pool: { icon: Bath, label: "Private Pool" },
};

export default function RoomDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = use(params);
    const room = roomsData[resolvedParams.slug];
    const [currentImage, setCurrentImage] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");

    if (!room) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-display mb-4">Room Not Found</h1>
                    <Link href="/rooms" className="btn-primary">
                        View All Rooms
                    </Link>
                </div>
            </div>
        );
    }

    const nextImage = () => setCurrentImage((prev) => (prev + 1) % room.images.length);
    const prevImage = () => setCurrentImage((prev) => (prev - 1 + room.images.length) % room.images.length);

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Breadcrumb */}
            <div className="bg-subtle pt-28 pb-6">
                <div className="container">
                    <nav className="flex items-center gap-2 text-[13px]">
                        <Link href="/" className="text-muted-foreground hover:text-secondary">Home</Link>
                        <span className="text-muted-foreground">/</span>
                        <Link href="/rooms" className="text-muted-foreground hover:text-secondary">Rooms</Link>
                        <span className="text-muted-foreground">/</span>
                        <span className="text-foreground">{room.name}</span>
                    </nav>
                </div>
            </div>

            {/* Image Gallery */}
            <section className="pb-16">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {/* Main Image */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="relative aspect-[4/3] cursor-pointer group"
                            onClick={() => setLightboxOpen(true)}
                        >
                            <Image
                                src={room.images[currentImage]}
                                alt={room.name}
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                <span className="text-white opacity-0 group-hover:opacity-100 text-sm uppercase tracking-wider">
                                    Click to enlarge
                                </span>
                            </div>
                        </motion.div>

                        {/* Thumbnails */}
                        <div className="grid grid-cols-2 gap-4">
                            {room.images.slice(0, 4).map((img, index) => (
                                <div
                                    key={index}
                                    onClick={() => setCurrentImage(index)}
                                    className={`relative aspect-[4/3] cursor-pointer transition-all ${currentImage === index ? "ring-2 ring-secondary" : "opacity-70 hover:opacity-100"
                                        }`}
                                >
                                    <Image src={img} alt={`${room.name} ${index + 1}`} fill className="object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Room Details */}
            <section className="pb-24">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            <motion.div
                                variants={staggerContainer}
                                initial="hidden"
                                animate="visible"
                            >
                                <motion.span variants={staggerItem} className="label-caps block mb-4">
                                    {room.type}
                                </motion.span>

                                <motion.h1 variants={staggerItem} className="text-foreground mb-6">
                                    {room.name}
                                </motion.h1>

                                <motion.div variants={staggerItem} className="flex flex-wrap gap-6 mb-8">
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Users size={18} />
                                        <span>{room.guests} Guests</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Maximize2 size={18} />
                                        <span>{room.size}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Bed size={18} />
                                        <span>{room.bed}</span>
                                    </div>
                                </motion.div>

                                <motion.div variants={staggerItem} className="divider mb-8" />

                                <motion.p variants={staggerItem} className="text-muted-foreground text-[16px] leading-relaxed mb-10">
                                    {room.longDescription}
                                </motion.p>

                                {/* Amenities */}
                                <motion.div variants={staggerItem}>
                                    <h3 className="text-[20px] font-display mb-6">Room Amenities</h3>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                        {room.amenities.map((amenity) => {
                                            const item = amenityLabels[amenity];
                                            if (!item) return null;
                                            return (
                                                <div key={amenity} className="flex items-center gap-3 p-4 bg-subtle">
                                                    <item.icon size={20} className="text-secondary" />
                                                    <span className="text-[14px] text-foreground">{item.label}</span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </motion.div>

                                {/* Features */}
                                <motion.div variants={staggerItem} className="mt-10">
                                    <h3 className="text-[20px] font-display mb-6">Special Features</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {room.features.map((feature, index) => (
                                            <div key={index} className="flex items-center gap-3">
                                                <Check size={16} className="text-secondary" />
                                                <span className="text-[14px] text-muted-foreground">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>

                        {/* Booking Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-28 bg-white p-8 floating-shadow">
                                <div className="text-center mb-6">
                                    <div className="text-[14px] text-muted-foreground mb-2">From</div>
                                    <div className="text-[42px] font-display text-secondary leading-none">
                                        ${room.price}
                                    </div>
                                    <div className="text-[14px] text-muted-foreground mt-1">per night</div>
                                </div>

                                <div className="h-[1px] bg-border mb-6" />

                                <form className="space-y-4">
                                    <div>
                                        <label className="block text-[11px] font-medium uppercase tracking-wider text-muted-foreground mb-2">
                                            Check-in Date
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="date"
                                                value={checkIn}
                                                onChange={(e) => setCheckIn(e.target.value)}
                                                className="w-full p-3 border border-border bg-subtle text-foreground text-[14px]"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-[11px] font-medium uppercase tracking-wider text-muted-foreground mb-2">
                                            Check-out Date
                                        </label>
                                        <input
                                            type="date"
                                            value={checkOut}
                                            onChange={(e) => setCheckOut(e.target.value)}
                                            className="w-full p-3 border border-border bg-subtle text-foreground text-[14px]"
                                        />
                                    </div>

                                    <button type="submit" className="btn-primary w-full">
                                        Check Availability
                                    </button>
                                </form>

                                <p className="text-center text-[12px] text-muted-foreground mt-4">
                                    Best rate guaranteed when booking direct
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            <AnimatePresence>
                {lightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/95 z-[200] flex items-center justify-center"
                        onClick={() => setLightboxOpen(false)}
                    >
                        <button
                            onClick={() => setLightboxOpen(false)}
                            className="absolute top-6 right-6 text-white/80 hover:text-white"
                        >
                            <X size={32} />
                        </button>

                        <button
                            onClick={(e) => { e.stopPropagation(); prevImage(); }}
                            className="absolute left-6 text-white/80 hover:text-white"
                        >
                            <ChevronLeft size={48} />
                        </button>

                        <div className="relative w-[90vw] h-[80vh]" onClick={(e) => e.stopPropagation()}>
                            <Image
                                src={room.images[currentImage]}
                                alt={room.name}
                                fill
                                className="object-contain"
                            />
                        </div>

                        <button
                            onClick={(e) => { e.stopPropagation(); nextImage(); }}
                            className="absolute right-6 text-white/80 hover:text-white"
                        >
                            <ChevronRight size={48} />
                        </button>

                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                            {room.images.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={(e) => { e.stopPropagation(); setCurrentImage(index); }}
                                    className={`w-2 h-2 rounded-full ${currentImage === index ? "bg-white" : "bg-white/40"
                                        }`}
                                />
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer />
        </div>
    );
}
