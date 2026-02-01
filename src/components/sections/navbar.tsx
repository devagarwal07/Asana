"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[99] transition-all duration-300 ${
        isScrolled ? "bg-[#F1EFE9] shadow-sm h-[70px]" : "bg-transparent h-[80px]"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-8 h-full flex items-center justify-between">
        {/* Mobile Menu Button - Hidden on Desktop */}
        <div className="lg:hidden flex flex-col gap-1.5 cursor-pointer">
          <div className={`h-0.5 w-6 ${isScrolled ? "bg-primary" : "bg-white"}`}></div>
          <div className={`h-0.5 w-6 ${isScrolled ? "bg-primary" : "bg-white"}`}></div>
        </div>

        {/* Logo Section */}
        <a href="/" className="flex flex-col items-center justify-center transition-opacity hover:opacity-80">
          <img
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/892bb068-b17a-42a0-a26a-9e038bc43081-asanaresort-webflow-io/assets/svgs/60a3a841876ca36a9eb7a98e_picto-1.svg"
            alt="Asana Picto"
            className="w-[36px] h-auto mb-1"
            style={{ 
              filter: isScrolled ? "none" : "brightness(0) invert(1)" 
            }}
          />
          <img
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/892bb068-b17a-42a0-a26a-9e038bc43081-asanaresort-webflow-io/assets/svgs/60a3a859f2f31f215f9a4638_logo-2.svg"
            alt="Asana"
            className="w-[110px] h-auto"
            style={{ 
              filter: isScrolled ? "none" : "brightness(0) invert(1)" 
            }}
          />
        </a>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          <a
            href="/accommodations"
            className={`nav-link text-[14px] font-medium tracking-[0.05em] transition-colors ${
              isScrolled ? "text-primary" : "text-white"
            } hover:opacity-70`}
          >
            Rooms & Suites
          </a>
          <a
            href="/spa"
            className={`nav-link text-[14px] font-medium tracking-[0.05em] transition-colors ${
              isScrolled ? "text-primary" : "text-white"
            } hover:opacity-70`}
          >
            Spa
          </a>
          <a
            href="/restaurant"
            className={`nav-link text-[14px] font-medium tracking-[0.05em] transition-colors ${
              isScrolled ? "text-primary" : "text-white"
            } hover:opacity-70`}
          >
            Restaurant
          </a>
          <a
            href="/contact"
            className={`nav-link text-[14px] font-medium tracking-[0.05em] transition-colors ${
              isScrolled ? "text-primary" : "text-white"
            } hover:opacity-70`}
          >
            Contact
          </a>
        </div>

        {/* Right Section: Language Switcher & CTA */}
        <div className="flex items-center gap-6">
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className={`flex items-center gap-1.5 text-[14px] font-medium tracking-[0.05em] transition-colors uppercase ${
                isScrolled ? "text-primary" : "text-white"
              } hover:opacity-70 cursor-pointer`}
            >
              En
              <ChevronDown size={14} className={`transition-transform ${langOpen ? "rotate-180" : ""}`} />
            </button>
            
            {langOpen && (
              <div className="absolute top-full right-0 mt-4 bg-white shadow-lg border border-border min-w-[80px] py-2 flex flex-col">
                <a href="#" className="px-4 py-2 hover:bg-muted text-[13px] text-primary transition-colors">Esp</a>
                <a href="#" className="px-4 py-2 hover:bg-muted text-[13px] text-primary transition-colors">Fr</a>
              </div>
            )}
          </div>

          <a
            href="#"
            className={`px-[30px] py-[12px] text-[13px] font-semibold uppercase tracking-[0.1em] border transition-all duration-300 ${
              isScrolled
                ? "bg-secondary border-secondary text-white hover:opacity-90"
                : "bg-transparent border-white/40 text-white hover:bg-white hover:text-primary hover:border-white"
            }`}
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;