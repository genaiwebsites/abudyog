"use client";

import Link from "next/link";
import { ArrowRight, Factory, Leaf, ShieldCheck } from "lucide-react";
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

const CAPACITY_SPECS = [
  { val: "300 TPD", label: "Solvent Extraction Capacity", icon: Factory },
  { val: "150 TPD", label: "Physical Oil Refinery",      icon: Leaf    },
  { val: "10,000+ PPM", label: "Gamma Oryzanol Retention", icon: ShieldCheck },
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

        {/* Grounded Industrial Refinery Spec Bar (Space Mono) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.8 }}
          style={{
            marginTop: "56px",
            background: "rgba(18, 42, 28, 0.75)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(212, 175, 55, 0.3)",
            padding: "24px 32px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
            textAlign: "left",
          }}
        >
          {CAPACITY_SPECS.map(({ val, label, icon: Icon }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <Icon size={22} style={{ color: "var(--gold)", flexShrink: 0 }} />
              <div>
                <div
                  className="font-mono-specs"
                  style={{
                    color: "var(--gold-light)",
                    fontSize: "18px",
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                    lineHeight: 1.2,
                  }}
                >
                  {val}
                </div>
                <div
                  style={{
                    color: "rgba(255, 255, 255, 0.75)",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginTop: "4px",
                  }}
                >
                  {label}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
