import React from 'react';
import Link from 'next/link';

export default function CtaBanner({ title, subtitle, btnText, btnLink }) {
  return (
    <div className="cta-banner">
      <div className="cta-text">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      <div className="cta-action">
        <Link href={btnLink} className="btn-dark">
          {btnText}
        </Link>
      </div>
    </div>
  );
}
