"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Sparkles, Droplets, Flower2, Heart, Award, Clock } from "lucide-react";
import { ScrollReveal, Parallax, ImageReveal, TextReveal } from "@/components/ui/scroll-animations";

const treatments = [
  {
    icon: Sparkles,
    name: "Signature Massage",
    description: "90-minute luxury treatment with aromatic oils",
    price: 180,
  },
  {
    icon: Droplets,
    name: "Hydrotherapy",
    description: "Thermal pool circuit with mineral bathing",
    price: 150,
  },
  {
    icon: Flower2,
    name: "Royal Facial",
    description: "Anti-aging treatment with gold-infused serums",
    price: 220,
  },
  {
    icon: Heart,
    name: "Couples Retreat",
    description: "Private suite with champagne and caviar",
    price: 450,
  },
];

const SpaSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const backgroundY = useTransform(smoothProgress, [0, 1], ["0%", "30%"]);
  const floatingY = useTransform(smoothProgress, [0, 1], [80, -80]);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 overflow-hidden section-padding"
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1800"
          alt="Luxury spa atmosphere"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-transparent" />
      </motion.div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Image Composition */}
          <div className="relative">
            <ImageReveal>
              <div className="relative aspect-[4/5] max-w-[480px] mx-auto">
                <Image
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=700"
                  alt="Luxury spa treatment room"
                  fill
                  className="object-cover"
                />
              </div>
            </ImageReveal>

            {/* Overlapping Image */}
            <Parallax speed={0.5} rotate={true}>
              <motion.div
                style={{ y: floatingY }}
                className="absolute -bottom-10 -right-10 lg:-right-16 w-[55%] aspect-[3/4] floating-shadow z-10"
              >
                <div className="relative w-full h-full bg-white p-3">
                  <Image
                    src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=500"
                    alt="Spa pool and relaxation"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </Parallax>

            {/* Award Badge */}
            <ScrollReveal direction="left" distance={50}>
              <div className="absolute top-10 -left-8 bg-secondary text-white p-5 z-20">
                <Award size={28} className="text-accent mb-2" />
                <div className="text-[11px] uppercase tracking-wider opacity-80">
                  World Luxury
                </div>
                <div className="text-[14px] font-medium">
                  Spa Awards 2024
                </div>
              </div>
            </ScrollReveal>

            {/* Decorative Frame */}
            <motion.div
              style={{ y: useTransform(smoothProgress, [0, 1], [-40, 40]) }}
              className="absolute -top-8 -left-8 w-[50%] h-[50%] border-2 border-accent/30 z-0"
            />
          </div>

          {/* Right: Content */}
          <div className="text-white">
            <ScrollReveal direction="up" distance={50} scale={true}>
              <span className="label-caps text-accent block mb-4">
                World-Class Wellness
              </span>
            </ScrollReveal>

            <TextReveal>
              <h2 className="text-white mb-6">
                The Sanctuary
                <br />
                <span className="italic text-accent">Spa & Wellness</span>
              </h2>
            </TextReveal>

            <ScrollReveal direction="up" distance={40}>
              <div className="w-[80px] h-[2px] bg-accent mb-8" />
            </ScrollReveal>

            <ScrollReveal direction="up" distance={50} blur={true}>
              <p className="text-white/85 text-[17px] leading-[1.9] mb-10 max-w-[520px]">
                Our award-winning spa sanctuary spans 3,000 square meters of pure
                indulgence. Experience transformative treatments inspired by
                ancient Vietnamese healing traditions, delivered by world-renowned
                therapists in an atmosphere of absolute serenity.
              </p>
            </ScrollReveal>

            {/* Treatment Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              {treatments.map((treatment, index) => (
                <ScrollReveal key={index} direction="up" distance={40} scale={true}>
                  <motion.div
                    className="p-6 bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-500 group border border-white/10"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <treatment.icon
                      size={28}
                      className="text-accent mb-4 group-hover:scale-110 transition-transform"
                    />
                    <h4 className="text-[17px] font-medium mb-2">
                      {treatment.name}
                    </h4>
                    <p className="text-[13px] text-white/60 mb-3">
                      {treatment.description}
                    </p>
                    <span className="text-[18px] font-display text-accent">
                      ${treatment.price}
                    </span>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal direction="up" distance={40}>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/spa"
                  className="btn-primary"
                >
                  Explore Treatments
                </Link>
                <Link
                  href="/contact"
                  className="btn-outline border-white/50 text-white hover:bg-white hover:text-primary"
                >
                  Book Spa Session
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpaSection;