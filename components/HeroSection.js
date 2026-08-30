"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ease = [0.16, 1, 0.3, 1];

export default function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0px", "-40px"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section className="hero-home" id="hero" ref={containerRef}>
      {/* Full-width Factory Entrance Parallax Background Image */}
      <motion.div 
        className="hero-bg" 
        style={{ 
          backgroundImage: "url('/ab_udyog_kolkata_factory_refinery_entrance.png')",
          y: bgY 
        }} 
      />
      
      {/* Soft Left-side Gradient Scrim Overlay */}
      <div className="hero-overlay" />

      <div className="hero-container">
        {/* Left-aligned Text Block with Seamless Glassmorphic Scrim */}
        <motion.div 
          className="hero-text-block"
          style={{ y: textY, opacity: textOpacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
          >
            <h1 className="hero-title">
              Eastern India&apos;s Premier Agro-Refinery<br />
              <span className="hero-title-accent">&amp; Bio-Derivatives Facility</span>
            </h1>
          </motion.div>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.2 }}
          >
            For over four decades, AB Udyog Pvt. Ltd. has processed fresh rice bran into chemical-free edible oils and high-purity industrial bio-derivatives at scale.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.35 }}
          >
            <Link href="/products" className="btn-hero-primary">
              Explore Product Lines <ArrowRight size={15} aria-hidden="true" />
            </Link>
            <Link href="/about" className="btn-hero-ghost">
              Our Corporate Story
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
