"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
    Users,
    Maximize2,
    Wifi,
    AirVent,
    Coffee,
    Bath,
    Mountain,
    Tv,
    Grid3X3,
    List,
    Star,
    Award,
} from "lucide-react";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import LoaderWrapper, { useLoading } from "@/components/ui/loader-wrapper";
import { ScrollReveal, TextReveal, ImageReveal, Parallax, FadeInView } from "@/components/ui/scroll-animations";

const rooms = [
    {
        id: "standard-double",
        type: "Room",
        name: "Standard Double",
        price: 200,
        image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=800",
        guests: 2,
        size: "32 m²",
        bed: "1 Double Bed",
        description: "A cozy retreat with garden views, perfect for couples seeking comfort and tranquility.",
        amenities: ["wifi", "ac", "minibar", "bathroom"],
    },
    {
        id: "premium-double",
        type: "Room",
        name: "Premium Double",
        price: 280,
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800",
        guests: 2,
        size: "45 m²",
        bed: "1 King Size Bed",
        description: "Elevated luxury with a private balcony offering stunning valley views.",
        amenities: ["wifi", "ac", "minibar", "bathroom", "view"],
    },
    {
        id: "luxury-suite",
        type: "Suite",
        name: "Luxury Suite",
        price: 450,
        image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=800",
        guests: 4,
        size: "75 m²",
        bed: "1 King + Living Area",
        description: "A spacious sanctuary with separate living area and panoramic mountain views.",
        amenities: ["wifi", "ac", "minibar", "bathroom", "view", "tv"],
    },
    {
        id: "presidential-villa",
        type: "Villa",
        name: "Presidential Villa",
        price: 850,
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800",
        guests: 6,
        size: "150 m²",
        bed: "2 King Beds",
        description: "Ultimate luxury with private pool, personal butler, and exclusive amenities.",
        amenities: ["wifi", "ac", "minibar", "bathroom", "view", "tv"],
    },
    {
        id: "garden-bungalow",
        type: "Bungalow",
        name: "Garden Bungalow",
        price: 320,
        image: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?q=80&w=800",
        guests: 2,
        size: "55 m²",
        bed: "1 King Size Bed",
        description: "A private bungalow surrounded by tropical gardens with outdoor shower.",
        amenities: ["wifi", "ac", "minibar", "bathroom", "view"],
    },
    {
        id: "family-suite",
        type: "Suite",
        name: "Family Suite",
        price: 520,
        image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=800",
        guests: 5,
        size: "95 m²",
        bed: "1 King + 2 Singles",
        description: "Perfect for families with connecting rooms and child-friendly amenities.",
        amenities: ["wifi", "ac", "minibar", "bathroom", "view", "tv"],
    },
];

const amenityIcons: Record<string, React.ElementType> = {
    wifi: Wifi,
    ac: AirVent,
    minibar: Coffee,
    bathroom: Bath,
    view: Mountain,
    tv: Tv,
};

const roomTypes = ["All", "Room", "Suite", "Villa", "Bungalow"];

function RoomsContent() {
    const [selectedType, setSelectedType] = useState("All");
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
    const { isLoaded } = useLoading();
    const heroRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
    const heroScale = useTransform(smoothProgress, [0, 1], [1, 1.2]);
    const heroOpacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);

    const filteredRooms = selectedType === "All"
        ? rooms
        : rooms.filter((room) => room.type === selectedType);

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Banner */}
            <section ref={heroRef} className="relative h-[60vh] min-h-[450px] flex items-center justify-center overflow-hidden">
                <motion.div style={{ scale: heroScale }} className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2000"
                        alt="Luxury rooms at Asana Resort"
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/30 to-black/50" />

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
                        <Award size={18} className="text-accent" />
                        <span className="label-caps text-accent">Forbes Travel Guide 5-Star</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-white mb-4"
                    >
                        Rooms & Suites
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-white/80 text-[17px] max-w-[500px] mx-auto"
                    >
                        Discover your perfect sanctuary among our thoughtfully designed accommodations
                    </motion.p>
                </motion.div>
            </section>

            {/* Filter & Content */}
            <section className="section-padding">
                <div className="container">
                    {/* Filters */}
                    <ScrollReveal direction="up" distance={40}>
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                            {/* Type Filter */}
                            <div className="flex flex-wrap gap-2">
                                {roomTypes.map((type) => (
                                    <motion.button
                                        key={type}
                                        onClick={() => setSelectedType(type)}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`px-5 py-2.5 text-[12px] font-medium uppercase tracking-wider transition-all duration-300 ${selectedType === type
                                            ? "bg-secondary text-white"
                                            : "bg-subtle text-muted-foreground hover:bg-muted"
                                            }`}
                                    >
                                        {type}
                                    </motion.button>
                                ))}
                            </div>

                            {/* View Toggle */}
                            <div className="flex gap-2">
                                <motion.button
                                    onClick={() => setViewMode("grid")}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className={`p-2.5 transition-colors ${viewMode === "grid"
                                        ? "bg-secondary text-white"
                                        : "bg-subtle text-muted-foreground hover:bg-muted"
                                        }`}
                                    aria-label="Grid view"
                                >
                                    <Grid3X3 size={18} />
                                </motion.button>
                                <motion.button
                                    onClick={() => setViewMode("list")}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className={`p-2.5 transition-colors ${viewMode === "list"
                                        ? "bg-secondary text-white"
                                        : "bg-subtle text-muted-foreground hover:bg-muted"
                                        }`}
                                    aria-label="List view"
                                >
                                    <List size={18} />
                                </motion.button>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Results Count */}
                    <p className="text-muted-foreground text-[14px] mb-8">
                        Showing {filteredRooms.length} {filteredRooms.length === 1 ? "room" : "rooms"}
                    </p>

                    {/* Room Grid */}
                    <div
                        className={
                            viewMode === "grid"
                                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                                : "flex flex-col gap-6"
                        }
                    >
                        {filteredRooms.map((room, index) => (
                            <ScrollReveal key={room.id} direction="up" distance={50} scale>
                                <motion.div
                                    whileHover={{ y: -10 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className={
                                        viewMode === "grid"
                                            ? "room-card group bg-white"
                                            : "room-card group flex flex-col md:flex-row bg-white overflow-hidden"
                                    }
                                >
                                    <Link href={`/rooms/${room.id}`} className={viewMode === "list" ? "md:w-2/5" : ""}>
                                        <div
                                            className={`relative overflow-hidden ${viewMode === "grid" ? "aspect-[4/5]" : "aspect-[4/3] md:aspect-auto md:h-full"
                                                }`}
                                        >
                                            <Image
                                                src={room.image}
                                                alt={room.name}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                            <span className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm text-[10px] font-semibold uppercase tracking-wider text-primary">
                                                {room.type}
                                            </span>
                                        </div>
                                    </Link>

                                    <div className={`p-6 ${viewMode === "list" ? "md:w-3/5 flex flex-col justify-center" : ""}`}>
                                        <div className="flex justify-between items-start mb-3">
                                            <Link href={`/rooms/${room.id}`}>
                                                <h3 className="text-[22px] font-display text-foreground group-hover:text-secondary transition-colors">
                                                    {room.name}
                                                </h3>
                                            </Link>
                                            <div className="text-right">
                                                <div className="price-display">
                                                    ${room.price}
                                                    <span>/night</span>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="text-muted-foreground text-[14px] mb-4 line-clamp-2">
                                            {room.description}
                                        </p>

                                        <div className="flex items-center gap-4 text-[13px] text-muted-foreground mb-4">
                                            <span className="flex items-center gap-1.5">
                                                <Users size={14} />
                                                {room.guests} Guests
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <Maximize2 size={14} />
                                                {room.size}
                                            </span>
                                        </div>

                                        {/* Amenities */}
                                        <div className="flex gap-2 mb-4">
                                            {room.amenities.slice(0, 4).map((amenity) => {
                                                const Icon = amenityIcons[amenity];
                                                return Icon ? (
                                                    <motion.div
                                                        key={amenity}
                                                        whileHover={{ scale: 1.2 }}
                                                        className="w-8 h-8 bg-subtle flex items-center justify-center"
                                                        title={amenity.charAt(0).toUpperCase() + amenity.slice(1)}
                                                    >
                                                        <Icon size={14} className="text-muted-foreground" />
                                                    </motion.div>
                                                ) : null;
                                            })}
                                        </div>

                                        <div className="h-[1px] bg-border mb-4" />

                                        <Link
                                            href={`/rooms/${room.id}`}
                                            className="text-secondary text-[13px] font-medium uppercase tracking-wider hover:opacity-70 transition-opacity inline-flex items-center gap-2 group/link"
                                        >
                                            View Details
                                            <motion.span
                                                className="inline-block"
                                                initial={{ x: 0 }}
                                                whileHover={{ x: 5 }}
                                            >
                                                →
                                            </motion.span>
                                        </Link>
                                    </div>
                                </motion.div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default function RoomsPage() {
    return (
        <LoaderWrapper>
            <RoomsContent />
        </LoaderWrapper>
    );
}
