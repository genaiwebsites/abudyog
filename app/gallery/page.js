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
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Filter items
  const filteredItems = activeFilter === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

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
      newIndex = filteredItems.length - 1;
    } else if (newIndex >= filteredItems.length) {
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
  }, [lightboxIndex, filteredItems]);

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

      {/* ══ FILTER & GALLERY GRID ══ */}
      <section style={{ padding: '80px 8%', position: 'relative' }}>
        
        {/* Filter Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          marginBottom: '50px',
          zIndex: 10,
          position: 'relative'
        }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveFilter(cat);
                setLightboxIndex(null); // Reset lightbox to avoid index misalignment
              }}
              style={{
                padding: '12px 24px',
                borderRadius: '30px',
                border: '1px solid rgba(200, 153, 42, 0.2)',
                background: activeFilter === cat ? 'var(--green-deep)' : 'var(--white)',
                color: activeFilter === cat ? 'var(--gold-light)' : 'var(--green-deep)',
                fontFamily: 'var(--font-outfit), sans-serif',
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                boxShadow: activeFilter === cat ? '0 10px 20px rgba(18, 53, 30, 0.15)' : '0 4px 10px rgba(0, 0, 0, 0.02)',
                transition: 'all 0.3s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredItems.map((item, idx) => (
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

              {/* Category Badge */}
              <span className="gallery-category-badge">{item.category}</span>

              {/* Dark Linear Gradient Overlay (always visible for contrast) */}
              <div className="gallery-overlay-gradient"></div>

              {/* Card Content (Visible hover reveal) */}
              <div className="gallery-card-content">
                <h3 className="gallery-card-title">{item.title}</h3>
                <p className="gallery-card-description">{item.description}</p>
                
                <div className="gallery-card-footer">
                  <span className="gallery-view-btn">
                    View Details <Eye size={14} style={{ marginLeft: '6px' }} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Inject custom CSS rules for hover effects, grid and lightbox */}
      <style dangerouslySetInnerHTML={{ __html: `
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 24px;
        }
        .gallery-card {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 11;
          overflow: hidden;
          cursor: pointer;
          background: var(--green-deep);
          border: none;
          border-radius: 0;
          box-shadow: none;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .gallery-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(13, 43, 26, 0.2), 0 0 30px rgba(200, 153, 42, 0.15);
        }
        .gallery-img-container {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }
        .gallery-img-container img {
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }
        .gallery-card:hover .gallery-img-container img {
          transform: scale(1.08);
        }
        .gallery-category-badge {
          position: absolute;
          top: 16px;
          left: 16px;
          background: rgba(13, 43, 26, 0.85);
          backdrop-filter: blur(8px);
          color: var(--gold-light);
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 6px 12px;
          border: 1px solid rgba(200, 153, 42, 0.25);
          z-index: 3;
          transition: all 0.3s ease;
        }
        .gallery-card:hover .gallery-category-badge {
          background: var(--gold);
          color: var(--white);
          border-color: var(--gold);
        }
        .gallery-overlay-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10, 31, 19, 0.95) 0%, rgba(10, 31, 19, 0.45) 55%, transparent 100%);
          z-index: 2;
          transition: background 0.4s ease;
        }
        .gallery-card:hover .gallery-overlay-gradient {
          background: linear-gradient(to top, rgba(10, 31, 19, 0.98) 0%, rgba(10, 31, 19, 0.6) 50%, rgba(10, 31, 19, 0.2) 100%);
        }
        .gallery-card-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 24px;
          z-index: 3;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .gallery-card-title {
          font-family: var(--font-cormorant), serif;
          font-size: 26px;
          font-weight: 300;
          color: var(--white);
          line-height: 1.2;
          margin-bottom: 0px;
          transition: color 0.3s ease, margin-bottom 0.4s ease;
        }
        .gallery-card:hover .gallery-card-title {
          color: var(--gold-light);
          margin-bottom: 6px;
        }
        .gallery-card-description {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.75);
          line-height: 1.6;
          margin-bottom: 0;
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease, margin-bottom 0.4s ease;
        }
        .gallery-card:hover .gallery-card-description {
          max-height: 80px;
          opacity: 1;
          margin-bottom: 12px;
        }
        .gallery-card-footer {
          display: flex;
          align-items: center;
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .gallery-card:hover .gallery-card-footer {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.1s;
        }
        .gallery-view-btn {
          display: inline-flex;
          align-items: center;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--gold-light);
          transition: color 0.3s ease;
        }
        .gallery-card:hover .gallery-view-btn {
          color: var(--white);
        }
        .gallery-card:hover .gallery-view-btn svg {
          transform: translateX(4px);
        }
        .lightbox-overlay {
          animation: fadeIn 0.3s ease;
        }
        .lightbox-content {
          animation: scaleIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .lightbox-nav-btn {
          position: fixed;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--white);
          width: 56px;
          height: 56px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10002;
          transition: all 0.3s ease;
        }
        .lightbox-nav-btn:hover {
          background: rgba(255, 255, 255, 0.15);
          color: var(--gold-light);
          border-color: var(--gold-light);
        }
        .lightbox-nav-btn.prev {
          left: 40px;
        }
        .lightbox-nav-btn.next {
          right: 40px;
        }
        @media (max-width: 768px) {
          .lightbox-nav-btn {
            width: 48px;
            height: 48px;
            top: auto;
            bottom: 24px;
            transform: none;
          }
          .lightbox-nav-btn.prev {
            left: 24px;
          }
          .lightbox-nav-btn.next {
            right: 24px;
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}} />

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
            justifyContent: 'flex-start',
            alignItems: 'center',
            padding: '100px 24px 60px 24px',
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
            <X size={20} />
          </button>

          {/* Navigation controls */}
          <button
            onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
            className="lightbox-nav-btn prev"
            aria-label="Previous Image"
          >
            <ChevronLeft size={28} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
            className="lightbox-nav-btn next"
            aria-label="Next Image"
          >
            <ChevronRight size={28} />
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
                src={filteredItems[lightboxIndex].src}
                alt={filteredItems[lightboxIndex].title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>

            {/* Info overlay */}
            <div style={{
              textAlign: 'center',
              color: 'var(--white)',
              marginTop: '24px',
              maxWidth: '700px'
            }}>
              <span style={{
                fontSize: '11px',
                fontWeight: 600,
                color: 'var(--gold-light)',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '6px'
              }}>
                {filteredItems[lightboxIndex].category}
              </span>
              <h2 style={{
                fontFamily: 'var(--font-cormorant), serif',
                fontSize: '32px',
                fontWeight: 300,
                marginBottom: '10px'
              }}>
                {filteredItems[lightboxIndex].title}
              </h2>
              <p style={{
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.7)',
                lineHeight: '1.6'
              }}>
                {filteredItems[lightboxIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
