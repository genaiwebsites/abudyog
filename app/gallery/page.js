"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Eye, Grid } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    src: "/refinery_plant.png",
    title: "Steam Refinery Plant",
    category: "Refinery",
    description: "Continuous physical steam refining facility with a 200 TPD processing capacity, ensuring chemical-free purification."
  },
  {
    id: 2,
    src: "/quality_lab.png",
    title: "Quality Control Laboratory",
    category: "Laboratory",
    description: "Fully-equipped in-house analytical lab testing every batch for Gamma Oryzanol potency, moisture, and acid values."
  },
  {
    id: 3,
    src: "/hero_rice_paddy.png",
    title: "Sourcing & Paddy Fields",
    category: "Sourcing",
    description: "Sustainably cultivated rice paddy fields across West Bengal, ensuring fresh, nutrient-rich raw rice bran."
  },
  {
    id: 4,
    src: "/mustard_oil.png",
    title: "Cold Press Mustard Extraction",
    category: "Refinery",
    description: "Premium mustard seed processing unit retaining natural pungency and essential fatty acids."
  },
  {
    id: 5,
    src: "/ab_health_product.png",
    title: "Gamma Oryzanol Isolation",
    category: "Derivatives",
    description: "Advanced extraction setup dedicated to isolating high-purity natural antioxidant Gamma Oryzanol (AB Health)."
  },
  {
    id: 6,
    src: "/dorb_feed.png",
    title: "De-Oiled Rice Bran Processing",
    category: "Derivatives",
    description: "Processing feed cake into dry, high-protein DORB flakes, suitable for premium poultry and cattle feeds."
  },
  {
    id: 7,
    src: "/rice_bran_wax.png",
    title: "Industrial Wax Refinement",
    category: "Derivatives",
    description: "Refinement lines for high-melting-point rice bran wax, serving cosmetics and food packaging sectors."
  },
  {
    id: 8,
    src: "/rice_bran_lecithin.png",
    title: "Lecithin Separation Columns",
    category: "Derivatives",
    description: "Centrifugal separation columns separating pure liquid lecithin, a key emulsifier for food and pharmaceutical industries."
  },
  {
    id: 9,
    src: "/premium_cooking_oil.png",
    title: "Automated Bottling Line",
    category: "Refinery",
    description: "Precision automated packaging and bottling systems for Jeevan Rekha Rice Bran Oil, ensuring zero contamination."
  },
  {
    id: 10,
    src: "/healthy_cooking_bg.png",
    title: "Farming Communities",
    category: "Sourcing",
    description: "Partnering with local agricultural cooperatives to procure raw rice bran directly within 24 hours of milling."
  }
];

const categories = ["All", "Refinery", "Laboratory", "Sourcing", "Derivatives"];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Lightbox controls
  const openLightbox = (index) => {
    // Find the item within the filtered list
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
        <div className="hero-bg" style={{ backgroundImage: "url('/healthy_cooking_bg.png')", opacity: 0.18 }}></div>
        <div className="hero-accent"></div>
        <div className="hero-content" style={{ textAlign: 'center', margin: '0 auto', maxWidth: '800px' }}>
          <div className="hero-eyebrow" style={{ justifyContent: 'center' }}>
            <span>Visual Archive</span>
          </div>
          <h1 className="hero-title" style={{ margin: '0 auto' }}>
            Refinery &amp;<br />
            <em>Infrastructure.</em>
          </h1>
          <p className="hero-subtitle" style={{ margin: '24px auto 0 auto', maxWidth: '600px' }}>
            A photographic showcase of our steam refinery plants, testing laboratories, raw material sourcing, and specialized industrial derivative facilities.
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
              borderRadius: '50%',
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
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '900px',
              width: '100%',
              zIndex: 10001,
              marginTop: '40px',
              marginBottom: '40px'
            }}
          >
            <div style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '4/3',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 30px 60px rgba(0,0,0,0.6)',
              border: '1px solid rgba(200, 153, 42, 0.25)'
            }}>
              <Image
                src={galleryItems[lightboxIndex].src}
                alt={galleryItems[lightboxIndex].title}
                fill
                style={{ objectFit: 'contain', background: '#000' }}
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
