"use client";

import Link from "next/link";
import { ArrowRight, Factory, Leaf, Award } from "lucide-react";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const wordVariant = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease },
  },
};

const STATS = [
  { num: "300+", label: "TPD Solvent Extraction", icon: Factory },
  { num: "150+", label: "TPD Physical Refinery",  icon: Leaf   },
  { num: "30+",  label: "Years Manufacturing",   icon: Award  },
];

export default function HeroSection() {
  return (
    <section className="hero-home" id="hero">
      <div className="hero-bg" />

      <div className="hero-content">

        {/* Title */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          style={{ margin: "24px 0" }}
        >
          <motion.div variants={wordVariant}>
            <h1 className="hero-title" style={{ margin: 0 }}>
              Rooted in Quality, Driven by Innovation
            </h1>
          </motion.div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.4 }}
        >
          A fully integrated rice bran processing facility delivering consistent,
          high-grade products to households and industries at scale.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.6 }}
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
            show: { transition: { staggerChildren: 0.12, delayChildren: 0.8 } },
          }}
          style={{ marginTop: "52px" }}
        >
          {STATS.map(({ num, label, icon: Icon }) => (
            <motion.div
              key={label}
              className="hero-stat-card"
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
              }}
            >
              <Icon size={16} className="hero-stat-icon" />
              <div className="hero-stat-num">{num}</div>
              <div className="hero-stat-label">{label}</div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
