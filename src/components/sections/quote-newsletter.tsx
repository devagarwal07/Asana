"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Star } from "lucide-react";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportSettings,
} from "@/lib/animations";

const testimonials = [
  {
    quote: "An absolutely magical experience. Every detail was perfect.",
    author: "Sarah M.",
    location: "New York, USA",
    rating: 5,
  },
  {
    quote: "The spa treatments changed my life. Pure bliss.",
    author: "James L.",
    location: "London, UK",
    rating: 5,
  },
];

const QuoteNewsletter = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
      setName("");
    }, 3000);
  };

  return (
    <div className="relative z-10">
      {/* Quote Section */}
      <section className="bg-background section-padding-sm relative overflow-hidden">
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #1E3A2F 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="container relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="max-w-[800px] mx-auto text-center"
          >
            {/* Main Quote */}
            <motion.div variants={staggerItem} className="mb-12">
              <div className="text-secondary text-[60px] leading-none font-display mb-4">
                "
              </div>
              <blockquote className="text-[28px] md:text-[36px] font-display italic text-foreground leading-[1.4] mb-8">
                Travel opens your heart, broadens your mind and fills your life
                with stories to tell.
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-[1px] bg-secondary" />
                <span className="text-[13px] uppercase tracking-[0.15em] text-muted-foreground">
                  Paula Bendfeldt
                </span>
                <div className="w-12 h-[1px] bg-secondary" />
              </div>
            </motion.div>

            {/* Guest Testimonials */}
            <motion.div
              variants={staggerItem}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="p-6 bg-subtle text-left hover:bg-white hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className="text-accent fill-accent"
                      />
                    ))}
                  </div>
                  <p className="text-[15px] text-foreground italic mb-4">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <div className="text-[13px] font-medium text-foreground">
                      {testimonial.author}
                    </div>
                    <div className="text-[12px] text-muted-foreground">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-primary py-20 md:py-28 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2V36h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2V36h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="max-w-[800px] mx-auto"
          >
            <motion.div
              variants={staggerItem}
              className="text-center text-white mb-10"
            >
              <h2 className="text-white mb-4">
                Stay Inspired
              </h2>
              <p className="text-white/70 text-[16px] max-w-[500px] mx-auto">
                Subscribe for exclusive offers, wellness tips, and stories from
                the heart of Vietnam.
              </p>
            </motion.div>

            <motion.form
              variants={staggerItem}
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-[1fr_1fr_auto] gap-6 items-end"
            >
              <div className="relative">
                <label className="block text-[11px] font-medium uppercase tracking-wider text-white/50 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="newsletter-input"
                  required
                />
              </div>

              <div className="relative">
                <label className="block text-[11px] font-medium uppercase tracking-wider text-white/50 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="newsletter-input"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className={`flex items-center justify-center gap-2 px-8 py-4 font-semibold text-[12px] uppercase tracking-[0.15em] transition-all duration-300 ${submitted
                    ? "bg-accent text-foreground"
                    : "bg-white text-primary hover:bg-background"
                  }`}
              >
                {submitted ? (
                  <>
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="text-secondary"
                    >
                      ✓
                    </motion.span>
                    Subscribed!
                  </>
                ) : (
                  <>
                    Subscribe
                    <Send size={14} />
                  </>
                )}
              </button>
            </motion.form>

            <motion.p
              variants={staggerItem}
              className="text-center text-white/40 text-[12px] mt-6"
            >
              By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default QuoteNewsletter;