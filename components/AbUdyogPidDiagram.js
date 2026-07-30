"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Droplet, Wind, Thermometer, Sparkles, Palette, Beaker, 
  FlaskConical, ShieldCheck, Eye, Gauge, Compass, Atom, 
  Filter, ChevronRight, Activity, Cpu, Layers, Info, CheckCircle2,
  Zap, Radio, Terminal, Sliders, Play, RefreshCw, BarChart2, ShieldAlert, Flame, PackageCheck
} from 'lucide-react';

export default function AbUdyogPidDiagram() {
  const [activeStep, setActiveStep] = useState(1);
  const [filterCategory, setFilterCategory] = useState('all');

  const processNodes = [
    {
      id: 1,
      number: "1",
      title: "Raw Bran Intake",
      subtitle: "Laser Scan & Thermal Stabilization",
      category: "extraction",
      temp: "Ambient",
      pressure: "1.0 atm",
      status: "ACTIVE",
      desc: "Fresh paddy rice bran is received directly from regional rice mills, quality-scanned for moisture and FFA levels, and thermally stabilized to deactivate lipase enzymes within hours of milling.",
      byproduct: null,
      telemetry: { input: "Raw Paddy Rice Bran", output: "Stabilized Rice Bran", ffa: "1.5% - 3.5%", yield: "100%", retention: "10,000+ PPM Oryzanol" }
    },
    {
      id: 2,
      number: "2",
      title: "Conditioning & Pelletizing",
      subtitle: "Direct Steam Conditioning",
      category: "extraction",
      temp: "85°C",
      pressure: "1.2 bar",
      status: "ACTIVE",
      desc: "High-pressure steam injection deactivates destructive lipase enzymes while adjusting moisture and compressing bran into porous pellets optimal for hexane solvent percolation.",
      byproduct: null,
      telemetry: { input: "Stabilized Rice Bran", output: "Porous Bran Pellets", ffa: "< 3.0%", yield: "98.5%", retention: "Enzymes Inactivated" }
    },
    {
      id: 3,
      number: "3",
      title: "Solvent Extraction",
      subtitle: "Continuous Hexane Counter-Wash",
      category: "extraction",
      temp: "60°C",
      pressure: "Vacuum 0.9 bar",
      status: "ACTIVE",
      desc: "Automated counter-current extractors continuously wash bran pellets with food-grade hexane, separating oil-rich miscella liquid from high-protein de-oiled bran solids.",
      byproduct: { 
        name: "AB DORB (De-Oiled Rice Bran)", 
        link: "/products/de-oiled-rice-bran", 
        sector: "Aquaculture & Poultry Feed", 
        spec: "Protein: 15% - 17%", 
        desc: "High-protein, low-fat meal processed into premium feed for cattle, poultry, and aquaculture exports." 
      },
      telemetry: { input: "Bran Pellets + Hexane", output: "Miscella & DORB Meal", ffa: "< 3.0%", yield: "83% DORB / 17% Crude RBO", retention: "Max Oil Yield" }
    },
    {
      id: 4,
      number: "4",
      title: "Desolventization & Recovery",
      subtitle: "Miscella Evaporation & Hexane Loop",
      category: "extraction",
      temp: "105°C",
      pressure: "700 mmHg",
      status: "ACTIVE",
      desc: "Hexane solvent is completely evaporated from miscella and de-oiled meal through multi-stage vacuum evaporators and steam stripping, recycling 99.8% of solvent back into extraction.",
      byproduct: { 
        name: "AB DORB Feed Meal", 
        link: "/products/de-oiled-rice-bran", 
        sector: "Cattle & Livestock Feed", 
        spec: "Moisture: < 10%", 
        desc: "Bulk commercial feed grade DORB optimized for ruminant digestion, fiber nutrition, and livestock feed formulations." 
      },
      telemetry: { input: "Miscella", output: "Crude Rice Bran Oil", ffa: "< 3.0%", recovery: "99.8% Hexane Recycled", retention: "Zero Solvent Trace" }
    },
    {
      id: 5,
      number: "5",
      title: "Enzymatic Degumming",
      subtitle: "Phospholipid Hydration Reactor",
      category: "refining",
      temp: "55°C",
      pressure: "Atmospheric",
      status: "ACTIVE",
      desc: "Natural phospholipase enzymes selectively hydratize non-hydratable gums and heavy phospholipids without chemical caustic soda washes, protecting delicate antioxidant structures.",
      byproduct: { 
        name: "Rice Bran Gums & Lecithin", 
        link: "/products/rice-bran-gums", 
        sector: "Food, Bakery & Pharma", 
        spec: "Phosphorus: < 10 PPM", 
        desc: "Natural phospholipid emulsifier extracted without harsh chemicals, widely used in chocolates, bakery, and pharmaceuticals." 
      },
      telemetry: { input: "Crude RBO + Enzymes", output: "Degummed Crude Oil", phosphorus: "< 10 PPM", byproductYield: "2.5% Gums", retention: "Intact Tocopherols" }
    },
    {
      id: 6,
      number: "6",
      title: "Bleaching & Vacuum Filtration",
      subtitle: "Adsorptive Clay Purification",
      category: "refining",
      temp: "90°C",
      pressure: "650 mmHg Vacuum",
      status: "ACTIVE",
      desc: "Activated bleaching earth adsorbs pigments, trace metals, oxidation products, and chlorophyll under high vacuum, producing a clear, pale-golden oil intermediate.",
      byproduct: { 
        name: "Spent Bleaching Earth", 
        link: "/products/spent-bleaching-earth", 
        sector: "Cement Kilns & Bioenergy", 
        spec: "Residual Oil: ~20%", 
        desc: "Oil-laden clay residue repurposed as eco-friendly high-calorie bio-fuel for industrial cement kilns and soil conditioning." 
      },
      telemetry: { input: "Degummed Oil + Clay", output: "Bleached Rice Bran Oil", lovibondColor: "< 12 Units", residualOil: "20% Oil in Clay", retention: "Trace Metal Free" }
    },
    {
      id: 7,
      number: "7",
      title: "Dewaxing & Centrifugation",
      subtitle: "Disk-Stack Centrifugal Chilling",
      category: "refining",
      temp: "8°C",
      pressure: "High RPM Separation",
      status: "ACTIVE",
      desc: "Controlled chilling and high-speed disk-stack centrifugation separate high-melting plant waxes, producing crystal-clear oil that remains transparent at low temperatures.",
      byproduct: { 
        name: "Rice Bran Wax", 
        link: "/products/rice-bran-wax", 
        sector: "Cosmetics, Polishes & Pharma", 
        spec: "Melting Pt: 78°C - 82°C", 
        desc: "Natural hard vegetable wax utilized in premium lipsticks, cosmetics, industrial polishes, and pharmaceutical coatings." 
      },
      telemetry: { input: "Bleached Oil", output: "Dewaxed Clear Oil", waxContent: "< 10 PPM", waxYield: "2.0% Hard Wax", retention: "Cold Stability" }
    },
    {
      id: 8,
      number: "8",
      title: "Physical Steam Refining",
      subtitle: "High-Vacuum Deodorization Tower",
      category: "refining",
      temp: "260°C",
      pressure: "2.5 mmHg Ultra-Vacuum",
      status: "ACTIVE",
      desc: "High-temperature steam distillation under ultra-high vacuum strips free fatty acids and volatile odors without caustic washing, preserving 10,000+ PPM natural Gamma Oryzanol.",
      byproduct: { 
        name: "Rice Bran Fatty Acid", 
        link: "/products/rice-bran-fatty-acid", 
        sector: "Oleochemicals & Soap Feedstock", 
        spec: "FFA Grade: 85% - 95%", 
        desc: "High-purity distilled fatty acid condensate recovered from steam deodorization, ideal for premium soap and oleochemical synthesis." 
      },
      telemetry: { input: "Dewaxed Oil + Steam", output: "Refined Deodorized Oil", ffaFinal: "< 0.09%", oryzanolRetention: "> 10,000 PPM", smokePoint: "232°C" }
    },
    {
      id: 9,
      number: "9",
      title: "Winterization & Polish",
      subtitle: "Secondary Chill Crystallization",
      category: "refining",
      temp: "5°C",
      pressure: "Pressure-Leaf Filter",
      status: "ACTIVE",
      desc: "Secondary precision chilling and pressure-leaf filtration eliminate micro-stearin fractions, delivering brilliant, cold-stable golden oil for premium retail and industrial uses.",
      byproduct: null,
      telemetry: { input: "Refined Oil", output: "Winterized Golden Oil", coldTest: "Pass @ 0°C / 24hr", clarity: "100% Brilliant", peroxideValue: "0.56 meq/kg" }
    },
    {
      id: 10,
      number: "10",
      title: "QA & Automated Packaging",
      subtitle: "Laser Filling & Flexi-Tank Dispatch",
      category: "refining",
      temp: "25°C",
      pressure: "Nitrogen Purged",
      status: "ACTIVE",
      desc: "Every production batch undergoes NABL-accredited laboratory analysis before automated filling under nitrogen blanket into pouches, tins, jars, and ISO flexi-tanker trucks.",
      byproduct: null,
      telemetry: { input: "Pure Edible Oil", output: "Finished Brand / Bulk Product", compliance: "FSSAI, ISO 22000, Halal", shelfLife: "12 Months", nitrogenPurged: "Yes" }
    }
  ];

  const selectedNodeData = processNodes.find(n => n.id === activeStep) || processNodes[0];

  const filteredNodes = processNodes.filter(n => {
    if (filterCategory === 'extraction') return n.category === 'extraction';
    if (filterCategory === 'refining') return n.category === 'refining';
    if (filterCategory === 'byproducts') return n.byproduct !== null;
    return true;
  });

  return (
    <section className="scada-pid-section">
      <style>{`
        .scada-pid-section {
          background: #06120B;
          color: #FFFFFF;
          padding: clamp(36px, 5vw, 64px) clamp(16px, 4vw, 5%);
          position: relative;
          overflow: hidden;
          background-image: 
            radial-gradient(rgba(212, 160, 23, 0.08) 1px, transparent 1px),
            linear-gradient(180deg, rgba(6, 18, 11, 0.98) 0%, rgba(11, 27, 18, 0.95) 100%);
          background-size: 24px 24px, 100% 100%;
        }

        .scada-container {
          max-width: 1320px;
          margin: 0 auto;
          position: relative;
          z-index: 5;
        }

        /* Section Title & Subtitle */
        .scada-title-wrap {
          text-align: center;
          margin-bottom: clamp(20px, 3vw, 32px);
        }

        .scada-title {
          font-family: var(--font-heading), sans-serif;
          font-size: clamp(22px, 3.2vw, 36px);
          font-weight: 800;
          color: #FFFFFF;
          line-height: 1.18;
          margin-bottom: 8px;
        }

        .scada-subtitle {
          font-family: var(--font-outfit), sans-serif;
          font-size: clamp(12px, 1.4vw, 13.5px);
          color: rgba(255, 255, 255, 0.75);
          max-width: 720px;
          margin: 0 auto;
          line-height: 1.55;
        }

        /* Filter Tabs */
        .scada-tabs {
          display: flex;
          justify-content: center;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: clamp(20px, 3vw, 28px);
        }

        .scada-tab {
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          font-weight: 600;
          padding: 6px 14px;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.2s ease;
          border: 1px solid rgba(255, 255, 255, 0.15);
          background: rgba(255, 255, 255, 0.03);
          color: rgba(255, 255, 255, 0.75);
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .scada-tab:hover, .scada-tab.active {
          background: #D4A017;
          color: #06120B;
          border-color: #D4A017;
          font-weight: 800;
        }

        /* 10-Stage Matrix Grid - Perfect Fluid Alignment Across Devices */
        .scada-matrix {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 12px 10px;
          position: relative;
          margin-bottom: clamp(20px, 3vw, 32px);
        }

        @media (max-width: 1100px) {
          .scada-matrix {
            grid-template-columns: repeat(3, 1fr);
            gap: 10px 8px;
          }
        }

        @media (max-width: 640px) {
          .scada-matrix {
            grid-template-columns: repeat(2, 1fr);
            gap: 8px 6px;
          }
        }

        /* Node Box (SCADA Style) */
        .scada-node {
          background: rgba(18, 42, 28, 0.35);
          border: 1px solid rgba(212, 160, 23, 0.2);
          border-radius: 6px;
          padding: 10px 6px;
          cursor: pointer;
          transition: all 0.25s ease;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          box-sizing: border-box;
          width: 100%;
        }

        .scada-node::before {
          content: '[+]';
          position: absolute;
          top: 4px;
          left: 6px;
          font-family: var(--font-mono), monospace;
          font-size: 8px;
          color: rgba(255, 255, 255, 0.25);
        }

        .scada-node:hover {
          border-color: #D4A017;
          transform: translateY(-2px);
          background: rgba(18, 42, 28, 0.6);
        }

        .scada-node.active {
          border-color: #FFD700;
          background: rgba(212, 160, 23, 0.12);
          box-shadow: 0 0 16px rgba(255, 215, 0, 0.2);
        }

        .scada-node-number {
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          font-weight: 800;
          color: #FFD700;
          background: rgba(255, 215, 0, 0.12);
          border: 1px solid rgba(255, 215, 0, 0.3);
          padding: 1px 6px;
          border-radius: 3px;
          margin-bottom: 2px;
        }

        /* Perfectly Sized SVG Container with Overflow Protection */
        .scada-node-svg-wrap {
          width: 100%;
          max-width: 80px;
          height: 60px;
          margin: 2px auto 6px auto;
          position: relative;
          overflow: hidden;
          border-radius: 4px;
          background: rgba(6, 18, 11, 0.4);
          border: 1px solid rgba(255, 215, 0, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .scada-node-title {
          font-family: var(--font-heading), sans-serif;
          font-size: clamp(11.5px, 1.1vw, 12.5px);
          font-weight: 700;
          color: #FFFFFF;
          margin-bottom: 2px;
          line-height: 1.2;
          width: 100%;
        }

        .scada-node-sub {
          font-family: var(--font-outfit), sans-serif;
          font-size: 9px;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 4px;
          width: 100%;
        }

        .scada-readouts {
          display: flex;
          gap: 3px;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 2px;
          width: 100%;
        }

        .scada-readout {
          font-family: var(--font-mono), monospace;
          font-size: 8px;
          font-weight: 700;
          color: #00E5FF;
          background: rgba(0, 229, 255, 0.08);
          border: 1px solid rgba(0, 229, 255, 0.25);
          padding: 1px 4px;
          border-radius: 2px;
          white-space: nowrap;
        }

        .scada-byproduct-tag {
          position: absolute;
          top: 4px;
          right: 6px;
          background: linear-gradient(135deg, #FFD700 0%, #B8860B 100%);
          color: #06120B;
          font-family: var(--font-mono), monospace;
          font-size: 7px;
          font-weight: 800;
          padding: 1px 4px;
          border-radius: 2px;
          letter-spacing: 0.04em;
        }

        /* Non-Transform SVG Flow & Laser Keyframe Animations */
        @keyframes animFlowLine {
          0% { stroke-dashoffset: 24; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes animLaserScan {
          0% { opacity: 0.2; stroke-width: 1px; }
          50% { opacity: 0.9; stroke-width: 2.2px; }
          100% { opacity: 0.2; stroke-width: 1px; }
        }
        @keyframes animPulse {
          0%, 100% { opacity: 0.35; }
          50% { opacity: 1; }
        }

        .anim-pipe-flow {
          stroke-dasharray: 4 4;
          animation: animFlowLine 0.9s linear infinite;
        }
        .anim-laser {
          animation: animLaserScan 1.8s ease-in-out infinite;
        }
        .anim-pulse-glow {
          animation: animPulse 1.8s ease-in-out infinite;
        }

        /* High-Impact SCADA Telemetry Panel */
        .scada-inspector {
          background: rgba(11, 27, 18, 0.95);
          backdrop-filter: blur(16px);
          border: 1px solid #FFD700;
          border-radius: 10px;
          padding: clamp(18px, 3vw, 28px);
          margin-bottom: clamp(24px, 3vw, 36px);
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.45);
        }

        .scada-inspector-grid.has-byproduct {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(16px, 3vw, 28px);
          align-items: stretch;
        }

        .scada-inspector-grid.full-width {
          display: block;
        }

        @media (max-width: 880px) {
          .scada-inspector-grid.has-byproduct {
            grid-template-columns: 1fr;
          }
        }

        .scada-telemetry-col {
          display: flex;
          flex-direction: column;
          gap: 12px;
          justify-content: space-between;
        }

        .scada-inspector-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
        }

        .scada-badge {
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          font-weight: 800;
          color: #06120B;
          background: #FFD700;
          padding: 2px 8px;
          border-radius: 3px;
          letter-spacing: 0.06em;
        }

        .scada-pills-row {
          display: flex;
          gap: 6px;
        }

        .scada-pill-cyan {
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          font-weight: 700;
          color: #00E5FF;
          background: rgba(0, 229, 255, 0.1);
          border: 1px solid rgba(0, 229, 255, 0.25);
          padding: 2px 8px;
          border-radius: 3px;
        }

        .scada-inspector-title {
          font-family: var(--font-heading), sans-serif;
          font-size: clamp(16px, 2vw, 20px);
          font-weight: 800;
          color: #FFFFFF;
          margin: 0;
          line-height: 1.25;
        }

        .scada-inspector-desc {
          font-family: var(--font-outfit), sans-serif;
          font-size: clamp(12px, 1.3vw, 13px);
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.55;
          margin: 0;
        }

        .scada-telemetry-chips {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 8px;
          background: rgba(6, 18, 11, 0.75);
          padding: 12px 14px;
          border-radius: 6px;
          border: 1px solid rgba(255, 215, 0, 0.2);
          margin-top: 4px;
        }

        .scada-telemetry-chip {
          display: flex;
          flex-direction: column;
        }

        .scada-telemetry-label {
          font-family: var(--font-mono), monospace;
          font-size: 8.5px;
          color: #FFD700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 2px;
        }

        .scada-telemetry-val {
          font-family: var(--font-outfit), sans-serif;
          font-size: 12.5px;
          font-weight: 700;
          color: #FFFFFF;
          word-break: break-word;
        }

        /* Executive Gold Commercial Bio-Derivative Feature Box */
        .scada-byproduct-box {
          background: linear-gradient(135deg, rgba(212, 160, 23, 0.14) 0%, rgba(18, 42, 28, 0.9) 100%);
          border: 1px solid #FFD700;
          border-radius: 8px;
          padding: clamp(16px, 2.5vw, 22px);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          text-align: left;
          box-shadow: inset 0 0 20px rgba(255, 215, 0, 0.05), 0 6px 20px rgba(0, 0, 0, 0.35);
          position: relative;
          overflow: hidden;
        }

        .scada-byproduct-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          gap: 10px;
          margin-bottom: 8px;
        }

        .scada-byproduct-badge {
          font-family: var(--font-mono), monospace;
          font-size: 8.5px;
          font-weight: 800;
          color: #06120B;
          background: #FFD700;
          padding: 3px 8px;
          border-radius: 3px;
          letter-spacing: 0.08em;
        }

        .scada-byproduct-spec-chip {
          font-family: var(--font-mono), monospace;
          font-size: 9px;
          font-weight: 800;
          color: #FFD700;
          background: rgba(255, 215, 0, 0.12);
          border: 1px solid rgba(255, 215, 0, 0.3);
          padding: 2px 8px;
          border-radius: 3px;
        }

        .scada-byproduct-name {
          font-family: var(--font-heading), sans-serif;
          font-size: clamp(17px, 2vw, 20px);
          font-weight: 800;
          color: #FFD700;
          margin-bottom: 4px;
          line-height: 1.25;
        }

        .scada-byproduct-sector {
          font-family: var(--font-mono), monospace;
          font-size: 9.5px;
          color: #00E5FF;
          background: rgba(0, 229, 255, 0.1);
          border: 1px solid rgba(0, 229, 255, 0.25);
          padding: 2px 10px;
          border-radius: 10px;
          display: inline-block;
          margin-bottom: 10px;
        }

        .scada-byproduct-desc {
          font-family: var(--font-outfit), sans-serif;
          font-size: 12.5px;
          color: rgba(255, 255, 255, 0.88);
          margin: 0 0 16px 0;
          line-height: 1.5;
        }

        .scada-byproduct-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          background: linear-gradient(135deg, #FFD700 0%, #D4A017 100%);
          color: #06120B;
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          font-weight: 800;
          padding: 10px 16px;
          border-radius: 4px;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          transition: all 0.25s ease;
          box-shadow: 0 4px 14px rgba(255, 215, 0, 0.25);
        }

        .scada-byproduct-cta:hover {
          background: #FFFFFF;
          color: #06120B;
          box-shadow: 0 0 16px rgba(255, 215, 0, 0.5);
          transform: translateY(-1px);
        }

        /* NABL SCADA Laboratory Dashboard */
        .scada-nabl-panel {
          background: #FFFFFF;
          color: #0B2518;
          border-radius: 10px;
          padding: clamp(18px, 3vw, 24px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
        }

        .scada-nabl-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px 16px;
        }

        @media (max-width: 640px) {
          .scada-nabl-grid {
            grid-template-columns: 1fr;
            gap: 8px;
          }
        }

        .scada-nabl-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 0;
          border-bottom: 1px dashed rgba(11, 37, 24, 0.12);
          font-size: 12.5px;
        }

        .scada-nabl-param {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #0B2518;
          font-weight: 700;
        }

        .scada-nabl-val {
          font-family: var(--font-mono), monospace;
          font-weight: 800;
          color: #122A1C;
        }

        .scada-nabl-val.gold {
          color: #B8860B;
        }

        .scada-nabl-val.green {
          color: #2D6A4F;
        }
      `}</style>

      <div className="scada-container">
        {/* Title */}
        <div className="scada-title-wrap">
          <h2 className="scada-title">10-Stage Bio-Refining &amp; Derivatives SCADA Control</h2>
          <p className="scada-subtitle">
            Real-time process parameters showcasing automated continuous solvent extraction, high-vacuum physical refining, and commercial bio-derivative recovery at our Kolkata complex.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="scada-tabs">
          <button className={`scada-tab ${filterCategory === 'all' ? 'active' : ''}`} onClick={() => setFilterCategory('all')}>
            <Sliders size={13} /> All 10 SCADA Stages
          </button>
          <button className={`scada-tab ${filterCategory === 'extraction' ? 'active' : ''}`} onClick={() => setFilterCategory('extraction')}>
            <Activity size={13} /> Extraction Phase (1-4)
          </button>
          <button className={`scada-tab ${filterCategory === 'refining' ? 'active' : ''}`} onClick={() => setFilterCategory('refining')}>
            <Flame size={13} /> Refining Phase (5-10)
          </button>
          <button className={`scada-tab ${filterCategory === 'byproducts' ? 'active' : ''}`} onClick={() => setFilterCategory('byproducts')}>
            <Sparkles size={13} /> Commercial Bio-Derivatives
          </button>
        </div>

        {/* 10-Stage Matrix Grid */}
        <div className="scada-matrix">
          {filteredNodes.map((node) => {
            const isSelected = node.id === activeStep;
            return (
              <div 
                key={node.id} 
                className={`scada-node ${isSelected ? 'active' : ''}`}
                onClick={() => setActiveStep(node.id)}
              >
                {node.byproduct && (
                  <span className="scada-byproduct-tag">BY-PRODUCT</span>
                )}
                <span className="scada-node-number">{node.number}</span>

                {/* SVG Equipment Node with Symmetrical High-Precision In-Place Animations */}
                <div className="scada-node-svg-wrap">
                  <svg viewBox="0 0 140 120" style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
                    <defs>
                      <linearGradient id="metalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#2A4836" />
                        <stop offset="50%" stopColor="#122A1C" />
                        <stop offset="100%" stopColor="#08150D" />
                      </linearGradient>
                      <linearGradient id="oilGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor="#FFD700" stopOpacity="0.7" />
                        <stop offset="100%" stopColor="#B8860B" stopOpacity="0.2" />
                      </linearGradient>
                    </defs>

                    {/* Node 1: Raw Bran Intake Silo & Laser Scanner */}
                    {node.id === 1 && (
                      <g>
                        <path d="M 40 96 L 48 72 M 100 96 L 92 72" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" />
                        <path d="M 40 25 L 100 25 L 100 68 L 70 92 L 40 68 Z" fill="url(#metalGrad)" stroke="#FFD700" strokeWidth="2" />
                        <path d="M 42 40 L 98 40 L 98 66 L 70 88 L 42 66 Z" fill="url(#oilGrad)" className="anim-pulse-glow" />
                        <path d="M 60 14 L 80 14 L 75 25 L 65 25 Z" fill="#122A1C" stroke="#00E5FF" strokeWidth="1.5" />
                        <g>
                          <circle cx="70" cy="96" r="6" fill="#122A1C" stroke="#FFD700" strokeWidth="1.5" />
                          <line x1="64" y1="96" x2="76" y2="96" stroke="#FFD700" strokeWidth="1.5" />
                          <line x1="70" y1="90" x2="70" y2="102" stroke="#FFD700" strokeWidth="1.5" />
                          <animateTransform attributeName="transform" type="rotate" from="0 70 96" to="360 70 96" dur="4s" repeatCount="indefinite" />
                        </g>
                        <rect x="46" y="32" width="4" height="28" rx="1.5" fill="none" stroke="#00E5FF" strokeWidth="1" />
                        <line x1="70" y1="25" x2="70" y2="65" stroke="#00E5FF" strokeWidth="1.8" strokeDasharray="3 2" className="anim-laser" />
                      </g>
                    )}

                    {/* Node 2: Steam-Jacketed Conditioner & Pelletizer Mill */}
                    {node.id === 2 && (
                      <g>
                        <rect x="20" y="20" width="100" height="40" rx="6" fill="url(#metalGrad)" stroke="#FFD700" strokeWidth="2" />
                        <line x1="26" y1="40" x2="114" y2="40" stroke="#00E5FF" strokeWidth="2" />
                        <g>
                          <circle cx="45" cy="40" r="5.5" fill="none" stroke="#FFD700" strokeWidth="1.5" />
                          <line x1="39" y1="40" x2="51" y2="40" stroke="#FFD700" strokeWidth="1.5" />
                          <line x1="45" y1="34" x2="45" y2="46" stroke="#FFD700" strokeWidth="1.5" />
                          <animateTransform attributeName="transform" type="rotate" from="0 45 40" to="360 45 40" dur="4s" repeatCount="indefinite" />
                        </g>
                        <g>
                          <circle cx="70" cy="40" r="5.5" fill="none" stroke="#FFD700" strokeWidth="1.5" />
                          <line x1="64" y1="40" x2="76" y2="40" stroke="#FFD700" strokeWidth="1.5" />
                          <line x1="70" y1="34" x2="70" y2="46" stroke="#FFD700" strokeWidth="1.5" />
                          <animateTransform attributeName="transform" type="rotate" from="0 70 40" to="360 70 40" dur="4s" repeatCount="indefinite" />
                        </g>
                        <g>
                          <circle cx="95" cy="40" r="5.5" fill="none" stroke="#FFD700" strokeWidth="1.5" />
                          <line x1="89" y1="40" x2="101" y2="40" stroke="#FFD700" strokeWidth="1.5" />
                          <line x1="95" y1="34" x2="95" y2="46" stroke="#FFD700" strokeWidth="1.5" />
                          <animateTransform attributeName="transform" type="rotate" from="0 95 40" to="360 95 40" dur="4s" repeatCount="indefinite" />
                        </g>
                        <line x1="40" y1="10" x2="40" y2="20" stroke="#00E5FF" strokeWidth="1.8" strokeDasharray="3 2" className="anim-pipe-flow" />
                        <line x1="70" y1="10" x2="70" y2="20" stroke="#00E5FF" strokeWidth="1.8" strokeDasharray="3 2" className="anim-pipe-flow" />
                        <line x1="100" y1="10" x2="100" y2="20" stroke="#00E5FF" strokeWidth="1.8" strokeDasharray="3 2" className="anim-pipe-flow" />
                        <path d="M 58 60 L 82 60 L 76 78 L 64 78 Z" fill="#122A1C" stroke="#FFD700" strokeWidth="1.5" />
                        <g>
                          <circle cx="63" cy="90" r="5.5" fill="#122A1C" stroke="#FFD700" strokeWidth="1.5" />
                          <line x1="57" y1="90" x2="69" y2="90" stroke="#FFD700" strokeWidth="1.5" />
                          <animateTransform attributeName="transform" type="rotate" from="0 63 90" to="360 63 90" dur="3s" repeatCount="indefinite" />
                        </g>
                        <g>
                          <circle cx="77" cy="90" r="5.5" fill="#122A1C" stroke="#00E5FF" strokeWidth="1.5" />
                          <line x1="71" y1="90" x2="83" y2="90" stroke="#00E5FF" strokeWidth="1.5" />
                          <animateTransform attributeName="transform" type="rotate" from="360 77 90" to="0 77 90" dur="3s" repeatCount="indefinite" />
                        </g>
                        <line x1="70" y1="96" x2="70" y2="108" stroke="#FFD700" strokeWidth="2" strokeDasharray="3 2" className="anim-pipe-flow" />
                      </g>
                    )}

                    {/* Node 3: Continuous Rotocel Hexane Extractor */}
                    {node.id === 3 && (
                      <g>
                        <rect x="20" y="16" width="100" height="84" rx="6" fill="url(#metalGrad)" stroke="#FFD700" strokeWidth="2" />
                        <g>
                          <circle cx="70" cy="54" r="28" fill="none" stroke="#FFD700" strokeWidth="1.8" strokeDasharray="14 4" />
                          <line x1="42" y1="54" x2="98" y2="54" stroke="#FFD700" strokeWidth="1.2" />
                          <line x1="56" y1="30" x2="84" y2="78" stroke="#FFD700" strokeWidth="1.2" />
                          <line x1="56" y1="78" x2="84" y2="30" stroke="#FFD700" strokeWidth="1.2" />
                          <animateTransform attributeName="transform" type="rotate" from="0 70 54" to="360 70 54" dur="6s" repeatCount="indefinite" />
                        </g>
                        <circle cx="70" cy="54" r="6" fill="#122A1C" stroke="#00E5FF" strokeWidth="1.5" />
                        <line x1="30" y1="22" x2="110" y2="22" stroke="#00E5FF" strokeWidth="2" />
                        <line x1="45" y1="22" x2="45" y2="32" stroke="#00E5FF" strokeWidth="1.5" strokeDasharray="2 2" className="anim-pipe-flow" />
                        <line x1="70" y1="22" x2="70" y2="32" stroke="#00E5FF" strokeWidth="1.5" strokeDasharray="2 2" className="anim-pipe-flow" />
                        <line x1="95" y1="22" x2="95" y2="32" stroke="#00E5FF" strokeWidth="1.5" strokeDasharray="2 2" className="anim-pipe-flow" />
                        <path d="M 30 82 L 110 82 L 85 94 L 55 94 Z" fill="rgba(255,215,0,0.3)" stroke="#FFD700" strokeWidth="1" className="anim-pulse-glow" />
                      </g>
                    )}

                    {/* Node 4: Desolventizer-Toaster (DT) & Shell-and-Tube Condenser */}
                    {node.id === 4 && (
                      <g>
                        <rect x="20" y="16" width="48" height="84" rx="4" fill="url(#metalGrad)" stroke="#FFD700" strokeWidth="2" />
                        <line x1="20" y1="36" x2="68" y2="36" stroke="#FFD700" strokeWidth="1.2" />
                        <line x1="20" y1="56" x2="68" y2="56" stroke="#FFD700" strokeWidth="1.2" />
                        <line x1="20" y1="74" x2="68" y2="74" stroke="#FFD700" strokeWidth="1.2" />
                        <line x1="44" y1="16" x2="44" y2="92" stroke="#00E5FF" strokeWidth="2" />
                        <rect x="30" y="33" width="28" height="4" fill="#FFD700" className="anim-pulse-glow" />
                        <rect x="30" y="53" width="28" height="4" fill="#FFD700" className="anim-pulse-glow" />
                        <rect x="30" y="71" width="28" height="4" fill="#FFD700" className="anim-pulse-glow" />
                        <path d="M 44 16 L 44 10 L 98 10 L 98 20" fill="none" stroke="#00E5FF" strokeWidth="2" strokeDasharray="3 2" className="anim-pipe-flow" />
                        <rect x="80" y="20" width="36" height="76" rx="4" fill="url(#metalGrad)" stroke="#00E5FF" strokeWidth="2" />
                        <line x1="89" y1="20" x2="89" y2="94" stroke="#00E5FF" strokeWidth="1.5" strokeDasharray="3 2" className="anim-pipe-flow" />
                        <line x1="98" y1="20" x2="98" y2="94" stroke="#00E5FF" strokeWidth="1.5" strokeDasharray="3 2" className="anim-pipe-flow" />
                        <line x1="107" y1="20" x2="107" y2="94" stroke="#00E5FF" strokeWidth="1.5" strokeDasharray="3 2" className="anim-pipe-flow" />
                      </g>
                    )}

                    {/* Node 5: Enzymatic Degumming Reactor & Agitator */}
                    {node.id === 5 && (
                      <g>
                        <path d="M 30 25 L 110 25 L 110 72 A 15 15 0 0 1 95 86 L 45 86 A 15 15 0 0 1 30 72 Z" fill="url(#metalGrad)" stroke="#FFD700" strokeWidth="2" />
                        <path d="M 23 35 L 28 35 L 28 72 L 23 72 Z" fill="#FFD700" opacity="0.6" className="anim-pulse-glow" />
                        <path d="M 112 35 L 117 35 L 117 72 L 112 72 Z" fill="#FFD700" opacity="0.6" className="anim-pulse-glow" />
                        <path d="M 32 40 L 108 40 L 108 70 A 13 13 0 0 1 95 83 L 45 83 A 13 13 0 0 1 32 70 Z" fill="rgba(0, 255, 157, 0.2)" className="anim-pulse-glow" />
                        <rect x="60" y="10" width="20" height="15" rx="2" fill="#122A1C" stroke="#00E5FF" strokeWidth="1.5" />
                        <line x1="70" y1="25" x2="70" y2="78" stroke="#FFFFFF" strokeWidth="2" />
                        <g>
                          <rect x="48" y="48" width="44" height="4" fill="#FFD700" />
                          <line x1="70" y1="42" x2="70" y2="58" stroke="#FFD700" strokeWidth="1.5" />
                          <animateTransform attributeName="transform" type="rotate" from="0 70 50" to="360 70 50" dur="3s" repeatCount="indefinite" />
                        </g>
                        <g>
                          <rect x="52" y="66" width="36" height="4" fill="#FFD700" />
                          <line x1="70" y1="60" x2="70" y2="74" stroke="#FFD700" strokeWidth="1.5" />
                          <animateTransform attributeName="transform" type="rotate" from="360 70 68" to="0 70 68" dur="3s" repeatCount="indefinite" />
                        </g>
                        <line x1="45" y1="10" x2="45" y2="25" stroke="#00FF9D" strokeWidth="1.8" strokeDasharray="3 2" className="anim-pipe-flow" />
                      </g>
                    )}

                    {/* Node 6: Vacuum Bleaching Column & Leaf Filters */}
                    {node.id === 6 && (
                      <g>
                        <path d="M 25 18 L 75 18 L 75 62 A 25 25 0 0 1 25 62 Z" fill="url(#metalGrad)" stroke="#FFD700" strokeWidth="2" />
                        <line x1="50" y1="18" x2="50" y2="10" stroke="#00E5FF" strokeWidth="2" strokeDasharray="2 2" className="anim-pipe-flow" />
                        <path d="M 32 52 Q 50 58 68 52" fill="none" stroke="#FFD700" strokeWidth="2" className="anim-pulse-glow" />
                        <rect x="85" y="20" width="20" height="72" rx="3" fill="url(#metalGrad)" stroke="#FFD700" strokeWidth="1.8" />
                        <rect x="110" y="20" width="20" height="72" rx="3" fill="url(#metalGrad)" stroke="#FFD700" strokeWidth="1.8" />
                        <line x1="95" y1="20" x2="95" y2="92" stroke="#00E5FF" strokeWidth="1.5" strokeDasharray="3 2" className="anim-pipe-flow" />
                        <line x1="120" y1="20" x2="120" y2="92" stroke="#00E5FF" strokeWidth="1.5" strokeDasharray="3 2" className="anim-pipe-flow" />
                      </g>
                    )}

                    {/* Node 7: Dewaxing Centrifuge & Plate Cooler (100% Symmetrical Scientific Schematic) */}
                    {node.id === 7 && (
                      <g>
                        {/* Plate Chill Cooler */}
                        <rect x="16" y="24" width="30" height="66" rx="3" fill="url(#metalGrad)" stroke="#00E5FF" strokeWidth="2" />
                        <line x1="22" y1="24" x2="22" y2="90" stroke="#00E5FF" strokeWidth="1" strokeDasharray="4 2" />
                        <line x1="31" y1="24" x2="31" y2="90" stroke="#00E5FF" strokeWidth="1" strokeDasharray="4 2" />
                        <line x1="40" y1="24" x2="40" y2="90" stroke="#00E5FF" strokeWidth="1" strokeDasharray="4 2" />
                        <line x1="46" y1="56" x2="64" y2="56" stroke="#00E5FF" strokeWidth="2" strokeDasharray="2 2" className="anim-pipe-flow" />
                        {/* Stationary Conical Bowl & Disk Stack */}
                        <path d="M 64 24 L 120 24 L 108 64 L 92 86 L 76 64 Z" fill="url(#metalGrad)" stroke="#FFD700" strokeWidth="2" />
                        <path d="M 78 36 L 92 42 L 106 36" stroke="#FFD700" strokeWidth="1.5" fill="none" />
                        <path d="M 80 44 L 92 50 L 104 44" stroke="#FFD700" strokeWidth="1.5" fill="none" />
                        <path d="M 82 52 L 92 58 L 102 52" stroke="#FFD700" strokeWidth="1.5" fill="none" />
                        <path d="M 84 60 L 92 66 L 100 60" stroke="#FFD700" strokeWidth="1.5" fill="none" />
                        <line x1="92" y1="16" x2="92" y2="84" stroke="#FFFFFF" strokeWidth="2" />
                        <line x1="92" y1="16" x2="92" y2="8" stroke="#00E5FF" strokeWidth="2" strokeDasharray="2 2" className="anim-pipe-flow" />
                        {/* High-Speed Symmetrical Turbine Impeller Spinning 100% In-Place at (92, 48) */}
                        <g>
                          <circle cx="92" cy="48" r="6" fill="#122A1C" stroke="#FFD700" strokeWidth="1.5" />
                          <line x1="84" y1="48" x2="100" y2="48" stroke="#FFD700" strokeWidth="1.8" />
                          <line x1="92" y1="40" x2="92" y2="56" stroke="#FFD700" strokeWidth="1.8" />
                          <animateTransform attributeName="transform" type="rotate" from="0 92 48" to="360 92 48" dur="1.8s" repeatCount="indefinite" />
                        </g>
                      </g>
                    )}

                    {/* Node 8: 260°C High-Vacuum Physical Refining Tower */}
                    {node.id === 8 && (
                      <g>
                        <rect x="35" y="16" width="46" height="82" rx="5" fill="url(#metalGrad)" stroke="#FFD700" strokeWidth="2" />
                        <path d="M 58 16 L 58 10 L 115 10 L 115 25" fill="none" stroke="#00E5FF" strokeWidth="2" strokeDasharray="3 2" className="anim-pipe-flow" />
                        <rect x="39" y="26" width="38" height="15" fill="rgba(0,229,255,0.15)" stroke="#00E5FF" strokeWidth="1" strokeDasharray="2 2" className="anim-pipe-flow" />
                        <rect x="39" y="48" width="38" height="15" fill="rgba(0,229,255,0.15)" stroke="#00E5FF" strokeWidth="1" strokeDasharray="2 2" className="anim-pipe-flow" />
                        <rect x="39" y="70" width="38" height="15" fill="rgba(0,229,255,0.15)" stroke="#00E5FF" strokeWidth="1" strokeDasharray="2 2" className="anim-pipe-flow" />
                        <rect x="35" y="87" width="46" height="11" fill="#FFD700" opacity="0.6" className="anim-pulse-glow" />
                        <rect x="95" y="52" width="26" height="40" rx="3" fill="url(#metalGrad)" stroke="#FFD700" strokeWidth="1.8" />
                        <line x1="81" y1="62" x2="95" y2="62" stroke="#FFD700" strokeWidth="2" strokeDasharray="2 2" className="anim-pipe-flow" />
                      </g>
                    )}

                    {/* Node 9: Winterization Crystallizer & Polish Filter Press (100% Symmetrical Scientific Schematic) */}
                    {node.id === 9 && (
                      <g>
                        {/* Stationary Crystallizer Tank & Wall Anchor Scraper */}
                        <path d="M 22 22 L 70 22 L 70 76 A 10 10 0 0 1 60 86 L 32 86 A 10 10 0 0 1 22 76 Z" fill="url(#metalGrad)" stroke="#FFD700" strokeWidth="2" />
                        <path d="M 28 32 Q 64 38 28 46 Q 64 52 28 60 Q 64 66 28 74" fill="none" stroke="#00E5FF" strokeWidth="1.8" className="anim-pulse-glow" />
                        <line x1="28" y1="36" x2="28" y2="78" stroke="#FFD700" strokeWidth="1.5" />
                        <line x1="64" y1="36" x2="64" y2="78" stroke="#FFD700" strokeWidth="1.5" />
                        <line x1="28" y1="78" x2="64" y2="78" stroke="#FFD700" strokeWidth="1.5" />
                        <line x1="46" y1="18" x2="46" y2="82" stroke="#FFFFFF" strokeWidth="2" />
                        {/* Symmetrical Mixing Impeller Spinning 100% In-Place at (46, 52) */}
                        <g>
                          <circle cx="46" cy="52" r="5.5" fill="#122A1C" stroke="#FFD700" strokeWidth="1.5" />
                          <line x1="38" y1="52" x2="54" y2="52" stroke="#FFD700" strokeWidth="1.8" />
                          <line x1="46" y1="44" x2="46" y2="60" stroke="#FFD700" strokeWidth="1.8" />
                          <animateTransform attributeName="transform" type="rotate" from="0 46 52" to="360 46 52" dur="4s" repeatCount="indefinite" />
                        </g>
                        {/* Polish Filter Press */}
                        <rect x="82" y="32" width="46" height="46" rx="3" fill="url(#metalGrad)" stroke="#FFD700" strokeWidth="1.8" />
                        <line x1="91" y1="32" x2="91" y2="78" stroke="#00E5FF" strokeWidth="1.5" strokeDasharray="3 2" className="anim-pipe-flow" />
                        <line x1="99" y1="32" x2="99" y2="78" stroke="#00E5FF" strokeWidth="1.5" strokeDasharray="3 2" className="anim-pipe-flow" />
                        <line x1="107" y1="32" x2="107" y2="78" stroke="#00E5FF" strokeWidth="1.5" strokeDasharray="3 2" className="anim-pipe-flow" />
                        <line x1="115" y1="32" x2="115" y2="78" stroke="#00E5FF" strokeWidth="1.5" strokeDasharray="3 2" className="anim-pipe-flow" />
                      </g>
                    )}

                    {/* Node 10: Automated Nitrogen Packaging Line & NABL Certification */}
                    {node.id === 10 && (
                      <g>
                        <line x1="15" y1="88" x2="125" y2="88" stroke="#FFD700" strokeWidth="2.5" strokeDasharray="4 2" className="anim-pipe-flow" />
                        <path d="M 28 58 L 44 58 L 44 88 L 28 88 Z" fill="rgba(255,215,0,0.4)" stroke="#FFD700" strokeWidth="1.5" />
                        <rect x="32" y="48" width="8" height="10" fill="#FFD700" />
                        <path d="M 60 58 L 76 58 L 76 88 L 60 88 Z" fill="rgba(255,215,0,0.5)" stroke="#FFD700" strokeWidth="1.5" />
                        <rect x="64" y="48" width="8" height="10" fill="#FFD700" />
                        <rect x="65" y="15" width="6" height="23" fill="#00E5FF" />
                        <line x1="68" y1="38" x2="68" y2="48" stroke="#FFD700" strokeWidth="2.5" strokeDasharray="3 2" className="anim-pipe-flow" />
                        <rect x="92" y="30" width="34" height="34" rx="4" fill="rgba(0,255,157,0.2)" stroke="#00FF9D" strokeWidth="1.8" className="anim-pulse-glow" />
                        <path d="M 102 47 L 108 53 L 117 42" fill="none" stroke="#00FF9D" strokeWidth="2.5" strokeLinecap="round" />
                      </g>
                    )}
                  </svg>
                </div>

                <h3 className="scada-node-title">{node.title}</h3>
                <div className="scada-node-sub">{node.subtitle}</div>
                <div className="scada-readouts">
                  <span className="scada-readout">{node.temp}</span>
                  <span className="scada-readout" style={{ color: '#FFD700', borderColor: 'rgba(255,215,0,0.3)' }}>{node.pressure}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* High-Impact SCADA Telemetry Panel */}
        <div className="scada-inspector">
          <div className={`scada-inspector-grid ${selectedNodeData.byproduct ? 'has-byproduct' : 'full-width'}`}>
            {/* Left Column: Operational Telemetry */}
            <div className="scada-telemetry-col">
              <div>
                <div className="scada-inspector-header">
                  <span className="scada-badge">STAGE {selectedNodeData.number} PARAMETERS</span>
                  <div className="scada-pills-row">
                    <span className="scada-pill-cyan">TEMP: {selectedNodeData.temp}</span>
                    <span className="scada-pill-cyan">PRESS: {selectedNodeData.pressure}</span>
                  </div>
                </div>

                <h3 className="scada-inspector-title" style={{ marginTop: '8px' }}>
                  {selectedNodeData.title}: <span style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 400 }}>{selectedNodeData.subtitle}</span>
                </h3>
                <p className="scada-inspector-desc" style={{ marginTop: '6px' }}>{selectedNodeData.desc}</p>
              </div>

              <div className="scada-telemetry-chips">
                {Object.entries(selectedNodeData.telemetry).map(([key, val]) => (
                  <div key={key} className="scada-telemetry-chip">
                    <span className="scada-telemetry-label">{key.replace(/([A-Z])/g, ' $1')}</span>
                    <span className="scada-telemetry-val">{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Executive Gold Commercial Bio-Derivative Feature Card */}
            {selectedNodeData.byproduct && (
              <div className="scada-byproduct-box">
                <div>
                  <div className="scada-byproduct-header">
                    <span className="scada-byproduct-badge">COMMERCIAL BIO-DERIVATIVE</span>
                    <span className="scada-byproduct-spec-chip">{selectedNodeData.byproduct.spec}</span>
                  </div>

                  <h4 className="scada-byproduct-name">{selectedNodeData.byproduct.name}</h4>
                  <span className="scada-byproduct-sector">{selectedNodeData.byproduct.sector}</span>

                  <p className="scada-byproduct-desc">
                    {selectedNodeData.byproduct.desc}
                  </p>
                </div>

                <Link href={selectedNodeData.byproduct.link} className="scada-byproduct-cta">
                  <PackageCheck size={16} />
                  <span>Explore Derivative Specs</span>
                  <ChevronRight size={15} />
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* NABL SCADA Laboratory Dashboard */}
        <div className="scada-nabl-panel">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#2D6A4F', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                SCADA Verified Quality Parameters
              </span>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(18px, 2.2vw, 22px)', fontWeight: 800, color: '#0B2518', margin: 0 }}>
                NABL Accredited Quality Certificate
              </h3>
            </div>
            <Image src="/nabl_logo.png" alt="NABL Accredited Laboratory" width={110} height={44} style={{ objectFit: 'contain' }} />
          </div>

          <div className="scada-nabl-grid">
            <div className="scada-nabl-row">
              <span className="scada-nabl-param"><Eye size={15} color="#2D6A4F" /> Organoleptic &amp; Appearance</span>
              <span className="scada-nabl-val">Clear Brilliant Liquid</span>
            </div>
            <div className="scada-nabl-row">
              <span className="scada-nabl-param"><Sparkles size={15} color="#B8860B" /> Gamma-Oryzanol Retention</span>
              <span className="scada-nabl-val gold">&gt; 10,000 PPM (1.3%+)</span>
            </div>
            <div className="scada-nabl-row">
              <span className="scada-nabl-param"><Gauge size={15} color="#2D6A4F" /> Free Fatty Acids (FFA)</span>
              <span className="scada-nabl-val green">&lt; 0.09% (Max 0.1%)</span>
            </div>
            <div className="scada-nabl-row">
              <span className="scada-nabl-param"><Droplet size={15} color="#2D6A4F" /> Moisture Content</span>
              <span className="scada-nabl-val green">0.013%</span>
            </div>
            <div className="scada-nabl-row">
              <span className="scada-nabl-param"><Beaker size={15} color="#2D6A4F" /> Peroxide Value</span>
              <span className="scada-nabl-val">0.56 meq/kg</span>
            </div>
            <div className="scada-nabl-row">
              <span className="scada-nabl-param"><Atom size={15} color="#2D6A4F" /> Residual Hexane Content</span>
              <span className="scada-nabl-val green">Nil (Undetectable)</span>
            </div>
          </div>

          <div style={{ marginTop: '16px', background: '#F5F9F6', border: '1px solid rgba(45, 106, 79, 0.25)', padding: '12px 18px', borderRadius: '6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-outfit)', fontSize: '13px', fontWeight: 700, color: '#0B2518' }}>
              <ShieldCheck size={18} color="#2D6A4F" />
              <span>Heavy Metal, Mineral Oil &amp; Argemone Tests</span>
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 800, color: '#2D6A4F', background: 'rgba(45, 106, 79, 0.12)', padding: '3px 10px', borderRadius: '4px' }}>
              100% PASS (NEGATIVE)
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
