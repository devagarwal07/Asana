"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const DiningMoments = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Decorative Leaf Icon (Left) - Using SVG from assets */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 0.1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="absolute left-[-100px] top-[150px] w-[300px] h-[300px] pointer-events-none z-0"
      >
        <img 
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/892bb068-b17a-42a0-a26a-9e038bc43081-asanaresort-webflow-io/assets/svgs/60a2ee8e0d09126e006b645d_leaf-right-11.svg" 
          alt="" 
          className="w-full h-full object-contain transform rotate-180"
        />
      </motion.div>

      {/* Top Small Inset Image Section */}
      <div className="bg-[#F1EFE9] pt-20 flex justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="w-[180px] h-[180px] md:w-[220px] md:h-[220px] overflow-hidden">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/892bb068-b17a-42a0-a26a-9e038bc43081-asanaresort-webflow-io/assets/images/60a3fc028b488175c4a4257a_bowl-12.jpg"
              alt="Dining bowl at Asana"
              width={220}
              height={220}
              className="object-cover w-full h-full shadow-2xl transition-transform duration-700 hover:scale-110"
            />
          </div>
        </motion.div>
      </div>

      {/* Main Full-Width Image Section (Woman in Hammock) */}
      <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative w-full h-full"
        >
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/892bb068-b17a-42a0-a26a-9e038bc43081-asanaresort-webflow-io/assets/images/60b4f11df67f609e202e666e_altalena-22.jpg"
            alt="Unforgettable moments at Asana"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="bg-[#F1EFE9] px-6 py-24 md:py-32">
        <div className="container mx-auto max-w-[1280px]">
          <div className="text-center flex flex-col items-center">
            {/* Tagline */}
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-body text-[12px] font-medium uppercase tracking-[0.15em] text-[#C06B3E] mb-6"
            >
              RELAX TO THE SOUND OF THE WATERFALL
            </motion.h4>

            {/* Title */}
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-[42px] md:text-[56px] lg:text-[60px] leading-[1.1] text-[#222222] mb-8"
            >
              Live unforgettable moments
            </motion.h2>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-body text-[16px] md:text-[18px] leading-[1.6] text-[#222222] max-w-[700px] text-balance opacity-80 mb-16"
            >
              Indulge in culinary excellence at Asana. Our chefs source local ingredients to create dishes that tell stories of tradition and innovation, served in breathtaking settings.
            </motion.p>

            {/* Button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-4"
            >
              <a
                href="#"
                className="inline-block border border-[#C06B3E] px-10 py-5 font-body text-[13px] font-semibold uppercase tracking-[0.1em] text-[#C06B3E] hover:bg-[#C06B3E] hover:text-white transition-all duration-300"
              >
                Explore all experiences
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Decorative Leaf Icon (Bottom Right) */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 0.1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="absolute right-[-120px] bottom-[-50px] w-[350px] h-[350px] pointer-events-none z-0"
      >
        <img 
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/892bb068-b17a-42a0-a26a-9e038bc43081-asanaresort-webflow-io/assets/svgs/60a2ee8e0d09126e006b645d_leaf-right-11.svg" 
          alt="" 
          className="w-full h-full object-contain"
        />
      </motion.div>
    </div>
  );
};

export default DiningMoments;