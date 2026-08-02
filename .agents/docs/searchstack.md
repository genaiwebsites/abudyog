# Next.js App Router Enterprise Search, Verification, Social & Telemetry Master Playbook (`searchstack.md`)

This document is a client-agnostic, production-grade architectural specification for building an enterprise SEO, Search Engine Verification, Social Media Card, B2B/B2C Entity Graph, and Telemetry Stack in Next.js 14/15/16 App Router using 100% TypeScript.

> [!IMPORTANT]
> **AI Agent Execution Directive**: This specification is designed to be fed directly into an AI coding assistant during project initialization or refactoring. Any AI agent executing this playbook must adhere strictly to 12-Factor App principles, zero hardcoded tracking IDs, and strongly-typed Next.js App Router APIs (`MetadataRoute`, `NextResponse`).

---

## 1. Executive Summary & Architecture Overview

An enterprise search stack transforms a static web application into a high-visibility organic acquisition engine.

### System Architecture Matrix

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│                               NEXT.JS APP ROUTER                                 │
├───────────────────────┬─────────────────────────┬────────────────────────────────┤
│    SEARCH INDEXING    │      ENTITY GRAPH       │     TELEMETRY & SOCIAL CARDS   │
├───────────────────────┼─────────────────────────┼────────────────────────────────┤
│ • app/sitemap.ts      │ • components/JsonLd.tsx │ • components/Analytics.tsx     │
│ • app/robots.ts       │   - Parent Corporation  │   - Google Tag Manager (GTM)   │
│ • app/feed.xml/route  │   - Child SubBrands     │   - Google Analytics 4 (GA4)   │
│                       │   - Marketplace sameAs  │   - Microsoft Clarity Heatmaps │
│                       │   - Geo Coordinates     │ • app/layout.tsx (OpenGraph)   │
└───────────────────────┴─────────────────────────┴────────────────────────────────┘
```

| Component Path | Technical Spec | Enterprise Requirement |
| :--- | :--- | :--- |
| `.env.example` | Environment Variables Template | 12-Factor security; zero hardcoded keys in repository code |
| `app/sitemap.ts` | Next.js `MetadataRoute.Sitemap` | Strongly-typed XML sitemap for search engines |
| `app/robots.ts` | Next.js `MetadataRoute.Robots` | Strongly-typed crawler directives & sitemap pointer |
| `app/feed.xml/route.ts` | `NextResponse` RSS 2.0 XML | News/Blog RSS feed + `<link rel="alternate">` autodiscovery |
| `components/JsonLd.tsx` | Schema.org JSON-LD | Corporation, LocalBusiness, SubBrand, Product, & Marketplace entity graph |
| `components/Analytics.tsx` | Next.js `Script` (`strategy="afterInteractive"`) | Asynchronous GTM, GA4, Clarity, & custom telemetry event helper |
| `public/BingSiteAuth.xml` | XML Verification | Bing Webmaster Tools verification file |
| `public/google-site-verification.html` | HTML Verification | Google Search Console verification fallback |
| `app/layout.tsx` | Next.js Root Metadata API | 1200x630 OpenGraph cards, Twitter cards, & GSC meta tags |

---

## 2. Environment Configuration Standard (`.env.example`)

Never commit tracking IDs, site verification strings, or domain endpoints directly into git repository code. Create `.env.example` in the project root:

```env
# Production Domain Base URL
NEXT_PUBLIC_SITE_URL=https://example.com

# Search Engine Verification Tokens
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your_gsc_verification_token_here
NEXT_PUBLIC_BING_SITE_VERIFICATION=your_bing_verification_token_here

# Telemetry & Analytics Containers
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_CLARITY_PROJECT_ID=XXXXXXXXXX

# Optional Entity Graph Overrides
NEXT_PUBLIC_GMB_URL=https://maps.google.com/?cid=YOUR_GMB_CID
NEXT_PUBLIC_INDIAMART_URL=https://www.indiamart.com/your-company/
NEXT_PUBLIC_TRADEINDIA_URL=https://www.tradeindia.com/Seller-Your-Company/
NEXT_PUBLIC_AMAZON_STORE_URL=https://www.amazon.in/stores/YourBrand
NEXT_PUBLIC_FLIPKART_STORE_URL=https://www.flipkart.com/
```

---

## 3. Implementation Code Specifications

### 3.1 Dynamic XML Sitemap (`app/sitemap.ts`)

```typescript
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';

  // Define static core routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  return staticRoutes;
}
```

---

### 3.2 Search Crawler Control (`app/robots.ts`)

```typescript
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
```

---

### 3.3 Dynamic RSS 2.0 XML Feed & Autodiscovery (`app/feed.xml/route.ts`)

RSS feeds allow third-party trade aggregators, B2B portals, and AI search engines (Perplexity, ChatGPT Search, Claude) to passively discover new blog posts and corporate announcements without manual submission.

```typescript
import { NextResponse } from 'next/server';

export async function GET(): Promise<NextResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Company Corporate Updates</title>
    <link>${baseUrl}</link>
    <description>Latest product releases and corporate updates.</description>
    <language>en-us</language>
    <copyright>© ${new Date().getFullYear()} Corporation. All rights reserved.</copyright>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
    <item>
      <title>Corporate Platform Launch</title>
      <link>${baseUrl}</link>
      <guid>${baseUrl}</guid>
      <pubDate>${new Date().toUTCString()}</pubDate>
      <description>Official announcement of company product platform updates.</description>
    </item>
  </channel>
</rss>`;

  return new NextResponse(rssXml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
```

---

### 3.4 Multi-Brand & Marketplace Entity Graph (`components/JsonLd.tsx`)

This component establishes explicit parent-child brand relationships, B2B marketplace `sameAs` entity links (IndiaMART, TradeIndia, Google Business Profile), and product specs.

```typescript
import React from 'react';

interface JsonLdProps {
  type?: 'Organization' | 'Product' | 'Breadcrumb';
  productData?: {
    name: string;
    description: string;
    image?: string;
    category?: string;
    mpn?: string;
    url?: string;
  };
}

export default function JsonLd({ type = 'Organization', productData }: JsonLdProps): React.ReactElement {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';

  // Corporation & Entity Graph Schema
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Corporation',
    '@id': `${baseUrl}/#organization`,
    name: 'Company Legal Name Pvt. Ltd.',
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description: 'Enterprise manufacturer and brand operator.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'City',
      addressRegion: 'State',
      addressCountry: 'IN',
    },
    brand: [
      {
        '@type': 'Brand',
        name: 'Child Brand Name',
        url: 'https://childbrand.com',
        sameAs: [
          process.env.NEXT_PUBLIC_AMAZON_STORE_URL,
          process.env.NEXT_PUBLIC_FLIPKART_STORE_URL,
        ].filter(Boolean),
      },
    ],
    sameAs: [
      process.env.NEXT_PUBLIC_GMB_URL,
      process.env.NEXT_PUBLIC_INDIAMART_URL,
      process.env.NEXT_PUBLIC_TRADEINDIA_URL,
    ].filter(Boolean),
  };

  // Optional Product Schema (B2B Lead-Gen or E-Commerce)
  const productSchema = productData
    ? {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: productData.name,
        description: productData.description,
        image: productData.image ? `${baseUrl}${productData.image}` : `${baseUrl}/logo.png`,
        category: productData.category || 'Industrial Products',
        mpn: productData.mpn || 'PROD-001',
        brand: {
          '@type': 'Brand',
          name: 'Brand Name',
        },
        manufacturer: {
          '@type': 'Organization',
          name: 'Company Legal Name',
        },
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      {productSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      )}
    </>
  );
}
```

---

### 3.5 Asynchronous Telemetry & Event Tracking (`components/Analytics.tsx`)

```typescript
"use client";
import React from 'react';
import Script from 'next/script';

export type ConversionType = 'lead_form' | 'whatsapp' | 'email' | 'call' | 'rfq';

export function trackConversion(type: ConversionType, label?: string): void {
  if (typeof window === 'undefined') return;

  const eventPayload = {
    event: 'conversion_event',
    conversion_type: type,
    label: label || 'general',
    timestamp: new Date().toISOString(),
  };

  if ((window as any).dataLayer) {
    (window as any).dataLayer.push(eventPayload);
  }

  if (typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', 'conversion', {
      event_category: 'Lead',
      event_label: `${type} - ${label || 'general'}`,
    });
  }

  console.log('[Analytics Event]:', eventPayload);
}

export default function Analytics(): React.ReactElement | null {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

  return (
    <>
      {/* Google Tag Manager */}
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

      {/* Google Analytics 4 */}
      {gaId && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
          <Script
            id="ga4-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', { page_path: window.location.pathname });
              `,
            }}
          />
        </>
      )}

      {/* Microsoft Clarity */}
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
```

---

### 3.6 Root Layout Integration (`app/layout.tsx` / `app/layout.js`)

```typescript
import JsonLd from '@/components/JsonLd';
import Analytics from '@/components/Analytics';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';

export const metadata = {
  title: {
    default: "Company Name | Primary Value Proposition",
    template: "%s | Company Name",
  },
  description: "Company meta description explaining products and services.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: {
      'msvalidate.01': process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || '',
    },
  },
  openGraph: {
    title: "Company Name | Primary Value Proposition",
    description: "Company overview for social sharing.",
    url: siteUrl,
    siteName: 'Company Name',
    images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Company Name",
    images: [`${siteUrl}/og-image.png`],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <JsonLd type="Organization" />
        <link rel="alternate" type="application/rss+xml" title="RSS Feed" href={`${siteUrl}/feed.xml`} />
      </head>
      <body>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
```

---

## 4. Step-by-Step AI Agent Execution Checklist

When initializing a new Next.js project with this search stack:

- [ ] **Step 1**: Create `.env.example` in project root with zero hardcoded tracking keys.
- [ ] **Step 2**: Create `app/sitemap.ts` implementing Next.js `MetadataRoute.Sitemap`.
- [ ] **Step 3**: Create `app/robots.ts` pointing to `${baseUrl}/sitemap.xml`.
- [ ] **Step 4**: Create `app/feed.xml/route.ts` RSS 2.0 handler.
- [ ] **Step 5**: Create `components/JsonLd.tsx` modeling Organization, Brands, and Marketplace `sameAs` arrays.
- [ ] **Step 6**: Create `components/Analytics.tsx` loading GTM, GA4, Clarity, and exporting `trackConversion()`.
- [ ] **Step 7**: Create verification templates `public/BingSiteAuth.xml` and `public/google-site-verification.html`.
- [ ] **Step 8**: Update `app/layout.tsx` with OpenGraph metadata and RSS autodiscovery `<link rel="alternate">`.
- [ ] **Step 9**: Execute `npm run build` and verify 0 TypeScript / compilation errors.
