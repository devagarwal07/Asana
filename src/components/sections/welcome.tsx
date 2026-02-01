"use client";

import React from 'react';
import Image from 'next/image';

/**
 * WelcomeSection Component
 * 
 * Featured descriptive text intro, a vector map of Vietnam, 
 * and two floating stylized images overlapping the map.
 * 
 * Based on the design specs:
 * - Theme: Light (#F1EFE9 background)
 * - Typography: Tenor Sans for headings, Jost for body/labels
 * - Colors: Primary Green (#2A4434), Accent Terracotta (#C06B3E)
 */

const WelcomeSection: React.FC = () => {
  return (
    <section className="relative bg-[#F1EFE9] pt-[120px] pb-[120px] overflow-hidden">
      <div className="container mx-auto px-8 max-w-[1280px]">
        <div className="flex flex-col items-center text-center mb-24 relative z-10">
          {/* Top Label */}
          <h4 className="font-body text-[12px] font-medium uppercase tracking-[0.15em] text-[#C06B3E] mb-6">
            Welcome to Asana Retreat
          </h4>
          
          {/* Main Heading */}
          <h1 className="font-display text-[60px] leading-[1.1] text-[#222222] mb-8 max-w-[800px] text-balance">
            Welcome to Asana Retreat
          </h1>
          
          {/* Descriptive Subtitle */}
          <div className="font-body text-[16px] leading-[1.6] text-[#222222] max-w-[660px] opacity-80 text-balance">
            Located in the green hills of Vietnam, Asana provides an exceptional wellness retreat for those who want to have deep connection with nature and lose themselves in the wisdom of culture.
          </div>
        </div>

        {/* Map and Floating Images Container */}
        <div className="relative w-full flex justify-center items-center min-h-[500px] mt-12">
          
          {/* Vietnam Vector Map */}
          <div className="relative w-[340px] h-auto lg:w-[400px] opacity-100 transition-transform duration-700 ease-out">
            <img 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/892bb068-b17a-42a0-a26a-9e038bc43081-asanaresort-webflow-io/assets/svgs/60a2ee8ed236c3cda70c4f52_vietnam-5.svg" 
              alt="Vietnam Map"
              className="w-full h-auto grayscale-[0.2] brightness-[1.05]"
            />
          </div>

          {/* Floating Images Container */}
          <div className="absolute inset-0 pointer-events-none">
            
            {/* Image 1: Top Right of Map */}
            <div className="absolute top-[5%] right-[10%] lg:right-[15%] w-[180px] lg:w-[280px] z-20 pointer-events-auto">
              <div className="bg-white p-0 shadow-[0px_20px_40px_rgba(0,0,0,0.05)] transform rotate-[2deg] transition-all hover:scale-105 duration-500">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/892bb068-b17a-42a0-a26a-9e038bc43081-asanaresort-webflow-io/assets/images/60bf893254a432aca6666296_resort-2.jpg"
                  alt="Resort View"
                  width={280}
                  height={350}
                  className="w-full h-auto grayscale-[0.05] brightness-[1.02]"
                />
              </div>
            </div>

            {/* Image 2: Bottom Left of Map */}
            <div className="absolute bottom-[5%] left-[5%] lg:left-[10%] w-[160px] lg:w-[240px] z-20 pointer-events-auto">
              <div className="bg-white p-0 shadow-[0px_20px_40px_rgba(0,0,0,0.05)] transform rotate-[-3deg] transition-all hover:scale-105 duration-500">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/892bb068-b17a-42a0-a26a-9e038bc43081-asanaresort-webflow-io/assets/images/60b50d8a57cf663705af6076_jernej-graj-rlNibgIqi4o-u-1.jpg"
                  alt="Wellness Bath"
                  width={240}
                  height={300}
                  className="w-full h-auto grayscale-[0.05] brightness-[1.1]"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Decorative leaf icon normally goes here based on design system but wasn't in required assets for this exact section container */}
    </section>
  );
};

export default WelcomeSection;