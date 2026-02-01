"use client";

import React from 'react';
import Image from 'next/image';

const rooms = [
  {
    type: 'ROOM',
    name: 'Standard Double',
    price: '200',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/892bb068-b17a-42a0-a26a-9e038bc43081-asanaresort-webflow-io/assets/images/60ba1b7d68141981e7d998a7_vojtech-bruzek-Yrxr3bsPdS-3.jpg',
    guests: '2 persons',
    bed: '1 Double',
  },
  {
    type: 'ROOM',
    name: 'Premium Double',
    price: '250',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/892bb068-b17a-42a0-a26a-9e038bc43081-asanaresort-webflow-io/assets/images/60a7936d2e4466d293bc4354_visualsofdana-T5pL6ciEn-I-4.jpg',
    guests: '2 persons',
    bed: '1 King Size Bed',
  },
  {
    type: 'ROOM',
    name: 'Luxury Double',
    price: '400',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/892bb068-b17a-42a0-a26a-9e038bc43081-asanaresort-webflow-io/assets/images/60ba19145004ae59e197414e_5f513ec3045787e612184ab4_-5.jpg',
    guests: '2 persons',
    bed: '1 King Size Bed',
  },
];

const RoomsSuites = () => {
  return (
    <section className="bg-[#F1EFE9] py-[120px]">
      <div className="container mx-auto px-8 max-w-[1280px]">
        {/* Header */}
        <div className="mb-[60px]">
          <h4 className="label-caps mb-4 uppercase tracking-[0.15em] text-[12px] font-medium text-[#C06B3E]">
            relax Surrounded by nature
          </h4>
          <h2 className="font-display text-[48px] leading-[1.2] text-[#222222]">
            Rooms & Suites
          </h2>
        </div>

        {/* Carousel / Grid Container */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <div key={index} className="group cursor-pointer">
                {/* Image Wrapper */}
                <div className="relative overflow-hidden aspect-[4/3] mb-6">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#2A4434]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white uppercase tracking-[0.1em] text-[13px] font-semibold">
                      see details
                    </span>
                  </div>
                </div>

                {/* Room Info */}
                <div className="space-y-4">
                  <div className="label-caps text-[11px] text-[#C06B3E]">
                    {room.type}
                  </div>
                  
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-display text-[28px] text-[#222222]">
                      {room.name}
                    </h3>
                    <div className="flex items-baseline text-[#C06B3E]">
                      <span className="text-[20px] font-medium">{room.price}</span>
                      <span className="text-[20px] font-medium ml-0.5">$</span>
                      <span className="text-[14px] text-[#737373] ml-1 font-body">/night</span>
                    </div>
                  </div>

                  <div className="h-[1px] bg-[#D6D2C4] w-full mt-2 mb-4" />

                  {/* Room Details Icons */}
                  <div className="flex gap-6">
                    <div className="flex items-center gap-2">
                      <Image 
                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/892bb068-b17a-42a0-a26a-9e038bc43081-asanaresort-webflow-io/assets/svgs/60a7ddd3785110101e3ae89e_guests-6.svg" 
                        alt="guests" 
                        width={18} 
                        height={18}
                      />
                      <span className="text-[14px] text-[#222222] font-body">{room.guests}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Image 
                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/892bb068-b17a-42a0-a26a-9e038bc43081-asanaresort-webflow-io/assets/svgs/60a7ddd34856264527e2dbbe_bed-7.svg" 
                        alt="bed" 
                        width={18} 
                        height={18}
                      />
                      <span className="text-[14px] text-[#222222] font-body">{room.bed}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-3 mt-12">
            <button 
              className="w-10 h-10 rounded-full border border-[#D6D2C4] flex items-center justify-center hover:bg-[#C06B3E] hover:border-[#C06B3E] transition-colors group"
              aria-label="Previous slide"
            >
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/892bb068-b17a-42a0-a26a-9e038bc43081-asanaresort-webflow-io/assets/svgs/60a7cab7c0dd747f24bda6d8_arrow-left-8.svg" 
                alt="left arrow" 
                width={16} 
                height={16}
                className="group-hover:invert"
              />
            </button>
            <button 
              className="w-10 h-10 rounded-full bg-[#C06B3E] flex items-center justify-center hover:bg-[#A05832] transition-colors"
              aria-label="Next slide"
            >
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/892bb068-b17a-42a0-a26a-9e038bc43081-asanaresort-webflow-io/assets/svgs/60a7e3419a9e390b2e84cc56_arrow-right-9.svg" 
                alt="right arrow" 
                width={16} 
                height={16}
                className="invert"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomsSuites;