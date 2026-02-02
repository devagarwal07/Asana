"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Heart, Camera, Sparkles, Users, Crown, Gem, Trophy } from "lucide-react";
import { ScrollReveal, Parallax, ImageReveal, TextReveal, FadeInView } from "@/components/ui/scroll-animations";

const eventTypes = [
  {
    icon: Crown,
    name: "Luxury Weddings",
    description: "Fairytale ceremonies with world-class planning",
  },
  {
    icon: Gem,
    name: "Private Celebrations",
    description: "Anniversaries, birthdays & milestone events",
  },
  {
    icon: Trophy,
    name: "Executive Retreats",
    description: "Corporate events with 5-star amenities",
  },
  {
    icon: Camera,
    name: "Fashion & Film",
    description: "Exclusive location for shoots and productions",
  },
];

const features = [
  "Personal Event Director",
  "Michelin-Star Catering",
  "Helicopter Access",
  "Luxury Floral Design",
  "Private Villa Rentals",
  "Fireworks & Entertainment",
];

const SpecialOccasions = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const imageY = useTransform(smoothProgress, [0, 1], [50, -50]);
  const floatY = useTransform(smoothProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 bg-subtle section-padding overflow-hidden"
    >
      {/* Decorative Background */}
      <motion.div
        style={{ y: useTransform(smoothProgress, [0, 1], [-50, 50]) }}
        className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="70" cy="30" r="40" fill="none" stroke="currentColor" strokeWidth="0.2" />
          <circle cx="70" cy="30" r="30" fill="none" stroke="currentColor" strokeWidth="0.2" />
          <circle cx="70" cy="30" r="20" fill="none" stroke="currentColor" strokeWidth="0.2" />
        </svg>
      </motion.div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Image */}
          <div className="relative">
            <ImageReveal>
              <div className="relative aspect-[4/5] max-w-[520px] mx-auto">
                <Image
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800"
                  alt="Luxury wedding at Asana Resort"
                  fill
                  className="object-cover"
                />
              </div>
            </ImageReveal>

            {/* Event Badge */}
            <Parallax speed={0.4}>
              <motion.div
                style={{ y: floatY }}
                className="absolute -top-6 -right-6 lg:-right-12 bg-secondary text-white p-6 floating-shadow z-10"
              >
                <div className="text-center">
                  <div className="text-[42px] font-display leading-none mb-1">200+</div>
                  <div className="text-[11px] uppercase tracking-wider opacity-80">
                    Exclusive Events
                  </div>
                  <div className="text-[10px] uppercase tracking-wider opacity-60 mt-1">
                    Per Year
                  </div>
                </div>
              </motion.div>
            </Parallax>

            {/* Testimonial */}
            <FadeInView direction="right" className="absolute -bottom-8 -left-8 max-w-[280px] z-20">
              <div className="p-5 bg-white shadow-xl">
                <p className="text-[13px] text-muted-foreground italic mb-3">
                  "The most magical wedding venue in Southeast Asia. Every detail was absolute perfection."
                </p>
                <div className="text-[12px] font-medium text-secondary">
                  — Vogue Weddings, 2024
                </div>
              </div>
            </FadeInView>

            {/* Decorative Frame */}
            <motion.div
              style={{ y: useTransform(smoothProgress, [0, 1], [-30, 30]) }}
              className="absolute -bottom-10 -right-10 w-[60%] h-[60%] border-2 border-accent/30 -z-10"
            />
          </div>

          {/* Right: Content */}
          <div>
            <ScrollReveal direction="up" distance={50} scale={true}>
              <span className="label-caps block mb-4">
                Unforgettable Moments
              </span>
            </ScrollReveal>

            <TextReveal>
              <h2 className="text-foreground mb-6">
                Extraordinary
                <br />
                <span className="italic text-secondary">Occasions</span>
              </h2>
            </TextReveal>

            <ScrollReveal direction="up" distance={40}>
              <div className="divider mb-8" />
            </ScrollReveal>

            <ScrollReveal direction="up" distance={50} blur={true}>
              <p className="text-muted-foreground text-[17px] leading-[1.9] mb-8 max-w-[520px]">
                From intimate celebrations to grand galas, Asana Resort provides
                an extraordinary setting for life's most precious moments. Our
                dedicated events team orchestrates every detail with
                uncompromising excellence, creating memories that last forever.
              </p>
            </ScrollReveal>

            {/* Event Types */}
            <div className="grid grid-cols-2 gap-5 mb-8">
              {eventTypes.map((event, index) => (
                <ScrollReveal key={index} direction="up" distance={40} scale={true}>
                  <motion.div
                    className="p-6 bg-white hover:shadow-xl transition-all duration-500 group"
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <event.icon
                      size={28}
                      className="text-secondary mb-4 group-hover:scale-110 transition-transform"
                    />
                    <h4 className="text-[16px] font-medium text-foreground mb-1">
                      {event.name}
                    </h4>
                    <p className="text-[12px] text-muted-foreground">
                      {event.description}
                    </p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>

            {/* Features List */}
            <ScrollReveal direction="up" distance={40}>
              <div className="flex flex-wrap gap-3 mb-10">
                {features.map((feature, index) => (
                  <motion.span
                    key={index}
                    className="px-4 py-2 text-[11px] font-semibold uppercase tracking-wider bg-secondary/10 text-secondary"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(196, 112, 75, 0.2)" }}
                  >
                    {feature}
                  </motion.span>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" distance={40}>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Plan Your Event
                </Link>
                <Link href="/gallery" className="btn-outline">
                  View Event Gallery
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOccasions;