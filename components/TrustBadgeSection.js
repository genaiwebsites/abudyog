import React from 'react';
import Image from 'next/image';

export default function TrustBadgeSection() {
  return (
    <section className="trust-badge-section" style={{ background: 'var(--cream)', padding: '64px 8%', borderTop: '1px solid rgba(18, 42, 28, 0.08)' }}>
      <div style={{ maxWidth: '1080px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Image
            src="/ab_udyog_associations_certifications_marketplaces.png"
            alt="AB Udyog Associations, Certifications, and Available Marketplaces"
            width={1024}
            height={275}
            style={{
              maxWidth: '100%',
              height: 'auto',
              display: 'block',
              margin: '0 auto',
              objectFit: 'contain'
            }}
            priority
          />
        </div>
      </div>
    </section>
  );
}
