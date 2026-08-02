"use client";
import React from 'react';
import Script from 'next/script';

// ═════════════════════════════════════════════════════════════════════════════
// TELEMETRY CONTAINER CONFIGURATION (In-Code Constants)
// ═════════════════════════════════════════════════════════════════════════════
export const GTM_CONTAINER_ID = "GTM-WD4WZBRK";
export const GA4_MEASUREMENT_ID = "G-7X7DN3CD1W";
export const CLARITY_PROJECT_ID = "";     // Set when provided

export type B2BInquiryType = 'whatsapp' | 'email' | 'call' | 'rfq' | 'spec_sheet';

export function trackB2BConversion(inquiryType: B2BInquiryType, productSlug?: string): void {
  if (typeof window === 'undefined') return;

  const eventPayload = {
    event: 'b2b_inquiry',
    inquiry_type: inquiryType,
    product_slug: productSlug || 'general',
    timestamp: new Date().toISOString(),
  };

  // Push to GTM dataLayer if available
  if ((window as any).dataLayer) {
    (window as any).dataLayer.push(eventPayload);
  }

  // Push to GA4 gtag if available
  if (typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', 'b2b_inquiry', {
      event_category: 'B2B Lead',
      event_label: `${inquiryType} - ${productSlug || 'general'}`,
    });
  }

  console.log('[Analytics] B2B Telemetry Event Tracked:', eventPayload);
}

export function GtmNoScript(): React.ReactElement | null {
  const gtmId = GTM_CONTAINER_ID.trim();
  if (!gtmId) return null;

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  );
}

export default function Analytics(): React.ReactElement | null {
  const gtmId = GTM_CONTAINER_ID.trim();
  const gaId = GA4_MEASUREMENT_ID.trim();
  const clarityId = CLARITY_PROJECT_ID.trim();

  return (
    <>
      {/* ══ GOOGLE TAG MANAGER (GTM) ══ */}
      {gtmId && (
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');
            `,
          }}
        />
      )}

      {/* ══ GOOGLE ANALYTICS 4 (GA4) ══ */}
      {gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script
            id="ga4-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </>
      )}

      {/* ══ MICROSOFT CLARITY (HEATMAPS & SESSION REPLAYS) ══ */}
      {clarityId && (
        <Script
          id="clarity-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${clarityId}");
            `,
          }}
        />
      )}
    </>
  );
}
