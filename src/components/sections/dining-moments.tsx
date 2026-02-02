"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Clock, Utensils, Star, Award, Wine, ChefHat } from "lucide-react";
import { ScrollReveal, Parallax, ImageReveal, TextReveal, FadeInView } from "@/components/ui/scroll-animations";

const experiences = [
  {
    icon: ChefHat,
    name: "The Grand Restaurant",
    time: "6:30 PM - 10:30 PM",
    description: "Michelin-starred fine dining with valley views",
    highlight: true,
  },
  {
    icon: Wine,
    name: "Wine Cellar",
    time: "5:00 PM - 11:00 PM",
    description: "2,000+ vintage collection with sommelier pairings",
    highlight: false,
  },
  {
    icon: Utensils,
    name: "Sunrise Terrace",
    time: "6:30 AM - 11:00 AM",
    description: "Gourmet breakfast buffet with champagne service",
    highlight: true,
  },
];

const DiningSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const imageY = useTransform(smoothProgress, [0, 1], ["-15%", "15%"]);
  const imageScale = useTransform(smoothProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 bg-background overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[800px]">
        {/* Left: Sticky Image */}
        <div className="relative lg:sticky lg:top-0 lg:h-screen overflow-hidden">
          <motion.div style={{ y: imageY, scale: imageScale }} className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200"
              alt="Michelin-starred dining at Asana Resort"
              fill
              className="object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/40 lg:bg-gradient-to-t lg:from-black/60 lg:via-black/20 lg:to-transparent" />

          {/* Award Badge */}
          <FadeInView direction="up" className="absolute bottom-12 left-8 lg:left-12 right-8">
            <div className="p-6 bg-white/95 backdrop-blur-sm max-w-[320px]">
              <div className="flex items-center gap-2 mb-3">
                <Star size={18} className="text-secondary" fill="currentColor" />
                <Star size={18} className="text-secondary" fill="currentColor" />
                <Award size={22} className="text-secondary ml-2" />
              </div>
              <h4 className="text-[20px] font-display text-foreground mb-2">
                2 Michelin Stars
              </h4>
              <p className="text-[13px] text-muted-foreground">
                Chef Nguyen's innovative cuisine blending French techniques with Vietnamese soul
              </p>
            </div>
          </FadeInView>
        </div>

        {/* Right: Content */}
        <div className="p-10 lg:p-16 xl:p-24 flex flex-col justify-center bg-subtle">
          <ScrollReveal direction="up" distance={50} scale={true}>
            <span className="label-caps block mb-4">
              Culinary Excellence
            </span>
          </ScrollReveal>

          <TextReveal>
            <h2 className="text-foreground mb-6">
              World-Class
              <br />
              <span className="italic text-secondary">Dining</span>
            </h2>
          </TextReveal>

          <ScrollReveal direction="up" distance={40}>
            <div className="divider mb-8" />
          </ScrollReveal>

          <ScrollReveal direction="up" distance={50} blur={true}>
            <p className="text-muted-foreground text-[17px] leading-[1.9] mb-10 max-w-[520px]">
              Experience culinary artistry at its finest. Our Michelin-starred
              restaurant showcases the best of Vietnamese gastronomy, reimagined
              through a contemporary lens by our award-winning culinary team.
              From sunrise champagne breakfasts to candlelit dinners, every
              meal is an unforgettable journey.
            </p>
          </ScrollReveal>

          {/* Dining Experiences */}
          <div className="space-y-5 mb-10">
            {experiences.map((exp, index) => (
              <ScrollReveal key={index} direction="up" distance={40} scale={true}>
                <motion.div
                  className={`p-6 transition-all duration-500 ${exp.highlight
                      ? "bg-white shadow-lg hover:shadow-2xl"
                      : "bg-background hover:bg-white hover:shadow-xl"
                    }`}
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex gap-4">
                      <exp.icon size={24} className="text-secondary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-[18px] font-display text-foreground mb-1">
                          {exp.name}
                        </h4>
                        <p className="text-[14px] text-muted-foreground">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-[12px] text-secondary shrink-0 bg-secondary/10 px-3 py-2">
                      <Clock size={14} />
                      {exp.time}
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" distance={40}>
            <div className="flex flex-wrap gap-4">
              <Link href="/restaurant" className="btn-primary">
                View Menus
              </Link>
              <Link href="/contact" className="btn-outline">
                Reserve a Table
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default DiningSection;