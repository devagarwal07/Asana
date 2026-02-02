"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Award,
} from "lucide-react";
import {
  staggerContainer,
  staggerItem,
  viewportSettings,
} from "@/lib/animations";

const footerLinks = {
  explore: [
    { name: "Rooms & Suites", href: "/rooms" },
    { name: "Spa & Wellness", href: "/spa" },
    { name: "Restaurant", href: "/restaurant" },
    { name: "Activities", href: "/activities" },
    { name: "Gallery", href: "/gallery" },
  ],
  events: [
    { name: "Weddings", href: "/events/weddings" },
    { name: "Private Events", href: "/events" },
    { name: "Corporate Retreats", href: "/events/corporate" },
    { name: "Photoshoots", href: "/events/photoshoots" },
  ],
  info: [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/careers" },
    { name: "Press", href: "/press" },
    { name: "Sustainability", href: "/sustainability" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const awards = [
  "World Luxury Hotel Awards 2024",
  "TripAdvisor Travelers' Choice",
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-white relative overflow-hidden">
      {/* Main Footer */}
      <div className="section-padding-sm border-b border-white/10">
        <div className="container">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8"
          >
            {/* Brand Column */}
            <motion.div
              variants={staggerItem}
              className="lg:col-span-4"
            >
              <Link href="/" className="inline-block mb-6">
                <img
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/892bb068-b17a-42a0-a26a-9e038bc43081-asanaresort-webflow-io/assets/svgs/60a3a841876ca36a9eb7a98e_picto-1.svg"
                  alt="Asana"
                  className="w-[40px] h-auto mb-2 invert"
                />
                <img
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/892bb068-b17a-42a0-a26a-9e038bc43081-asanaresort-webflow-io/assets/svgs/60a3a859f2f31f215f9a4638_logo-2.svg"
                  alt="Asana Resort"
                  className="w-[120px] h-auto invert"
                />
              </Link>

              <p className="text-white/60 text-[14px] leading-relaxed mb-6 max-w-[300px]">
                A sanctuary of peace and wellness in the heart of Vietnam's lush
                green hills. Experience luxury that nurtures your soul.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-8">
                <a
                  href="tel:+6256418120"
                  className="flex items-center gap-3 text-[14px] text-white/70 hover:text-secondary transition-colors"
                >
                  <Phone size={16} className="text-secondary" />
                  +62 5641 8120
                </a>
                <a
                  href="mailto:reservations@asanaresort.com"
                  className="flex items-center gap-3 text-[14px] text-white/70 hover:text-secondary transition-colors"
                >
                  <Mail size={16} className="text-secondary" />
                  reservations@asanaresort.com
                </a>
                <div className="flex items-start gap-3 text-[14px] text-white/70">
                  <MapPin size={16} className="text-secondary flex-shrink-0 mt-0.5" />
                  <span>
                    123 Valley Road, Đà Lạt
                    <br />
                    Lâm Đồng, Vietnam
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors group"
                  >
                    <social.icon
                      size={18}
                      className="text-white/80 group-hover:text-white transition-colors"
                    />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Explore Links */}
            <motion.div variants={staggerItem} className="lg:col-span-2">
              <h4 className="text-[13px] font-semibold uppercase tracking-wider mb-6">
                Explore
              </h4>
              <ul className="space-y-3">
                {footerLinks.explore.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[14px] text-white/60 hover:text-secondary transition-colors flex items-center gap-1 group"
                    >
                      <ChevronRight
                        size={12}
                        className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all"
                      />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Events Links */}
            <motion.div variants={staggerItem} className="lg:col-span-2">
              <h4 className="text-[13px] font-semibold uppercase tracking-wider mb-6">
                Events
              </h4>
              <ul className="space-y-3">
                {footerLinks.events.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[14px] text-white/60 hover:text-secondary transition-colors flex items-center gap-1 group"
                    >
                      <ChevronRight
                        size={12}
                        className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all"
                      />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Info Links */}
            <motion.div variants={staggerItem} className="lg:col-span-2">
              <h4 className="text-[13px] font-semibold uppercase tracking-wider mb-6">
                Information
              </h4>
              <ul className="space-y-3">
                {footerLinks.info.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[14px] text-white/60 hover:text-secondary transition-colors flex items-center gap-1 group"
                    >
                      <ChevronRight
                        size={12}
                        className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all"
                      />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Book Now CTA */}
            <motion.div variants={staggerItem} className="lg:col-span-2">
              <h4 className="text-[13px] font-semibold uppercase tracking-wider mb-6">
                Book Your Stay
              </h4>
              <p className="text-[14px] text-white/60 mb-6">
                Start your journey to tranquility. Book directly for the best rates.
              </p>
              <Link
                href="/booking"
                className="btn-primary inline-block text-center w-full lg:w-auto"
              >
                Reserve Now
              </Link>

              {/* Awards */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <h5 className="text-[11px] font-medium uppercase tracking-wider text-white/40 mb-4">
                  Awards & Recognition
                </h5>
                <div className="space-y-3">
                  {awards.map((award, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-[12px] text-white/60"
                    >
                      <Award size={14} className="text-accent flex-shrink-0" />
                      {award}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-6">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[12px] text-white/40">
              © {new Date().getFullYear()} Asana Resort. All rights reserved.
            </p>
            <div className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[12px] text-white/40 hover:text-white/70 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;