"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { Calendar, Users, ChevronDown, MapPin, Sun, Clock, Star } from "lucide-react";
import { useLoading } from "@/components/ui/loader-wrapper";

const HeroSection = () => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState("2");
  const [children, setChildren] = useState("0");
  const { isLoaded } = useLoading();

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const backgroundY = useTransform(smoothProgress, [0, 1], ["0%", "30%"]);
  const backgroundScale = useTransform(smoothProgress, [0, 1], [1, 1.2]);
  const contentY = useTransform(smoothProgress, [0, 1], ["0%", "50%"]);
  const contentOpacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);

  const currentTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  // Staggered animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  const scaleItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const slideLeftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut" as const,
      },
    },
  };

  const slideRightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut" as const,
      },
    },
  };

  const slideUpVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Background Image with Ken Burns Effect */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={isLoaded ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{ y: backgroundY, scale: backgroundScale }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2000')`,
            animation: isLoaded ? "ken-burns 25s ease-in-out infinite alternate" : "none",
          }}
        />
        {/* Gradient Overlays */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/10 to-transparent"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
        />
      </motion.div>

      {/* Rating Badge */}
      <motion.div
        variants={slideRightVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        className="absolute top-28 right-6 md:right-12 z-10 hidden md:block"
      >
        <div className="p-4 bg-secondary text-white text-center">
          <div className="flex items-center justify-center gap-1 mb-1">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + i * 0.1, duration: 0.3 }}
              >
                <Star size={14} fill="currentColor" className="text-accent" />
              </motion.div>
            ))}
          </div>
          <div className="text-[11px] uppercase tracking-wider opacity-80">
            5-Star Luxury Resort
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 container pb-32 md:pb-40"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          className="max-w-[900px]"
        >
          <motion.span
            variants={scaleItemVariants}
            className="inline-block px-4 py-2 bg-accent/20 backdrop-blur-sm text-accent text-[11px] uppercase tracking-[0.2em] font-medium mb-6"
          >
            Vietnam's Premier Luxury Destination
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="text-white text-[48px] md:text-[72px] lg:text-[90px] font-display leading-[1.05] mb-6"
          >
            Where Luxury
            <br />
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              animate={isLoaded ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="italic text-accent inline-block"
            >
              Meets Serenity
            </motion.span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-white/80 text-[17px] md:text-[19px] leading-relaxed max-w-[600px] mb-10"
          >
            Discover an extraordinary sanctuary nestled in the highlands of Vietnam.
            Award-winning hospitality, world-class amenities, and breathtaking
            natural beauty await.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href="/rooms"
              className="btn-primary text-[14px] px-8 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Accommodations
            </motion.a>
            <motion.a
              href="#explore"
              className="btn-outline border-white/50 text-white hover:bg-white hover:text-primary text-[14px] px-8 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Resort
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Booking Bar */}
      <motion.div
        variants={slideUpVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        className="relative z-20 bg-white shadow-2xl mx-auto w-full max-w-6xl mb-8"
      >
        <div className="p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-end">
            {/* Check In */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.0, duration: 0.5 }}
              className="relative"
            >
              <label className="block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                Check In
              </label>
              <div className="relative">
                <Calendar
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary"
                />
                <input
                  type="text"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  placeholder="Select date"
                  onFocus={(e) => (e.target.type = "date")}
                  className="w-full pl-11 pr-4 py-4 border border-border bg-subtle text-foreground text-[14px] focus:outline-none focus:border-secondary transition-colors"
                />
              </div>
            </motion.div>

            {/* Check Out */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="relative"
            >
              <label className="block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                Check Out
              </label>
              <div className="relative">
                <Calendar
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary"
                />
                <input
                  type="text"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  placeholder="Select date"
                  onFocus={(e) => (e.target.type = "date")}
                  className="w-full pl-11 pr-4 py-4 border border-border bg-subtle text-foreground text-[14px] focus:outline-none focus:border-secondary transition-colors"
                />
              </div>
            </motion.div>

            {/* Adults */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="relative"
            >
              <label className="block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                Adults
              </label>
              <div className="relative">
                <Users
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary"
                />
                <select
                  value={adults}
                  onChange={(e) => setAdults(e.target.value)}
                  className="w-full pl-11 pr-10 py-4 border border-border bg-subtle text-foreground text-[14px] focus:outline-none focus:border-secondary appearance-none transition-colors"
                >
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "Adult" : "Adults"}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={16}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
                />
              </div>
            </motion.div>

            {/* Children */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.3, duration: 0.5 }}
              className="relative"
            >
              <label className="block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                Children
              </label>
              <div className="relative">
                <Users
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary"
                />
                <select
                  value={children}
                  onChange={(e) => setChildren(e.target.value)}
                  className="w-full pl-11 pr-10 py-4 border border-border bg-subtle text-foreground text-[14px] focus:outline-none focus:border-secondary appearance-none transition-colors"
                >
                  {[0, 1, 2, 3, 4].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "Child" : "Children"}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={16}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
                />
              </div>
            </motion.div>

            {/* Submit */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.4, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary py-4 text-[14px] font-semibold uppercase tracking-wider"
            >
              Check Availability
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 1 } : {}}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-white/60"
        >
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <div className="w-[1px] h-8 bg-white/40" />
        </motion.div>
      </motion.div>

      <style jsx>{`
        @keyframes ken-burns {
          0% { transform: scale(1) translate(0, 0); }
          100% { transform: scale(1.1) translate(-2%, -1%); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;