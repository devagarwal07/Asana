"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden">
      {/* Sticky Background Image */}
      <div className="sticky top-0 h-screen w-full overflow-hidden z-0">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/892bb068-b17a-42a0-a26a-9e038bc43081-asanaresort-webflow-io/assets/images/60b501c8f9cb836be412f7d3_hero-homepage-13.jpg')`,
            filter: 'brightness(0.85)'
          }}
        />
        {/* Hero Overlay Gradient */}
        <div className="absolute inset-0 z-[1] bg-hero-overlay opacity-60 pointer-events-none" />
        <div className="absolute inset-0 z-[1] bg-black/10 pointer-events-none" />
      </div>

      {/* Main Content Area */}
      <div className="absolute inset-0 z-10 flex flex-col justify-between pt-20">
        <div className="flex-grow flex flex-col items-center justify-center text-center px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="max-w-[1160px] w-full"
          >
            <h1 className="hero-title text-white mb-6">
              Find your nature self
            </h1>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9 }}
              transition={{ duration: 1, delay: 1, ease: "easeOut" }}
              className="text-white font-body text-[18px] md:text-[22px] tracking-wide mx-auto max-w-2xl leading-relaxed"
            >
              Asana is a wellness resort in the green hills of Vietnam
            </motion.div>
          </motion.div>
        </div>

        <div className="flex flex-col">
          {/* Local Info (Time/Weather) - Left Side */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="relative z-20 w-full max-w-[1280px] mx-auto px-8 mb-4"
          >
            <div className="flex flex-col gap-3 md:gap-4 md:flex-row items-start md:items-center">
              <div className="flex items-center gap-2 group cursor-pointer">
                <img 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/892bb068-b17a-42a0-a26a-9e038bc43081-asanaresort-webflow-io/assets/svgs/60a2ee8e255df881e89e8fbb_time-3.svg" 
                  alt="Clock" 
                  className="w-5 h-5 opacity-80"
                />
                <span className="text-white text-[14px] md:text-[15px] font-body tracking-[0.05em]">Local time 6:45 PM</span>
              </div>
              <div className="flex items-center gap-2 group cursor-pointer md:ml-6">
                <img 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/892bb068-b17a-42a0-a26a-9e038bc43081-asanaresort-webflow-io/assets/svgs/60a2ee8dff3dfa6e9ca2f973_weather-4.svg" 
                  alt="Weather" 
                  className="w-5 h-5 opacity-80"
                />
                <span className="text-white text-[14px] md:text-[15px] font-body tracking-[0.05em]">Sunny, 24° C</span>
              </div>
            </div>
          </motion.div>

          {/* Booking Bar */}
          <motion.div 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
            className="relative z-20 w-full bg-[#2A4434]"
          >
            <div className="max-w-[1280px] mx-auto">
              <form className="flex flex-col lg:flex-row w-full">
                {/* Check In */}
                <div className="flex-1 border-r border-[#3d5a49] lg:border-r border-b lg:border-b-0">
                  <div className="p-6">
                    <label className="block text-[12px] font-medium uppercase tracking-[0.1em] text-[#D6D2C4]/70 mb-2">
                      Check in
                    </label>
                    <input 
                      type="text" 
                      placeholder="Select date" 
                      className="w-full bg-transparent text-white placeholder-[#C06B3E] font-body text-[16px] outline-none border-none focus:ring-0 cursor-pointer"
                      readOnly
                      defaultValue="Select date"
                    />
                  </div>
                </div>

                {/* Check Out */}
                <div className="flex-1 border-r border-[#3d5a49] lg:border-r border-b lg:border-b-0">
                  <div className="p-6">
                    <label className="block text-[12px] font-medium uppercase tracking-[0.1em] text-[#D6D2C4]/70 mb-2">
                      Check out
                    </label>
                    <input 
                      type="text" 
                      placeholder="Select date" 
                      className="w-full bg-transparent text-white placeholder-[#C06B3E] font-body text-[16px] outline-none border-none focus:ring-0 cursor-pointer"
                      readOnly
                      defaultValue="Select date"
                    />
                  </div>
                </div>

                {/* Adults */}
                <div className="flex-1 border-r border-[#3d5a49] lg:border-r border-b lg:border-b-0">
                  <div className="p-6 relative group">
                    <label className="block text-[12px] font-medium uppercase tracking-[0.1em] text-[#D6D2C4]/70 mb-2">
                      Adults
                    </label>
                    <select className="w-full bg-transparent text-white font-body text-[16px] outline-none border-none focus:ring-0 cursor-pointer appearance-none">
                      <option className="text-foreground">2</option>
                      <option className="text-foreground">1</option>
                      <option className="text-foreground">3</option>
                      <option className="text-foreground">4</option>
                    </select>
                    <div className="absolute right-6 bottom-7 pointer-events-none opacity-50">
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" stroke="white"><path d="M1 1L6 6L11 1" strokeWidth="1.5"/></svg>
                    </div>
                  </div>
                </div>

                {/* Children */}
                <div className="flex-1 border-r border-[#3d5a49] lg:border-r border-b lg:border-b-0">
                  <div className="p-6 relative">
                    <label className="block text-[12px] font-medium uppercase tracking-[0.1em] text-[#D6D2C4]/70 mb-2">
                      Children
                    </label>
                    <select className="w-full bg-transparent text-white font-body text-[16px] outline-none border-none focus:ring-0 cursor-pointer appearance-none">
                      <option className="text-foreground">0</option>
                      <option className="text-foreground">1</option>
                      <option className="text-foreground">2</option>
                    </select>
                    <div className="absolute right-6 bottom-7 pointer-events-none opacity-50">
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" stroke="white"><path d="M1 1L6 6L11 1" strokeWidth="1.5"/></svg>
                    </div>
                  </div>
                </div>

                {/* Booking Button */}
                <button 
                  type="button" 
                  className="bg-[#C06B3E] hover:bg-[#A85930] transition-colors duration-300 lg:w-[220px] px-8 py-6 lg:py-0 flex items-center justify-center cursor-pointer"
                >
                  <span className="text-white uppercase font-body font-semibold tracking-[0.15em] text-[13px]">
                    Book Now
                  </span>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        .hero-title {
          font-family: var(--font-display);
          font-size: clamp(48px, 8vw, 85px);
          line-height: 1.1;
          letter-spacing: -0.02em;
        }
        @media (max-width: 768px) {
          .hero-title {
            font-size: 52px;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;