"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, Phone, Mail } from "lucide-react";

const navLinks = [
  { name: "Rooms & Suites", href: "/rooms" },
  { name: "Spa & Wellness", href: "/spa" },
  { name: "Dining", href: "/restaurant" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

const languages = [
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
  { code: "fr", name: "Français" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg h-[70px]"
          : "bg-transparent h-[90px]"
          }`}
      >
        <div className="container h-full flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 -ml-2"
            aria-label="Open menu"
          >
            <Menu
              size={24}
              className={`transition-colors ${isScrolled ? "text-primary" : "text-white"
                }`}
            />
          </button>

          {/* Logo */}
          <Link
            href="/"
            className="flex flex-col items-center justify-center transition-all duration-300 hover:opacity-80 group"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/892bb068-b17a-42a0-a26a-9e038bc43081-asanaresort-webflow-io/assets/svgs/60a3a841876ca36a9eb7a98e_picto-1.svg"
                alt="Asana Logo Icon"
                className={`w-[32px] h-auto mb-1 transition-all duration-300 group-hover:scale-110 ${isScrolled ? "" : "invert brightness-0"
                  }`}
                style={{
                  filter: isScrolled ? "brightness(0)" : "brightness(0) invert(1)",
                }}
              />
            </motion.div>
            <img
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/892bb068-b17a-42a0-a26a-9e038bc43081-asanaresort-webflow-io/assets/svgs/60a3a859f2f31f215f9a4638_logo-2.svg"
              alt="Asana Resort"
              className="w-[100px] h-auto transition-all duration-300"
              style={{
                filter: isScrolled ? "brightness(0)" : "brightness(0) invert(1)",
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Link
                  href={link.href}
                  className={`nav-link ${isScrolled ? "text-primary" : "text-white"
                    }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* Language Switcher - Desktop Only */}
            <div className="relative hidden md:block">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className={`flex items-center gap-1.5 text-[13px] font-medium tracking-[0.05em] uppercase transition-colors ${isScrolled ? "text-primary" : "text-white"
                  } hover:opacity-70`}
              >
                {currentLang.toUpperCase()}
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${langOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-3 bg-white shadow-xl border border-border min-w-[140px] py-2 rounded-sm overflow-hidden"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setCurrentLang(lang.code);
                          setLangOpen(false);
                        }}
                        className={`w-full px-4 py-2.5 text-left text-[13px] transition-colors hover:bg-muted ${currentLang === lang.code
                          ? "text-secondary font-medium"
                          : "text-foreground"
                          }`}
                      >
                        {lang.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Book Now Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                href="/booking"
                className={`relative overflow-hidden px-6 md:px-8 py-3 md:py-3.5 text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.12em] border transition-all duration-400 group ${isScrolled
                  ? "bg-secondary border-secondary text-white hover:bg-secondary-dark"
                  : "bg-transparent border-white/50 text-white hover:bg-white hover:text-primary hover:border-white"
                  }`}
              >
                <span className="relative z-10">Book Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[150] lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[85%] max-w-[400px] bg-background z-[200] lg:hidden overflow-y-auto"
            >
              <div className="flex flex-col min-h-full">
                {/* Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-border">
                  <Link
                    href="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex flex-col items-center"
                  >
                    <img
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/892bb068-b17a-42a0-a26a-9e038bc43081-asanaresort-webflow-io/assets/svgs/60a3a841876ca36a9eb7a98e_picto-1.svg"
                      alt="Asana"
                      className="w-[28px] h-auto mb-1"
                    />
                    <img
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/892bb068-b17a-42a0-a26a-9e038bc43081-asanaresort-webflow-io/assets/svgs/60a3a859f2f31f215f9a4638_logo-2.svg"
                      alt="Asana Resort"
                      className="w-[90px] h-auto"
                    />
                  </Link>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 hover:bg-muted rounded-sm transition-colors"
                    aria-label="Close menu"
                  >
                    <X size={24} className="text-foreground" />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 p-6">
                  <ul className="space-y-1">
                    {navLinks.map((link, index) => (
                      <motion.li
                        key={link.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-4 text-[18px] font-display font-medium text-foreground hover:text-secondary transition-colors border-b border-border/50"
                        >
                          {link.name}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Book Now Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-8"
                  >
                    <Link
                      href="/booking"
                      onClick={() => setMobileMenuOpen(false)}
                      className="btn-primary block text-center w-full"
                    >
                      Book Your Stay
                    </Link>
                  </motion.div>
                </nav>

                {/* Contact Info */}
                <div className="p-6 bg-subtle border-t border-border">
                  <div className="space-y-4">
                    <a
                      href="tel:+6256418120"
                      className="flex items-center gap-3 text-[14px] text-muted-foreground hover:text-secondary transition-colors"
                    >
                      <Phone size={16} />
                      +62 5641 8120
                    </a>
                    <a
                      href="mailto:reservations@asanaresort.com"
                      className="flex items-center gap-3 text-[14px] text-muted-foreground hover:text-secondary transition-colors"
                    >
                      <Mail size={16} />
                      reservations@asanaresort.com
                    </a>
                  </div>

                  {/* Language Selector */}
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground mb-3">
                      Language
                    </p>
                    <div className="flex gap-3">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => setCurrentLang(lang.code)}
                          className={`px-3 py-1.5 text-[12px] font-medium rounded-sm transition-colors ${currentLang === lang.code
                            ? "bg-secondary text-white"
                            : "bg-muted text-foreground hover:bg-border"
                            }`}
                        >
                          {lang.code.toUpperCase()}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;