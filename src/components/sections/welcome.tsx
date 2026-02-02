"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ScrollReveal, Parallax, ImageReveal, TextReveal } from "@/components/ui/scroll-animations";

const stats = [
  { value: "25+", label: "Years of Excellence" },
  { value: "150+", label: "Luxury Rooms" },
  { value: "50K+", label: "Happy Guests" },
  { value: "5", label: "Star Rating" },
];

const WelcomeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const backgroundY = useTransform(smoothProgress, [0, 1], ["0%", "30%"]);
  const floatingY = useTransform(smoothProgress, [0, 1], [100, -100]);
  const floatingRotate = useTransform(smoothProgress, [0, 1], [8, -8]);

  return (
    <section
      ref={sectionRef}
      id="explore"
      className="relative z-10 bg-background section-padding overflow-hidden"
    >
      {/* Decorative Background Pattern */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 1L1 25v50l49 24 49-24V25L50 1z' fill='none' stroke='%231E3A2F' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: "100px 100px",
          }}
        />
      </motion.div>

      <div className="container relative z-10">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text Content */}
          <div className="order-2 lg:order-1">
            <ScrollReveal direction="up" distance={60} scale={true}>
              <span className="label-caps block mb-4">
                Welcome to Asana
              </span>
            </ScrollReveal>

            <TextReveal>
              <h2 className="text-foreground mb-6 text-balance">
                A World-Class
                <br />
                <span className="italic text-secondary">5-Star Retreat</span>
              </h2>
            </TextReveal>

            <ScrollReveal direction="up" distance={40} scale={false}>
              <div className="divider mb-8" />
            </ScrollReveal>

            <ScrollReveal direction="up" distance={50} blur={true}>
              <p className="text-muted-foreground text-[17px] leading-[1.9] mb-6 max-w-[520px]">
                Nestled in the lush highlands of Vietnam, Asana Resort represents
                the pinnacle of luxury hospitality. Our award-winning property
                offers an unparalleled experience of elegance, comfort, and
                world-class service.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" distance={50} blur={true}>
              <p className="text-muted-foreground text-[17px] leading-[1.9] mb-10 max-w-[520px]">
                From our Michelin-inspired cuisine to our exclusive spa sanctuary,
                every detail has been meticulously crafted for the most discerning
                travelers seeking the extraordinary.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" distance={40}>
              <a href="/about" className="btn-primary inline-block mr-4">
                Discover Our Story
              </a>
              <a href="/rooms" className="btn-outline inline-block">
                View Accommodations
              </a>
            </ScrollReveal>
          </div>

          {/* Right: Image Composition */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-[4/5] max-w-[520px] mx-auto lg:mx-0 lg:ml-auto">
              {/* Main Image */}
              <ImageReveal>
                <div className="relative w-full aspect-[4/5] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=900"
                    alt="Asana Resort grand entrance"
                    fill
                    className="object-cover"
                  />
                </div>
              </ImageReveal>

              {/* Floating Image 1 - Pool */}
              <Parallax speed={0.4} rotate={true}>
                <motion.div
                  style={{ rotate: floatingRotate }}
                  className="absolute -bottom-10 -left-10 lg:-left-20 w-[55%] aspect-square floating-shadow z-20"
                >
                  <div className="relative w-full h-full bg-white p-3">
                    <Image
                      src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=500"
                      alt="Infinity pool overlooking valley"
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>
              </Parallax>

              {/* Floating Image 2 - Suite */}
              <Parallax speed={-0.3}>
                <motion.div
                  style={{ y: floatingY }}
                  className="absolute -top-8 -right-8 w-[40%] aspect-[4/3] floating-shadow z-10"
                >
                  <div className="relative w-full h-full bg-white p-2">
                    <Image
                      src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=400"
                      alt="Presidential suite interior"
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>
              </Parallax>

              {/* Decorative Frame */}
              <motion.div
                style={{ y: useTransform(smoothProgress, [0, 1], [-30, 30]) }}
                className="absolute -top-8 -right-8 w-[70%] h-[70%] border-2 border-accent/40 -z-10"
              />

              {/* Award Badge */}
              <ScrollReveal direction="right" distance={40}>
                <div className="absolute bottom-20 right-0 lg:-right-12 bg-secondary text-white px-6 py-4 z-30">
                  <div className="text-[11px] uppercase tracking-wider opacity-80 mb-1">
                    Awarded
                  </div>
                  <div className="text-[18px] font-display">
                    Best Luxury Resort 2024
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-28 lg:mt-36">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
            {stats.map((stat, index) => (
              <ScrollReveal
                key={index}
                direction="up"
                distance={60}
                scale={true}
              >
                <div className="text-center lg:text-left group">
                  <motion.div
                    className="text-[52px] md:text-[72px] font-display font-medium text-secondary leading-none mb-3"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-[13px] text-muted-foreground uppercase tracking-[0.15em]">
                    {stat.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <Parallax speed={-0.2} className="absolute right-0 top-1/3 w-[400px] h-[600px] pointer-events-none hidden xl:block opacity-[0.03]">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.3" />
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.3" />
          <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.3" />
        </svg>
      </Parallax>
    </section>
  );
};

export default WelcomeSection;