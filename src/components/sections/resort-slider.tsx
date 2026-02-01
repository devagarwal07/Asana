"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ResortSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/892bb068-b17a-42a0-a26a-9e038bc43081-asanaresort-webflow-io/assets/images/60b9f124476d05bba9cd4dff_girl-resort-21.jpg",
      alt: "Person floating in a pool surrounded by tropical architecture",
    },
    // Adding placeholders for other slides since only one specific asset was provided
    {
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/892bb068-b17a-42a0-a26a-9e038bc43081-asanaresort-webflow-io/assets/images/60b9f124476d05bba9cd4dff_girl-resort-21.jpg",
      alt: "Tropical resort lifestyle slide 2",
    },
    {
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/892bb068-b17a-42a0-a26a-9e038bc43081-asanaresort-webflow-io/assets/images/60b9f124476d05bba9cd4dff_girl-resort-21.jpg",
      alt: "Tropical resort lifestyle slide 3",
    },
    {
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/892bb068-b17a-42a0-a26a-9e038bc43081-asanaresort-webflow-io/assets/images/60b9f124476d05bba9cd4dff_girl-resort-21.jpg",
      alt: "Tropical resort lifestyle slide 4",
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  return (
    <section className="relative w-full overflow-hidden">
      <div className="slider-wrapper relative h-[400px] md:h-[600px] lg:h-[800px] w-full">
        {/* Slides */}
        <div 
          className="flex h-full transition-transform duration-800 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div 
              key={index} 
              className="relative min-w-full h-full flex-shrink-0"
            >
              <Image
                src={slide.url}
                alt={slide.alt}
                fill
                priority={index === 0}
                className="object-cover"
                sizes="100vw"
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-10 p-2 text-white hover:opacity-70 transition-opacity"
          aria-label="previous slide"
        >
          <ChevronLeft className="w-8 h-8 md:w-10 md:h-10 stroke-[1px]" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-10 p-2 text-white hover:opacity-70 transition-opacity"
          aria-label="next slide"
        >
          <ChevronRight className="w-8 h-8 md:w-10 md:h-10 stroke-[1px]" />
        </button>

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

      <style jsx global>{`
        .slider-wrapper {
          /* Match the spacing/layout from the design system */
          background-color: #F1EFE9;
        }
        
        /* Ensure smooth easing for the slider transition */
        .transition-transform {
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </section>
  );
};

export default ResortSlider;