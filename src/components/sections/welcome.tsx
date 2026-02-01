"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

/**
 * WelcomeSection Component
 * 
 * Featured descriptive text intro, a vector map of Vietnam, 
 * and two floating stylized images overlapping the map.
 */

const WelcomeSection: React.FC = () => {
  return (
    <section className="relative z-10 bg-[#F1EFE9] pt-[120px] pb-[120px] overflow-hidden shadow-[0_-50px_100px_rgba(0,0,0,0.05)]">
      <div className="container mx-auto px-8 max-w-[1280px]">
        <div className="flex flex-col items-center text-center mb-24 relative z-10">
          {/* Top Label */}
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-body text-[12px] font-medium uppercase tracking-[0.15em] text-[#C06B3E] mb-6"
          >
            Welcome to Asana Retreat
          </motion.h4>
          
          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-[60px] leading-[1.1] text-[#222222] mb-8 max-w-[800px] text-balance"
          >
            Welcome to Asana Retreat
          </motion.h1>
          
          {/* Descriptive Subtitle */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-body text-[16px] leading-[1.6] text-[#222222] max-w-[660px] opacity-80 text-balance"
          >
            Located in the green hills of Vietnam, Asana provides an exceptional wellness retreat for those who want to have deep connection with nature and lose themselves in the wisdom of culture.
          </motion.div>
        </div>

        {/* Map and Floating Images Container */}
        <div className="relative w-full flex justify-center items-center min-h-[500px] mt-12">
          
          {/* Vietnam Vector Map */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-[340px] h-auto lg:w-[400px]"
          >
            <img 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/892bb068-b17a-42a0-a26a-9e038bc43081-asanaresort-webflow-io/assets/svgs/60a2ee8ed236c3cda70c4f52_vietnam-5.svg" 
              alt="Vietnam Map"
              className="w-full h-auto grayscale-[0.2] brightness-[1.05]"
            />
          </motion.div>

          {/* Floating Images Container */}
          <div className="absolute inset-0 pointer-events-none">
            
            {/* Image 1: Top Right of Map */}
            <motion.div 
              initial={{ opacity: 0, x: 40, rotate: 5 }}
              whileInView={{ opacity: 1, x: 0, rotate: 2 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
              className="absolute top-[5%] right-[10%] lg:right-[18%] w-[180px] lg:w-[280px] z-20 pointer-events-auto"
            >
              <div className="bg-white p-0 shadow-[0px_20px_40px_rgba(0,0,0,0.05)] transition-all hover:scale-105 duration-500">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/892bb068-b17a-42a0-a26a-9e038bc43081-asanaresort-webflow-io/assets/images/60bf893254a432aca6666296_resort-2.jpg"
                  alt="Resort View"
                  width={280}
                  height={350}
                  className="w-full h-auto grayscale-[0.05] brightness-[1.02]"
                />
              </div>
            </motion.div>

            {/* Image 2: Bottom Left of Map */}
            <motion.div 
              initial={{ opacity: 0, x: -40, rotate: -8 }}
              whileInView={{ opacity: 1, x: 0, rotate: -3 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
              className="absolute bottom-[5%] left-[5%] lg:left-[12%] w-[160px] lg:w-[240px] z-20 pointer-events-auto"
            >
              <div className="bg-white p-0 shadow-[0px_20px_40px_rgba(0,0,0,0.05)] transition-all hover:scale-105 duration-500">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/892bb068-b17a-42a0-a26a-9e038bc43081-asanaresort-webflow-io/assets/images/60b50d8a57cf663705af6076_jernej-graj-rlNibgIqi4o-u-1.jpg"
                  alt="Wellness Bath"
                  width={240}
                  height={300}
                  className="w-full h-auto grayscale-[0.05] brightness-[1.1]"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;