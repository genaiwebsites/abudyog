"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    src: "/ab-udyog-rice-bran-oil-refinery-plant-kolkata.png",
    title: "Continuous Solvent Extraction Complex",
    category: "Refinery",
    description: "300 TPD continuous solvent extraction facility processing fresh raw rice bran in Kolkata, West Bengal."
  },
  {
    id: 2,
    src: "/rice_bran_oil_physical_refinery_towers.png",
    title: "Physical Distillation Towers",
    category: "Refinery",
    description: "High-temperature steam distillation towers purifying crude oil without caustic chemicals or acid treatments."
  },
  {
    id: 3,
    src: "/ab_udyog_refinery_control_room_plc_automation.png",
    title: "PLC Automation & Control Room",
    category: "Infrastructure",
    description: "Centralized DCS & PLC control room monitoring temperature, pressure, and solvent recovery across production lines."
  },
  {
    id: 4,
    src: "/ab_udyog_quality_assurance_laboratory_testing.png",
    title: "Quality Assurance Laboratory",
    category: "Laboratory",
    description: "In-house analytical lab testing every batch for Gamma Oryzanol potency, moisture, FFA, and fatty acid profiles."
  },
  {
    id: 5,
    src: "/jeevan-rekha-rice-bran-mustard-soyabean-oil-variations.png",
    title: "Jeevan Rekha Consumer Oil Range",
    category: "Refinery",
    description: "Physically refined Rice Bran Oil, cold-pressed Mustard Oil & Soyabean Oil formulated for authentic flavor and purity."
  },
  {
    id: 6,
    src: "/ab_udyog_continuous_solvent_extraction_hall.png",
    title: "Solvent Extraction Processing Hall",
    category: "Refinery",
    description: "Heavy-duty counter-current extractor hall processing bran meal to recover raw rice bran oil."
  },
  {
    id: 7,
    src: "/ab_udyog_kolkata_factory_refinery_entrance.png",
    title: "Kolkata Plant Entrance & Complex",
    category: "Infrastructure",
    description: "Industrial facility entrance and logistics bay handling bulk tanker dispatches and raw material arrival."
  },
  {
    id: 8,
    src: "/DJI_0140.jpg",
    title: "Plant Storage Silos & Aerial Facility",
    category: "Infrastructure",
    description: "Aerial drone perspective of the AB Udyog refinery complex, raw material silos, and logistics grounds."
  },
  {
    id: 9,
    src: "/bengal_rice_belt_paddy_fields_refinery_sourcing.png",
    title: "Bengal Rice Belt Raw Sourcing",
    category: "Sourcing",
    description: "Integrated sourcing network collecting fresh raw rice bran directly from regional rice mills within hours of milling."
  },
  {
    id: 10,
    src: "/ab-udyog-jeevan-rekha-csr-community-worker-welfare-kolkata.png",
    title: "Community Distribution & Welfare",
    category: "Sourcing",
    description: "AB Udyog factory team and workers distributing vitamin-fortified edible oils to community welfare programs."
  },
  {
    id: 11,
    src: "/abu_dorb_combo.svg",
    title: "AB DORB Animal Feed Lines",
    category: "Derivatives",
    description: "High-protein de-oiled rice bran (Magik, ABU Platinum, ABU Premium) for fish, poultry, and cattle feed."
  },
  {
    id: 12,
    src: "/ab-health-edible-oils-brand-showcase-kolkata.svg",
    title: "AB Health Edible Oils Range",
    category: "Refinery",
    description: "Physically refined Rice Bran Oil & Refined Soyabean Oil fortified with Vitamins A & D for daily family health."
  }
];

const categories = ["All", "Refinery", "Laboratory", "Infrastructure", "Sourcing", "Derivatives"];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Lightbox controls
  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const navigateLightbox = (direction) => {
    if (lightboxIndex === null) return;
    let newIndex = lightboxIndex + direction;
    if (newIndex < 0) {
      newIndex = galleryItems.length - 1;
    } else if (newIndex >= galleryItems.length) {
      newIndex = 0;
    }
    setLightboxIndex(newIndex);
  };

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") navigateLightbox(-1);
      if (e.key === "ArrowRight") navigateLightbox(1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  return (
    <div style={{ background: 'var(--cream)', minHeight: '100vh' }}>
      
      {/* ══ HERO BANNER ══ */}
      <section className="hero-subpage" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="hero-bg" style={{ backgroundImage: "url('/ab_udyog_continuous_solvent_extraction_hall.png')", opacity: 0.18 }}></div>
        <div className="hero-accent"></div>
        <div className="hero-content" style={{ textAlign: 'center', margin: '0 auto', maxWidth: '800px' }}>
          <h1 className="hero-title" style={{ margin: '0 auto' }}>
            Refinery &amp; <em>Infrastructure Gallery</em>
          </h1>
          <p className="hero-subtitle" style={{ margin: '24px auto 0 auto', maxWidth: '600px' }}>
            A photographic showcase of our continuous solvent extraction halls, physical distillation towers, analytical testing laboratories, and raw material sourcing network.
          </p>
        </div>
      </section>

      {/* ══ GALLERY GRID ══ */}
      <section style={{ padding: '80px 8%', position: 'relative' }}>
        
        {/* Gallery Grid */}
        <div className="gallery-grid">
          {galleryItems.map((item, idx) => (
            <div 
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="gallery-card"
            >
              {/* Image Container */}
              <div className="gallery-img-container">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                  priority={idx < 4}
                />
              </div>

              {/* Dark Linear Gradient Overlay (always visible for contrast) */}
              <div className="gallery-overlay-gradient"></div>

              {/* Card Content (Visible hover reveal) */}
              <div className="gallery-card-content" style={{ justifyContent: 'center', alignItems: 'center' }}>
                <div className="gallery-card-footer" style={{ marginTop: 0 }}>
                  <span className="gallery-view-btn">
                    View Image <Eye size={14} style={{ marginLeft: '6px' }} aria-hidden="true" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* ══ LIGHTBOX MODAL ══ */}
      {lightboxIndex !== null && (
        <div 
          className="lightbox-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery lightbox"
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(10, 31, 19, 0.97)',
            backdropFilter: 'blur(12px)',
            zIndex: 10000,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '24px',
            overflowY: 'auto'
          }}
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            style={{
              position: 'fixed',
              top: '24px',
              right: '24px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: 'var(--white)',
              width: '44px',
              height: '44px',
              borderRadius: '0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10003,
              transition: 'background 0.2s, color 0.2s'
            }}
            onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'; e.currentTarget.style.color = 'var(--gold-light)'; }}
            onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'; e.currentTarget.style.color = 'var(--white)'; }}
            aria-label="Close Gallery Lightbox"
          >
            <X size={20} aria-hidden="true" />
          </button>

          {/* Navigation controls */}
          <button
            onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
            className="lightbox-nav-btn prev"
            aria-label="Previous Image"
          >
            <ChevronLeft size={28} aria-hidden="true" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
            className="lightbox-nav-btn next"
            aria-label="Next Image"
          >
            <ChevronRight size={28} aria-hidden="true" />
          </button>

          {/* Lightbox Content Container */}
          <div 
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              maxWidth: '90vw',
              maxHeight: '85vh',
              zIndex: 10001,
            }}
          >
            <img
              src={galleryItems[lightboxIndex].src}
              alt={galleryItems[lightboxIndex].title}
              style={{
                maxWidth: '90vw',
                maxHeight: '85vh',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
                display: 'block',
                border: '1px solid rgba(212, 175, 55, 0.4)',
                background: 'transparent',
              }}
            />
          </div>
        </div>
      )}

    </div>
  );
}
