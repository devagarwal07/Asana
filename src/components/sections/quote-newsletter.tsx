"use client";

import React from 'react';

/**
 * QuoteNewsletter Section
 * 
 * Features a large emotional brand quote in a serif font on the primary beige background,
 * followed by a full-width deep green newsletter subscription section with underline 
 * input fields and a centered "SUBSCRIBE" button.
 */

const QuoteNewsletter = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Brand Quote Section */}
      <section className="bg-[#F1EFE9] section-padding px-8 md:px-0 relative overflow-hidden">
        {/* Decorative leaf art (placeholder for the stroke-based SVG mentioned in design) */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
          <svg width="400" height="400" viewBox="0 0 100 100" fill="none" stroke="#222222" strokeWidth="0.5">
            <path d="M10,50 Q30,10 50,50 T90,50" />
            <path d="M50,10 Q60,30 50,50 T50,90" />
          </svg>
        </div>

        <div className="container mx-auto flex flex-col items-center text-center">
          <div className="max-w-[700px]">
            <h2 className="font-display text-[32px] md:text-[42px] leading-[1.3] text-[#222222] italic mb-8 text-balance">
              &ldquo;Travel opens your heart, broadens your mind and fills your life with stories to tell.&rdquo;
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-[1px] w-12 bg-[#C06B3E]"></div>
              <span className="font-body text-[14px] tracking-[0.1em] text-[#737373] uppercase">
                Paula Bendfeldt
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-[#2A4434] py-[100px] px-8 md:px-0">
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center text-white mb-12">
            <h2 className="font-display text-[36px] md:text-[48px] mb-4">
              Receive News and Special Offers
            </h2>
            <p className="font-body text-[16px] text-white/70 max-w-[500px]">
              Sign up to our newsletter to lorem ipsum dolor sit amet!
            </p>
          </div>

          <form 
            className="max-w-[800px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_1fr_auto] gap-8 md:gap-12 items-end"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="relative w-full">
              <input 
                type="text" 
                placeholder="Your name"
                className="newsletter-input font-body text-[15px] placeholder:text-white/40"
              />
            </div>
            <div className="relative w-full">
              <input 
                type="email" 
                placeholder="Your email"
                className="newsletter-input font-body text-[15px] placeholder:text-white/40"
              />
            </div>
            <button 
              type="submit"
              className="bg-white text-[#2A4434] font-body text-[13px] font-semibold tracking-[0.15em] uppercase px-10 py-4 hover:bg-[#F1EFE9] transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default QuoteNewsletter;