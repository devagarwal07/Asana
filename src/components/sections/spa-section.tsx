"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const SpaSection = () => {
  return (
    <section className="width-full">
      {/* Absolute Full Width Atmospheric Image Section */}
      <div className="relative w-full h-[600px] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative w-full h-full"
        >
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/892bb068-b17a-42a0-a26a-9e038bc43081-asanaresort-webflow-io/assets/images/60a29e45502fac6091e9e964_spa-homepage-14.jpg"
            alt="Candlelit walkway bridge at night"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>

      {/* Spa Content Section */}
      <div className="bg-[#F1EFE9] pt-[120px] pb-[120px] relative">
        {/* Decorative Leaf Element - Left */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 0.4, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="absolute left-0 top-[80px] w-[300px] h-[400px] pointer-events-none"
        >
          <img 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/892bb068-b17a-42a0-a26a-9e038bc43081-asanaresort-webflow-io/assets/svgs/60a2ee8de2fd090a74cd0b8c_leaf-left-10.svg" 
            alt="" 
            className="w-full h-full object-contain object-left"
          />
        </motion.div>

        <div className="container mx-auto max-w-[1280px] px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-start">
            
            {/* Left Column: Image Collage */}
            <div className="relative flex flex-col pt-12">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-10 w-[80%] aspect-[4/5]"
              >
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/892bb068-b17a-42a0-a26a-9e038bc43081-asanaresort-webflow-io/assets/images/60a3f9afeccb4fc6058b4ad2_pexels-cottonbro-3997982-11.jpg"
                  alt="Spa oils and lavender"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                className="absolute right-0 bottom-[-40px] z-20 w-[55%] aspect-square floating-shadow"
              >
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/892bb068-b17a-42a0-a26a-9e038bc43081-asanaresort-webflow-io/assets/images/60afe1dd3e74910883265b75_pexels-gustavo-fring-4172-26.jpg"
                  alt="Facial massage treatment"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>

            {/* Right Column: Text Content */}
            <div className="flex flex-col justify-center lg:pt-12">
              <div className="mb-6">
                <motion.h4 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="label-caps mb-4 text-[12px] font-medium tracking-[0.15em] text-[#C06B3E] uppercase font-body"
                >
                  Relax to the sound of the waterfall
                </motion.h4>
                <motion.h2 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-[48px] md:text-[60px] leading-[1.1] font-display text-[#222222] mb-8 font-normal"
                >
                  Waterfall Garden Spa
                </motion.h2>
              </div>

              <div className="space-y-6">
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="font-body text-[16px] leading-[1.6] text-[#222222] opacity-80 max-w-[540px]"
                >
                  Experience the ultimate serenity in our Waterfall Garden Spa. Surrounded by lush vegetation and the gentle murmur of falling water, our treatments are designed to restore balance and harmony.
                </motion.p>
                
                <motion.ul 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="space-y-3 pt-4"
                >
                  {[
                    "Aromatherapy Facial Treatments",
                    "Body Envelopment Therapies",
                    "Couple Spa Experience",
                    "Relaxing Massages",
                    "Sauna and Steam Room",
                    "..& much more!"
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 0.9, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                      className="font-body text-[15px] text-[#222222]"
                    >
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="pt-8"
                >
                  <a 
                    href="/spa" 
                    className="inline-block border border-[#C06B3E] px-[30px] py-[15px] font-body text-[13px] font-semibold tracking-[0.1em] text-[#C06B3E] uppercase hover:bg-[#C06B3E] hover:text-white transition-all duration-300"
                  >
                    Discover Spa
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpaSection;