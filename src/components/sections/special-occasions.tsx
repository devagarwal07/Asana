"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const SpecialOccasions = () => {
  const eventTypes = [
    "Wedding and Honeymoon",
    "Private Events",
    "Photoshoots"
  ];

  const mainImage = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/892bb068-b17a-42a0-a26a-9e038bc43081-asanaresort-webflow-io/assets/images/60ba18cf58b7206b0a233bef_alexander-kaunas-TAgGZWz6-10.jpg";

    return (
      <section className="relative z-10 bg-[#F1EFE9] section-padding overflow-hidden shadow-[0_-50px_100px_rgba(0,0,0,0.05)]">
      {/* Decorative leaf icon */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 0.1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="absolute left-[-100px] bottom-[10%] pointer-events-none"
      >
        <svg width="400" height="400" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M250 50C250 50 200 150 100 200C0 250 100 350 250 450C400 350 500 250 400 200C300 150 250 50 250 50Z" stroke="#2A4434" strokeWidth="1" />
          <path d="M250 50V450" stroke="#2A4434" strokeWidth="1" opacity="0.3" />
        </svg>
      </motion.div>

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-[60px] lg:gap-[100px]">
          
          {/* Left Side: Image Content */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-full max-w-[580px] aspect-[4/5] lg:aspect-[3/4] floating-shadow"
            >
              <Image
                src={mainImage}
                alt="Couple on an outdoor bed overlooking a forest"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </motion.div>
          </div>

          {/* Right Side: Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
            <div className="mb-6">
              <motion.h4 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="label-caps mb-2" 
                style={{ color: '#C06B3E', fontSize: '12px', fontWeight: 500, letterSpacing: '0.15em', fontFamily: 'var(--font-body)' }}
              >
                WEDDINGS & OTHER EVENTS
              </motion.h4>
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-[48px] lg:text-[60px] leading-[1.1] mb-6 font-display text-[#222222]"
              >
                Special Occasions
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-[16px] leading-[1.6] text-[#222222] max-w-[480px] mb-8 font-body opacity-80"
              >
                Celebrate your most important life moments at Asana. From intimate weddings to creative photoshoots, our unique architecture and natural surroundings provide the perfect backdrop.
              </motion.p>
            </div>

            {/* Event Type List */}
            <ul className="space-y-4 mb-10 w-full">
              {eventTypes.map((event, index) => (
                <motion.li 
                  key={index} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.15 }}
                  className="text-[16px] font-body text-[#222222] italic flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-[#C06B3E] rounded-full mr-3 inline-block"></span>
                  {event}
                </motion.li>
              ))}
            </ul>

            {/* Action Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <a 
                href="/events" 
                className="btn-outline inline-block text-center min-w-[200px]"
                style={{
                  border: '1px solid #C06B3E',
                  color: '#C06B3E',
                  padding: '16px 30px',
                  fontSize: '13px',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontFamily: 'var(--font-body)',
                  transition: 'all 0.3s ease'
                }}
              >
                DISCOVER EVENTS
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SpecialOccasions;