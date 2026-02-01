"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ResortSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/892bb068-b17a-42a0-a26a-9e038bc43081-asanaresort-webflow-io/assets/images/60b9f124476d05bba9cd4dff_girl-resort-21.jpg",
      alt: "Person floating in a pool surrounded by tropical architecture",
    },
    {
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/892bb068-b17a-42a0-a26a-9e038bc43081-asanaresort-webflow-io/assets/images/60ba19145004ae59e197414e_5f513ec3045787e612184ab4_-5.jpg",
      alt: "Tropical resort lifestyle slide 2",
    },
    {
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/892bb068-b17a-42a0-a26a-9e038bc43081-asanaresort-webflow-io/assets/images/60a29e45502fac6091e9e964_spa-homepage-14.jpg",
      alt: "Tropical resort lifestyle slide 3",
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  return (
    <section className="relative w-full overflow-hidden bg-[#F1EFE9]">
      <div className="slider-wrapper relative h-[400px] md:h-[600px] lg:h-[800px] w-full">
        {/* Slides */}
        <div className="relative h-full w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={slides[currentSlide].url}
                alt={slides[currentSlide].alt}
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute inset-0 z-10 flex items-center justify-between px-6 pointer-events-none">
          <button
            onClick={prevSlide}
            className="p-2 text-white hover:opacity-70 transition-opacity pointer-events-auto cursor-pointer"
            aria-label="previous slide"
          >
            <ChevronLeft className="w-8 h-8 md:w-10 md:h-10 stroke-[1px]" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 text-white hover:opacity-70 transition-opacity pointer-events-auto cursor-pointer"
            aria-label="next slide"
          >
            <ChevronRight className="w-8 h-8 md:w-10 md:h-10 stroke-[1px]" />
          </button>
        </div>

        {/* Slide Indicators / Dots */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-white scale-125" : "bg-white/40"
              }`}
              aria-label={`Show slide ${index + 1} of ${slides.length}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResortSlider;