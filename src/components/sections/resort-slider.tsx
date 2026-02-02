"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { ScrollReveal, ScaleOnScroll } from "@/components/ui/scroll-animations";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1600",
    title: "Infinity Pool",
    subtitle: "Overlooking the Valley",
    description: "World-class infinity pool with panoramic mountain views",
  },
  {
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1600",
    title: "Grand Entrance",
    subtitle: "Architectural Excellence",
    description: "Award-winning architecture meets Vietnamese heritage",
  },
  {
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1600",
    title: "Private Villas",
    subtitle: "Exclusive Retreats",
    description: "Secluded luxury villas with personal butler service",
  },
  {
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1600",
    title: "Sunset Terrace",
    subtitle: "Fine Dining",
    description: "Michelin-inspired cuisine with spectacular views",
  },
];

const ResortSlider = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const scale = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0.85, 1, 1, 0.85]);
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 6000, stopOnInteraction: false })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);

    let progressInterval: NodeJS.Timeout;
    const startProgress = () => {
      setProgress(0);
      progressInterval = setInterval(() => {
        setProgress(prev => Math.min(prev + 1.67, 100));
      }, 100);
    };

    startProgress();
    emblaApi.on("select", () => {
      clearInterval(progressInterval);
      startProgress();
    });

    return () => {
      clearInterval(progressInterval);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section ref={sectionRef} className="relative z-10 py-0 overflow-hidden">
      <motion.div
        style={{ scale, opacity }}
        className="relative"
      >
        <div className="relative aspect-[21/9] min-h-[600px] lg:min-h-[700px]">
          <div className="overflow-hidden h-full" ref={emblaRef}>
            <div className="flex h-full">
              {slides.map((slide, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 relative h-full">
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      scale: selectedIndex === index ? 1.05 : 1,
                    }}
                    transition={{ duration: 6, ease: "linear" }}
                  >
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

                  {/* Caption */}
                  <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{
                      opacity: selectedIndex === index ? 1 : 0,
                      y: selectedIndex === index ? 0 : 60,
                    }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    className="absolute bottom-20 lg:bottom-28 left-8 lg:left-16 text-white max-w-[600px]"
                  >
                    <motion.span
                      initial={{ opacity: 0, x: -20 }}
                      animate={{
                        opacity: selectedIndex === index ? 1 : 0,
                        x: selectedIndex === index ? 0 : -20,
                      }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-[11px] uppercase tracking-[0.25em] text-accent block mb-4"
                    >
                      {slide.subtitle}
                    </motion.span>
                    <h3 className="text-[42px] md:text-[56px] lg:text-[72px] font-display leading-[1.1] mb-4">
                      {slide.title}
                    </h3>
                    <p className="text-[16px] text-white/70 max-w-[400px]">
                      {slide.description}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="absolute bottom-8 right-8 lg:right-16 flex items-center gap-6">
            {/* Progress Bars */}
            <div className="hidden md:flex items-center gap-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className="group relative w-16 h-1 bg-white/30 overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-accent"
                    initial={{ width: 0 }}
                    animate={{
                      width: selectedIndex === index ? `${progress}%` : selectedIndex > index ? "100%" : "0%",
                    }}
                    transition={{ duration: 0.1 }}
                  />
                </button>
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-3">
              <motion.button
                onClick={scrollPrev}
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all border border-white/20"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Previous slide"
              >
                <ChevronLeft size={22} className="text-white" />
              </motion.button>
              <motion.button
                onClick={scrollNext}
                className="w-12 h-12 rounded-full bg-accent flex items-center justify-center hover:bg-accent/80 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Next slide"
              >
                <ChevronRight size={22} className="text-primary" />
              </motion.button>
            </div>
          </div>

          {/* Slide Counter */}
          <div className="absolute top-8 right-8 lg:right-16 text-white">
            <span className="text-[36px] font-display">{String(selectedIndex + 1).padStart(2, "0")}</span>
            <span className="text-[14px] opacity-50">{" / "}{String(slides.length).padStart(2, "0")}</span>
          </div>

          {/* Play Button (decorative) */}
          <motion.div
            className="absolute bottom-20 right-1/4 hidden lg:block"
            whileHover={{ scale: 1.1 }}
          >
            <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all">
              <Play size={24} className="text-white ml-1" fill="currentColor" />
            </div>
            <span className="text-white/60 text-[11px] uppercase tracking-wider mt-3 block text-center">
              Watch Video
            </span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ResortSlider;