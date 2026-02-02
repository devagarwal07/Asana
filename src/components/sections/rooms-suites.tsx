"use client";

import React, { useState, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Users, Maximize2, Star, Bed } from "lucide-react";
import { ScrollReveal, FadeInView, ImageReveal, TextReveal } from "@/components/ui/scroll-animations";

const rooms = [
  {
    id: "standard-double",
    type: "Deluxe Room",
    name: "Garden View Suite",
    price: 350,
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=700",
    guests: 2,
    size: "45 m²",
    bed: "King Size Bed",
    description: "Elegant comfort with private terrace overlooking manicured gardens",
    rating: 4.9,
  },
  {
    id: "premium-double",
    type: "Premium Suite",
    name: "Valley View Suite",
    price: 520,
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=700",
    guests: 2,
    size: "65 m²",
    bed: "King Size Bed",
    description: "Sophisticated luxury with panoramic mountain and valley views",
    rating: 4.9,
  },
  {
    id: "luxury-suite",
    type: "Grand Suite",
    name: "Royal Suite",
    price: 890,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=700",
    guests: 4,
    size: "120 m²",
    bed: "King + Twin Beds",
    description: "Opulent living spaces with butler service and private dining",
    rating: 5.0,
  },
  {
    id: "presidential-villa",
    type: "Villa",
    name: "Presidential Villa",
    price: 2500,
    image: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?q=80&w=700",
    guests: 8,
    size: "350 m²",
    bed: "3 King Beds",
    description: "Ultimate privacy with private infinity pool, chef, and helipad access",
    rating: 5.0,
  },
];

const RoomsSuites = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const backgroundScale = useTransform(smoothProgress, [0, 0.5], [0.95, 1]);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section ref={sectionRef} className="relative z-10 bg-subtle section-padding overflow-hidden">
      {/* Decorative Background */}
      <motion.div
        style={{ scale: backgroundScale }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent" />
      </motion.div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
          <div>
            <ScrollReveal direction="up" distance={50} scale={true}>
              <span className="label-caps block mb-4">
                Luxury Accommodations
              </span>
            </ScrollReveal>
            <TextReveal>
              <h2 className="text-foreground">
                Exquisite Rooms
                <br />
                <span className="italic text-secondary">& Suites</span>
              </h2>
            </TextReveal>
          </div>

          <ScrollReveal direction="up" distance={40}>
            <p className="text-muted-foreground max-w-[400px] text-[15px] leading-relaxed mb-4">
              Each accommodation is a masterpiece of design, offering world-class
              amenities and breathtaking views.
            </p>
            <Link href="/rooms" className="btn-outline inline-block">
              View All Accommodations
            </Link>
          </ScrollReveal>
        </div>

        {/* Carousel */}
        <ScrollReveal direction="up" distance={80} scale={true}>
          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-8">
                {rooms.map((room, index) => (
                  <motion.div
                    key={room.id}
                    className="flex-[0_0_90%] md:flex-[0_0_48%] lg:flex-[0_0_32%] min-w-0"
                    onMouseEnter={() => setHoveredCard(room.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Link href={`/rooms/${room.id}`} className="block group">
                      {/* Image */}
                      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                        <Image
                          src={room.image}
                          alt={room.name}
                          fill
                          className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                        {/* Room Type Badge */}
                        <motion.div
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="absolute top-5 left-5"
                        >
                          <span className="px-4 py-2 bg-white/95 backdrop-blur-sm text-[10px] font-semibold uppercase tracking-wider text-primary">
                            {room.type}
                          </span>
                        </motion.div>

                        {/* Rating */}
                        <div className="absolute top-5 right-5 flex items-center gap-1 px-3 py-1.5 bg-secondary text-white">
                          <Star size={12} fill="currentColor" />
                          <span className="text-[12px] font-medium">{room.rating}</span>
                        </div>

                        {/* Quick Info on Hover */}
                        <AnimatePresence>
                          {hoveredCard === room.id && (
                            <motion.div
                              initial={{ opacity: 0, y: 30 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 30 }}
                              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                              className="absolute bottom-0 left-0 right-0 p-6 text-white"
                            >
                              <p className="text-[14px] opacity-90 mb-4 line-clamp-2">
                                {room.description}
                              </p>
                              <div className="flex items-center gap-5 text-[12px] opacity-80">
                                <span className="flex items-center gap-2">
                                  <Users size={14} />
                                  {room.guests} Guests
                                </span>
                                <span className="flex items-center gap-2">
                                  <Maximize2 size={14} />
                                  {room.size}
                                </span>
                                <span className="flex items-center gap-2">
                                  <Bed size={14} />
                                  {room.bed}
                                </span>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Content */}
                      <div className="p-6 bg-white">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-[24px] font-display text-foreground group-hover:text-secondary transition-colors">
                            {room.name}
                          </h3>
                        </div>

                        <div className="h-[1px] bg-border mb-4" />

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3 text-[13px] text-muted-foreground">
                            <span>{room.size}</span>
                            <span>•</span>
                            <span>{room.guests} Guests</span>
                          </div>
                          <div className="text-right">
                            <span className="text-[11px] text-muted-foreground block">From</span>
                            <span className="text-[24px] font-display text-secondary">${room.price}</span>
                            <span className="text-[12px] text-muted-foreground">/night</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-12">
              {/* Dots */}
              <div className="flex gap-3">
                {rooms.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => emblaApi?.scrollTo(index)}
                    className={`h-1 transition-all duration-500 ${selectedIndex === index
                        ? "bg-secondary w-12"
                        : "bg-border w-6 hover:bg-muted-foreground"
                      }`}
                    whileHover={{ scale: 1.1 }}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div className="flex gap-4">
                <motion.button
                  onClick={scrollPrev}
                  className="w-14 h-14 rounded-full border-2 border-border flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Previous room"
                >
                  <ChevronLeft size={22} />
                </motion.button>
                <motion.button
                  onClick={scrollNext}
                  className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-all duration-300 text-white"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Next room"
                >
                  <ChevronRight size={22} />
                </motion.button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default RoomsSuites;