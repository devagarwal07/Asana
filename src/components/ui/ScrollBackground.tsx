"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const IMAGES = [
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/892bb068-b17a-42a0-a26a-9e038bc43081-asanaresort-webflow-io/assets/images/60b501c8f9cb836be412f7d3_hero-homepage-13.jpg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/892bb068-b17a-42a0-a26a-9e038bc43081-asanaresort-webflow-io/assets/images/60a29e45502fac6091e9e964_spa-homepage-14.jpg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/892bb068-b17a-42a0-a26a-9e038bc43081-asanaresort-webflow-io/assets/images/60a29e469796e987c95e1c4a_restaurant-homepage-15.jpg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/892bb068-b17a-42a0-a26a-9e038bc43081-asanaresort-webflow-io/assets/images/60a29e4460596377317789f2_rooms-suites-12.jpg",
];

export function ScrollBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed inset-0 w-full h-screen -z-10 pointer-events-none overflow-hidden">
      {IMAGES.map((src, index) => {
        const start = index / IMAGES.length;
        const end = (index + 1) / IMAGES.length;
        
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const opacity = useTransform(
          smoothScroll,
          [Math.max(0, start - 0.1), start, end - 0.1, end],
          [0, 1, 1, 0]
        );

        // eslint-disable-next-line react-hooks/rules-of-hooks
        const scale = useTransform(
          smoothScroll,
          [start, end],
          [1.05, 1.15]
        );

        return (
          <motion.div
            key={src}
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${src})`,
              opacity,
              scale,
            }}
          >
            <div className="absolute inset-0 bg-black/20" />
          </motion.div>
        );
      })}
    </div>
  );
}
