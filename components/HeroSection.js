"use client";

import Link from "next/link";
import { ArrowRight, Factory, Leaf, Award } from "lucide-react";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];

// Stagger children container
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

// Each animated word/line — blur + slide up
const wordVariant = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease },
  },
};

const STATS = [
  { num: "300+", label: "TPD Extraction", icon: Factory },
  { num: "150+", label: "TPD Refinery",   icon: Leaf   },
  { num: "30+",  label: "Years Legacy",   icon: Award  },
];

export default function HeroSection() {
  return (
    <section className="hero-home" id="hero">
      {/* Background image */}
      <div className="hero-bg" />

      {/* Radial gold glow */}
      <div className="hero-glow" />

      <div className="hero-content">

        {/* Animated eyebrow badge pill */}
        <motion.div
          className="hero-badge-pill"
          initial={{ opacity: 0, scale: 0.85, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
        >
          <span className="hero-badge-dot" />
          Since 1994 · Eastern India&apos;s Finest
        </motion.div>

        {/* Title with staggered word blur-in */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          style={{ margin: "28px 0 24px" }}
        >
          <motion.div variants={wordVariant}>
            <h1 className="hero-title" style={{ margin: 0 }}>
              Rooted in Quality,
            </h1>
          </motion.div>
          <motion.div variants={wordVariant}>
            <h1 className="hero-title" style={{ margin: 0 }}>
              <em>Driven by Innovation</em>
            </h1>
          </motion.div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.7 }}
        >
          A fully integrated rice bran processing facility delivering consistent,
          high-grade products to households and industries at scale.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.9 }}
        >
          <Link
            href="/products"
            className="btn-primary"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
          >
            Explore Products <ArrowRight size={16} />
          </Link>
          <Link
            href="/about"
            className="btn-ghost"
            style={{ borderColor: "rgba(255,255,255,0.3)", color: "var(--white)" }}
          >
            Our Story
          </Link>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="hero-stats-row"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12, delayChildren: 1.1 } },
          }}
          style={{ marginTop: "52px" }}
        >
          {STATS.map(({ num, label, icon: Icon }) => (
            <motion.div
              key={label}
              className="hero-stat-card"
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
              }}
            >
              <Icon size={16} className="hero-stat-icon" />
              <div className="hero-stat-num">{num}</div>
              <div className="hero-stat-label">{label}</div>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
      >
        <div className="scroll-line" />
        <span>Scroll</span>
      </motion.div>
    </section>
  );
}
