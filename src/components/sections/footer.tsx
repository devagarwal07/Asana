"use client";

import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#F1EFE9] pt-[80px] pb-[80px] px-8 md:px-12 lg:px-20 border-t border-[#D6D2C4]">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-12 lg:gap-x-8">
        
        {/* Left Section: Address, Contact, Socials */}
        <div className="lg:col-span-6 space-y-10">
          {/* Address */}
          <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-12">
            <h4 className="text-[12px] font-medium uppercase tracking-[0.15em] text-[#222222] min-w-[100px]">
              Address
            </h4>
            <div className="text-[16px] leading-[1.6] text-[#222222] font-body">
              <p>Lorem Ipsum Dolor Sit</p>
              <p>Amet, 1234 45 Elit</p>
              <a 
                href="#" 
                className="text-[#C06B3E] hover:opacity-70 transition-opacity mt-1 inline-block font-medium"
              >
                How to get there
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-12">
            <h4 className="text-[12px] font-medium uppercase tracking-[0.15em] text-[#222222] min-w-[100px]">
              Contact
            </h4>
            <div className="text-[16px] leading-[1.6] text-[#222222] font-body">
              <a href="tel:+6256418120" className="block hover:text-[#C06B3E] transition-colors">
                +62 5641 8120
              </a>
              <a href="mailto:reservations@asanaresort.com" className="block hover:text-[#C06B3E] transition-colors">
                reservations@asanaresort.com
              </a>
            </div>
          </div>

          {/* Follow Us */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-y-4 md:gap-x-12">
            <h4 className="text-[12px] font-medium uppercase tracking-[0.15em] text-[#222222] min-w-[100px]">
              Follow Us
            </h4>
            <div className="flex gap-x-4">
              <a href="#" className="flex items-center justify-center text-[#C06B3E] hover:opacity-70 transition-opacity">
                <Facebook size={20} fill="currentColor" strokeWidth={0} />
              </a>
              <a href="#" className="flex items-center justify-center text-[#C06B3E] hover:opacity-70 transition-opacity">
                <Instagram size={20} strokeWidth={2} />
              </a>
              <a href="#" className="flex items-center justify-center text-[#C06B3E] hover:opacity-70 transition-opacity">
                <Twitter size={20} fill="currentColor" strokeWidth={0} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Section: Sitemap Links */}
        <div className="lg:col-span-3">
          <ul className="space-y-3">
            <li>
              <a href="/rooms" className="text-[16px] text-[#C06B3E] hover:opacity-70 transition-opacity font-body">Rooms</a>
            </li>
            <li>
              <a href="/spa" className="text-[16px] text-[#C06B3E] hover:opacity-70 transition-opacity font-body">Spa</a>
            </li>
            <li>
              <a href="/restaurant" className="text-[16px] text-[#C06B3E] hover:opacity-70 transition-opacity font-body">Restaurant</a>
            </li>
            <li>
              <a href="/activities" className="text-[16px] text-[#C06B3E] hover:opacity-70 transition-opacity font-body">Activities</a>
            </li>
            <li>
              <a href="/events" className="text-[16px] text-[#C06B3E] hover:opacity-70 transition-opacity font-body">Events</a>
            </li>
            <li>
              <a href="/about" className="text-[16px] text-[#C06B3E] hover:opacity-70 transition-opacity font-body">About us</a>
            </li>
            <li>
              <a href="/contact" className="text-[16px] text-[#C06B3E] hover:opacity-70 transition-opacity font-body">Contact</a>
            </li>
          </ul>
        </div>

        {/* Legal/Extra Links */}
        <div className="lg:col-span-3">
          <ul className="space-y-3">
            <li>
              <a href="/newsletter" className="text-[16px] text-[#C06B3E] hover:opacity-70 transition-opacity font-body">Newsletter</a>
            </li>
            <li>
              <a href="/press" className="text-[16px] text-[#C06B3E] hover:opacity-70 transition-opacity font-body">Press</a>
            </li>
            <li>
              <a href="/careers" className="text-[16px] text-[#C06B3E] hover:opacity-70 transition-opacity font-body">Careers</a>
            </li>
            <li>
              <a href="/sanitary" className="text-[16px] text-[#C06B3E] hover:opacity-70 transition-opacity font-body">Sanitary Measures</a>
            </li>
            <li>
              <a href="/legal" className="text-[16px] text-[#C06B3E] hover:opacity-70 transition-opacity font-body">Legal Notice</a>
            </li>
            <li>
              <a href="/privacy" className="text-[16px] text-[#C06B3E] hover:opacity-70 transition-opacity font-body">Privacy Policy</a>
            </li>
            <li>
              <a href="/cookies" className="text-[16px] text-[#C06B3E] hover:opacity-70 transition-opacity font-body">Cookies Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;