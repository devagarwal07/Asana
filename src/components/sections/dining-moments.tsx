"use client";

import React from 'react';
import Image from 'next/image';

const DiningMoments = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Decorative Leaf Icon (Left) - Using SVG from assets */}
      <div className="absolute left-[-100px] top-[150px] w-[300px] h-[300px] opacity-10 pointer-events-none z-0">
        <img 
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/892bb068-b17a-42a0-a26a-9e038bc43081-asanaresort-webflow-io/assets/svgs/60a2ee8e0d09126e006b645d_leaf-right-11.svg" 
          alt="" 
          className="w-full h-full object-contain transform rotate-180"
        />
      </div>

      {/* Top Small Inset Image Section */}
      <div className="bg-[#F1EFE9] pt-20 flex justify-center">
        <div className="relative">
          <div className="w-[180px] h-[180px] md:w-[220px] md:h-[220px] overflow-hidden">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/892bb068-b17a-42a0-a26a-9e038bc43081-asanaresort-webflow-io/assets/images/60a3fc028b488175c4a4257a_bowl-12.jpg"
              alt="Dining bowl at Asana"
              width={220}
              height={220}
              className="object-cover w-full h-full shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Main Full-Width Image Section (Woman in Hammock) */}
      <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/892bb068-b17a-42a0-a26a-9e038bc43081-asanaresort-webflow-io/assets/images/60b4f11df67f609e202e666e_altalena-22.jpg"
          alt="Unforgettable moments at Asana"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </section>

      {/* Content Section */}
      <section className="bg-[#F1EFE9] px-6 py-24 md:py-32">
        <div className="container mx-auto max-w-[1280px]">
          <div className="text-center flex flex-col items-center">
            {/* Tagline */}
            <h4 className="font-body text-[12px] font-medium uppercase tracking-[0.15em] text-[#C06B3E] mb-6">
              RELAX TO THE SOUND OF THE WATERFALL
            </h4>

            {/* Title */}
            <h2 className="font-display text-[42px] md:text-[56px] lg:text-[60px] leading-[1.1] text-[#222222] mb-8">
              Live unforgettable moments
            </h2>

            {/* Description */}
            <p className="font-body text-[16px] md:text-[18px] leading-[1.6] text-[#222222] max-w-[700px] text-balance opacity-80 mb-16">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>

            {/* Button */}
            <div className="mt-4">
              <a
                href="#"
                className="inline-block border border-[#C06B3E] px-10 py-5 font-body text-[13px] font-semibold uppercase tracking-[0.1em] text-[#C06B3E] hover:bg-[#C06B3E] hover:text-white transition-all duration-300"
              >
                Explore all experiences
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Leaf Icon (Bottom Right) */}
      <div className="absolute right-[-120px] bottom-[-50px] w-[350px] h-[350px] opacity-10 pointer-events-none z-0">
        <img 
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/892bb068-b17a-42a0-a26a-9e038bc43081-asanaresort-webflow-io/assets/svgs/60a2ee8e0d09126e006b645d_leaf-right-11.svg" 
          alt="" 
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default DiningMoments;