"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Grid3X3, Camera, Award } from "lucide-react";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import LoaderWrapper, { useLoading } from "@/components/ui/loader-wrapper";
import { ScrollReveal, TextReveal, ImageReveal, FadeInView } from "@/components/ui/scroll-animations";

const galleryImages = [
    {
        src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800",
        alt: "Infinity pool experience",
        category: "Pool & Gardens",
    },
    {
        src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=800",
        alt: "Luxury suite interior",
        category: "Rooms & Suites",
    },
    {
        src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800",
        alt: "Spa sanctuary",
        category: "Spa & Wellness",
    },
    {
        src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800",
        alt: "Restaurant ambiance",
        category: "Dining",
    },
    {
        src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800",
        alt: "Resort architecture",
        category: "Resort Grounds",
    },
    {
        src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800",
        alt: "Premium bedroom",
        category: "Rooms & Suites",
    },
    {
        src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800",
        alt: "Spa treatment",
        category: "Spa & Wellness",
    },
    {
        src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800",
        alt: "Signature cuisine",
        category: "Dining",
    },
    {
        src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=800",
        alt: "Standard room",
        category: "Rooms & Suites",
    },
    {
        src: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=800",
        alt: "Wellness pool",
        category: "Spa & Wellness",
    },
    {
        src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800",
        alt: "Romantic wedding setting",
        category: "Events",
    },
    {
        src: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=800",
        alt: "Tropical pool bar",
        category: "Pool & Gardens",
    },
];

const categories = [
    "All",
    "Rooms & Suites",
    "Spa & Wellness",
    "Dining",
    "Pool & Gardens",
    "Resort Grounds",
    "Events",
];

function GalleryContent() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
    const { isLoaded } = useLoading();
    const heroRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
    const heroScale = useTransform(smoothProgress, [0, 1], [1, 1.2]);
    const heroOpacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);

    const filteredImages = selectedCategory === "All"
        ? galleryImages
        : galleryImages.filter((img) => img.category === selectedCategory);

    const openLightbox = (index: number) => setLightboxIndex(index);
    const closeLightbox = () => setLightboxIndex(null);

    const nextImage = () => {
        if (lightboxIndex !== null) {
            setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
        }
    };

    const prevImage = () => {
        if (lightboxIndex !== null) {
            setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length);
        }
    };

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero */}
            <section ref={heroRef} className="relative h-[55vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <motion.div style={{ scale: heroScale }} className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2000"
                        alt="Gallery"
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
                        <Camera size={18} className="text-accent" />
                        <span className="label-caps text-accent">Visual Journey</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-white"
                    >
                        Gallery
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-white/80 text-[17px] max-w-[500px] mx-auto mt-4"
                    >
                        Explore our award-winning resort through stunning imagery
                    </motion.p>
                </motion.div>
            </section>

            {/* Gallery Section */}
            <section className="section-padding">
                <div className="container">
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

                    {/* Results */}
                    <p className="text-muted-foreground text-[14px] mb-8 text-center">
                        Showing {filteredImages.length} images
                    </p>

                    {/* Masonry Grid */}
                    <motion.div
                        layout
                        className="columns-1 md:columns-2 lg:columns-3 gap-6"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredImages.map((image, index) => (
                                <motion.div
                                    key={image.src}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                    whileHover={{ scale: 1.02 }}
                                    className="relative mb-6 break-inside-avoid group cursor-pointer overflow-hidden"
                                    onClick={() => openLightbox(index)}
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        width={600}
                                        height={400}
                                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileHover={{ opacity: 1 }}
                                        className="absolute inset-0 bg-primary/60 flex items-center justify-center"
                                    >
                                        <div className="text-white text-center">
                                            <motion.div
                                                initial={{ scale: 0.8, opacity: 0 }}
                                                whileHover={{ scale: 1, opacity: 1 }}
                                                transition={{ delay: 0.1 }}
                                            >
                                                <Camera size={32} className="mx-auto mb-3" />
                                                <span className="text-[10px] uppercase tracking-wider font-medium bg-white/20 px-3 py-1.5">
                                                    {image.category}
                                                </span>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* Lightbox */}
            <AnimatePresence>
                {lightboxIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/95 z-[200] flex items-center justify-center"
                        onClick={closeLightbox}
                    >
                        {/* Close Button */}
                        <motion.button
                            onClick={closeLightbox}
                            whileHover={{ scale: 1.1, rotate: 90 }}
                            className="absolute top-6 right-6 text-white/80 hover:text-white z-10"
                            aria-label="Close"
                        >
                            <X size={32} />
                        </motion.button>

                        {/* Navigation */}
                        <motion.button
                            onClick={(e) => { e.stopPropagation(); prevImage(); }}
                            whileHover={{ scale: 1.1, x: -5 }}
                            className="absolute left-6 text-white/80 hover:text-white"
                            aria-label="Previous"
                        >
                            <ChevronLeft size={48} />
                        </motion.button>

                        {/* Image */}
                        <motion.div
                            key={lightboxIndex}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="relative w-[90vw] h-[80vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={filteredImages[lightboxIndex].src}
                                alt={filteredImages[lightboxIndex].alt}
                                fill
                                className="object-contain"
                            />
                        </motion.div>

                        <motion.button
                            onClick={(e) => { e.stopPropagation(); nextImage(); }}
                            whileHover={{ scale: 1.1, x: 5 }}
                            className="absolute right-6 text-white/80 hover:text-white"
                            aria-label="Next"
                        >
                            <ChevronRight size={48} />
                        </motion.button>

                        {/* Caption & Counter */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white">
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-[14px] mb-2"
                            >
                                {filteredImages[lightboxIndex].alt}
                            </motion.p>
                            <span className="text-[12px] text-white/60">
                                {lightboxIndex + 1} / {filteredImages.length}
                            </span>
                        </div>

                        {/* Dots */}
                        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
                            {filteredImages.slice(0, 10).map((_, index) => (
                                <motion.button
                                    key={index}
                                    onClick={(e) => { e.stopPropagation(); setLightboxIndex(index); }}
                                    whileHover={{ scale: 1.3 }}
                                    className={`w-2 h-2 rounded-full transition-colors ${lightboxIndex === index ? "bg-white" : "bg-white/40"
                                        }`}
                                />
                            ))}
                            {filteredImages.length > 10 && (
                                <span className="text-white/40 text-[10px]">...</span>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer />
        </div>
    );
}

export default function GalleryPage() {
    return (
        <LoaderWrapper>
            <GalleryContent />
        </LoaderWrapper>
    );
}
