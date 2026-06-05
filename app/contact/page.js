"use client";
import React, { useEffect } from 'react';
import { MapPin, Mail, Phone, Clock, ArrowRight } from 'lucide-react';

export default function Contact() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div style={{ background: 'var(--cream)' }}>
      {/* ══ HERO BANNER ══ */}
      <section className="hero-subpage">
        <div className="hero-bg" style={{ backgroundImage: "url('/quality_lab.png')", opacity: 0.25 }}></div>
        <div className="hero-accent"></div>
        <div className="hero-content" style={{ textAlign: 'center', margin: '0 auto', maxWidth: '800px' }}>
          <div className="hero-eyebrow" style={{ justifyContent: 'center' }}>
            <span>Connect With Us</span>
          </div>
          <h1 className="hero-title" style={{ margin: '0 auto' }}>
            Partner for<br />
            <em>Excellence.</em>
          </h1>
          <p className="hero-subtitle" style={{ margin: '24px auto 0 auto', maxWidth: '600px' }}>
            Whether you are looking for distributorship, bulk orders of edible oils, or premium animal feed, our team is ready to assist you.
          </p>
        </div>
      </section>

      {/* ══ CONTACT DETAILS GRID ══ */}
      <section style={{ padding: '56px 8%', position: 'relative', background: 'var(--cream)' }}>
        <div className="contact-cards-container">
          
          <div className="contact-card-premium reveal">
            <div className="contact-card-icon-container">
              <MapPin size={26} />
            </div>
            <h3 className="contact-card-title">Corporate Office</h3>
            <p className="contact-card-body">
              11A, Rawdon Street,<br />
              Kolkata - 700017,<br />
              West Bengal, India
            </p>
            <a href="https://maps.google.com/?q=AB+Udyog+11A+Rawdon+Street+Kolkata" target="_blank" rel="noopener noreferrer" className="contact-card-link">
              Get Directions <ArrowRight size={14} />
            </a>
          </div>

          <div className="contact-card-premium reveal">
            <div className="contact-card-icon-container">
              <Mail size={26} />
            </div>
            <h3 className="contact-card-title">Email Address</h3>
            <p className="contact-card-body">
              Connect with our procurement or corporate sales office directly via email.
              <br /><br />
              <strong style={{ color: 'var(--green-deep)' }}>General:</strong> info@abudyog.in
            </p>
            <a href="mailto:info@abudyog.in" className="contact-card-link">
              Send Email <ArrowRight size={14} />
            </a>
          </div>

          <div className="contact-card-premium reveal">
            <div className="contact-card-icon-container">
              <Phone size={26} />
            </div>
            <h3 className="contact-card-title">Phone Support</h3>
            <p className="contact-card-body">
              Speak directly with our distributor desks and bulk dispatch support teams.
              <br /><br />
              <strong style={{ color: 'var(--green-deep)' }}>Sales:</strong> +91 74392 89709
            </p>
            <a href="tel:+917439289709" className="contact-card-link">
              Call Now <ArrowRight size={14} />
            </a>
          </div>

        </div>

        {/* ══ SPLIT FORM & MAP ══ */}
        <div className="contact-split-grid reveal">
          
          {/* Map Side */}
          <div className="contact-map-card">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.5!2d88.35!3d22.54!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDMyJzI0LjAiTiA4OMKwMjEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              allowFullScreen="" 
              loading="lazy"
              title="AB Udyog Corporate Office Location Map">
            </iframe>
            <div className="contact-map-badge">
              <h4 style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: '14px', fontWeight: 600, color: 'var(--green-deep)' }}>AB Udyog Pvt. Ltd.</h4>
              <p style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '4px' }}>Rawdon Street, Kolkata</p>
            </div>
          </div>

          {/* Form Side */}
          <div className="contact-form-card">
            <div className="section-eyebrow">Direct Inquiry</div>
            <h3 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: '40px', color: 'var(--green-deep)', marginBottom: '32px', lineHeight: 1.1 }}>Send us a Message</h3>
            
            <form>
              <div className="contact-form-row">
                <div>
                  <label htmlFor="first-name">First Name</label>
                  <input type="text" id="first-name" placeholder="John" required />
                </div>
                <div>
                  <label htmlFor="last-name">Last Name</label>
                  <input type="text" id="last-name" placeholder="Doe" required />
                </div>
              </div>
              <div className="contact-form-row">
                <div>
                  <label htmlFor="email-address">Email Address</label>
                  <input type="email" id="email-address" placeholder="john.doe@example.com" required />
                </div>
                <div>
                  <label htmlFor="phone-number">Phone Number</label>
                  <input type="tel" id="phone-number" placeholder="+91 98765 43210" required />
                </div>
              </div>
              <div>
                <label htmlFor="inquiry-type">Inquiry Type</label>
                <select id="inquiry-type" defaultValue="" required>
                  <option value="" disabled>Select Inquiry Type</option>
                  <option value="distributorship">Distributorship</option>
                  <option value="bulk-order">Bulk Edible Oil Order</option>
                  <option value="animal-feed">Animal Feed (DORB)</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>
              <div>
                <label htmlFor="message-body">Your Message</label>
                <textarea id="message-body" placeholder="Describe your inquiry details..." rows="4" required></textarea>
              </div>
              
              <button type="submit" className="btn-primary" style={{ marginTop: '8px', padding: '18px 32px', fontSize: '13px', width: '100%', textAlign: 'center', cursor: 'pointer' }}>
                Submit Inquiry
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
}
