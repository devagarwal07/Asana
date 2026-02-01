"use client";

import React from 'react';
import Image from 'next/image';

const SpaSection = () => {
  return (
    <section className="width-full">
      {/* Absolute Full Width Atmospheric Image Section */}
      <div className="relative w-full h-[600px] overflow-hidden">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/892bb068-b17a-42a0-a26a-9e038bc43081-asanaresort-webflow-io/assets/images/60a29e45502fac6091e9e964_spa-homepage-14.jpg"
          alt="Candlelit walkway bridge at night"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Spa Content Section */}
      <div className="bg-[#F1EFE9] pt-[120px] pb-[120px] relative">
        {/* Decorative Leaf Element - Left */}
        <div className="absolute left-0 top-[80px] w-[300px] h-[400px] pointer-events-none opacity-40">
          <img 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/892bb068-b17a-42a0-a26a-9e038bc43081-asanaresort-webflow-io/assets/svgs/60a2ee8de2fd090a74cd0b8c_leaf-left-10.svg" 
            alt="" 
            className="w-full h-full object-contain object-left"
          />
        </div>

        <div className="container mx-auto max-w-[1280px] px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-start">
            
            {/* Left Column: Image Collage */}
            <div className="relative flex flex-col pt-12">
              <div className="relative z-10 w-[80%] aspect-[4/5]">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/892bb068-b17a-42a0-a26a-9e038bc43081-asanaresort-webflow-io/assets/images/60a3f9afeccb4fc6058b4ad2_pexels-cottonbro-3997982-11.jpg"
                  alt="Spa oils and lavender"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute right-0 bottom-[-40px] z-20 w-[55%] aspect-square floating-shadow">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/892bb068-b17a-42a0-a26a-9e038bc43081-asanaresort-webflow-io/assets/images/60afe1dd3e74910883265b75_pexels-gustavo-fring-4172-26.jpg"
                  alt="Facial massage treatment"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Column: Text Content */}
            <div className="flex flex-col justify-center lg:pt-12">
              <div className="mb-6">
                <h4 className="label-caps mb-4 text-[12px] font-medium tracking-[0.15em] text-[#C06B3E] uppercase font-body">
                  Relax to the sound of the waterfall
                </h4>
                <h2 className="text-[48px] md:text-[60px] leading-[1.1] font-display text-[#222222] mb-8 font-normal">
                  Waterfall Garden Spa
                </h2>
              </div>

              <div className="space-y-6">
                <p className="font-body text-[16px] leading-[1.6] text-[#222222] opacity-80 max-w-[540px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                
                <ul className="space-y-3 pt-4">
                  {[
                    "Aromatherapy Facial Treatments",
                    "Body Envelopment Therapies",
                    "Couple Spa Experience",
                    "Relaxing Massages",
                    "Sauna and Steam Room",
                    "..& much more!"
                  ].map((item, index) => (
                    <li key={index} className="font-body text-[15px] text-[#222222] opacity-90">
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="pt-8">
                  <a 
                    href="/spa" 
                    className="inline-block border border-[#C06B3E] px-[30px] py-[15px] font-body text-[13px] font-semibold tracking-[0.1em] text-[#C06B3E] uppercase hover:bg-[#C06B3E] hover:text-white transition-all duration-300"
                  >
                    Discover Spa
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpaSection;