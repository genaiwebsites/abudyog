# 📐 Master OpenGraph & Social Preview Rulebook for Production Websites

> **Enterprise Best Practices Guide**  
> *A bulletproof, step-by-step blueprint for implementing flawless OpenGraph and Twitter card link previews across Next.js, React, and modern web applications.*

---

## 📋 Table of Contents
1. [Core Principles & Common Pitfalls](#1-core-principles--common-pitfalls)
2. [Dual-Format Asset Architecture](#2-dual-format-asset-architecture)
3. [Smart Image Treatment Logic](#3-smart-image-treatment-logic)
4. [Next.js App Router Implementation Template](#4-nextjs-app-router-implementation-template)
5. [Automated Python Asset Generator Script](#5-automated-python-asset-generator-script)
6. [Platform-Specific Rules & Requirements](#6-platform-specific-rules--requirements)
7. [Instant Testing & Cache-Busting Protocol](#7-instant-testing--cache-busting-protocol)

---

## 1. Core Principles & Common Pitfalls

### Why 90% of OpenGraph Implementations Fail:
1. **Relative Paths Instead of Absolute HTTPS URLs:** Social media crawlers (WhatsApp, Facebook, LinkedIn, Twitter/X) do **not** resolve relative paths like `/og.jpg`. Relative URLs cause crawlers to drop the image entirely and render text-only previews.
2. **Aspect Ratio Mismatch:** Using 1:1 square images for 1.91:1 wide card tags (or vice versa) results in ugly top/bottom cropping or horizontal text clipping.
3. **Missing MIME Types & Secure URLs:** WhatsApp and iMessage require explicit `secureUrl`, `width`, `height`, and `type: 'image/jpeg'` or `'image/png'` properties.
4. **Aggressive Crawler Caching:** WhatsApp, Meta, and LinkedIn cache link previews on their edge servers for weeks. Deploying code changes will **not** automatically update existing cached link previews unless flushed.

---

## 2. Dual-Format Asset Architecture

To support both **wide feed banners** (Facebook feeds, LinkedIn cards, Twitter large cards) and **compact side-by-side chat thumbnails** (WhatsApp chat links, Slack, iMessage, Google Search mobile snippets), every page must offer **two distinct image formats**:

| Format | Target Dimensions | Aspect Ratio | Primary Use Case |
| :--- | :--- | :--- | :--- |
| **Wide Landscape Banner** | **1200 × 630 px** | **1.91:1** | Facebook feed link posts, LinkedIn large post cards, Twitter `summary_large_image`, Discord embeds. |
| **Square Thumbnail** | **800 × 800 px** | **1:1** | WhatsApp compact chat previews, Slack inline links, iMessage previews, Google Search mobile thumbnails. |

---

## 3. Smart Image Treatment Logic

When generating square (1:1) assets from non-square source graphics, apply treatment based on image content:

```
                  ┌─────────────────────────────────────────┐
                  │          Source Image Asset             │
                  └────────────────────┬────────────────────┘
                                       │
                      Does it contain text / logos / packshots?
                                       │
                      ┌────────────────┴────────────────┐
                      ▼                                 ▼
                     YES                                NO
       ┌───────────────────────────────┐ ┌───────────────────────────────┐
       │ Aspect Contain + Color Padding│ │ Full-Bleed 1:1 Zoom Cover     │
       │ Protects 100% of text/logos   │ │ Zero colored bars; maximum    │
       │ from being cropped or cut.    │ │ visual impact for pure photos.│
       └───────────────────────────────┘ └───────────────────────────────┘
```

1. **Pure Photos & Photography (Factory photos, dish photography, nature, team shots):**
   - Use **Full-Bleed 1:1 Zoom Cover** (`ImageOps.fit`).
   - Fills the 800×800 square completely without top/bottom colored bars.
2. **Packaging, Logos, & Text Banners (Product pouches, brand logos, blog title cards):**
   - Use **Aspect Containment with Background Padding**.
   - Scales the image proportionally and pads edges with a matching background color sampled from the asset border. Ensures 100% of text and product packaging remains complete and cut-free.

---

## 4. Next.js App Router Implementation Template

### A. Root `src/app/layout.tsx` (Global Metadata)

```typescript
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Brand Name | Purity. Health. Happiness.',
    template: '%s | Brand Name',
  },
  description: 'Enterprise meta description under 155 characters for maximum CTR.',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: 'Brand Name',
    title: 'Brand Name | Purity. Health. Happiness.',
    description: 'Enterprise meta description under 155 characters for maximum CTR.',
    images: [
      {
        url: `${siteUrl}/og/og_homepage.jpg`,
        secureUrl: `${siteUrl}/og/og_homepage.jpg`,
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Brand Name Product Range Banner',
      },
      {
        url: `${siteUrl}/og/square/sq_homepage.jpg`,
        secureUrl: `${siteUrl}/og/square/sq_homepage.jpg`,
        width: 800,
        height: 800,
        type: 'image/jpeg',
        alt: 'Brand Name Logo Thumbnail',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brand Name | Purity. Health. Happiness.',
    description: 'Enterprise meta description for social sharing.',
    images: [
      {
        url: `${siteUrl}/og/og_homepage.jpg`,
        secureUrl: `${siteUrl}/og/og_homepage.jpg`,
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Brand Name Product Range Banner',
      },
      {
        url: `${siteUrl}/og/square/sq_homepage.jpg`,
        secureUrl: `${siteUrl}/og/square/sq_homepage.jpg`,
        width: 800,
        height: 800,
        type: 'image/jpeg',
        alt: 'Brand Name Logo Thumbnail',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
};
```

### B. Inner Pages / Product Pages (`src/app/products/[slug]/layout.tsx`)

```typescript
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Product Name',
  description: 'Detailed product description with key selling points and certifications.',
  openGraph: {
    title: 'Product Name | Brand Name',
    description: 'Detailed product description for social previews.',
    url: 'https://yourdomain.com/products/product-name',
    siteName: 'Brand Name',
    type: 'website',
    images: [
      {
        url: 'https://yourdomain.com/og/og_product_name.jpg',
        secureUrl: 'https://yourdomain.com/og/og_product_name.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Product Name Banner',
      },
      {
        url: 'https://yourdomain.com/og/square/sq_product_name.jpg',
        secureUrl: 'https://yourdomain.com/og/square/sq_product_name.jpg',
        width: 800,
        height: 800,
        type: 'image/jpeg',
        alt: 'Product Name Thumbnail',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Product Name | Brand Name',
    description: 'Detailed product description for Twitter card.',
    images: [
      {
        url: 'https://yourdomain.com/og/og_product_name.jpg',
        secureUrl: 'https://yourdomain.com/og/og_product_name.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Product Name Banner',
      },
      {
        url: 'https://yourdomain.com/og/square/sq_product_name.jpg',
        secureUrl: 'https://yourdomain.com/og/square/sq_product_name.jpg',
        width: 800,
        height: 800,
        type: 'image/jpeg',
        alt: 'Product Name Thumbnail',
      },
    ],
  },
};
```

### C. Dynamic Routes (`src/app/blogs/[slug]/page.tsx` or `src/app/products/[slug]/page.tsx`)

```typescript
import { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com';
  
  // Fetch item data dynamically
  const item = await getItemBySlug(slug);

  return {
    title: item.title,
    description: item.summary,
    openGraph: {
      title: `${item.title} | Brand Name`,
      description: item.summary,
      url: `${siteUrl}/blogs/${slug}`,
      siteName: 'Brand Name',
      type: 'article',
      images: [
        {
          url: `${siteUrl}/og/og_${slug}.jpg`,
          secureUrl: `${siteUrl}/og/og_${slug}.jpg`,
          width: 1200,
          height: 630,
          type: 'image/jpeg',
          alt: `${item.title} Banner`,
        },
        {
          url: `${siteUrl}/og/square/sq_${slug}.jpg`,
          secureUrl: `${siteUrl}/og/square/sq_${slug}.jpg`,
          width: 800,
          height: 800,
          type: 'image/jpeg',
          alt: `${item.title} Thumbnail`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${item.title} | Brand Name`,
      description: item.summary,
      images: [
        {
          url: `${siteUrl}/og/og_${slug}.jpg`,
          secureUrl: `${siteUrl}/og/og_${slug}.jpg`,
          width: 1200,
          height: 630,
          type: 'image/jpeg',
          alt: `${item.title} Banner`,
        },
        {
          url: `${siteUrl}/og/square/sq_${slug}.jpg`,
          secureUrl: `${siteUrl}/og/square/sq_${slug}.jpg`,
          width: 800,
          height: 800,
          type: 'image/jpeg',
          alt: `${item.title} Thumbnail`,
        },
      ],
    },
  };
}
```

---

## 5. Automated Python Asset Generator Script

Save this script as `scripts/generate_og_assets.py`. It reads raw assets from `public/` and generates 100% compliant `1200x630` and `800x800` OpenGraph assets.

```python
import os
from PIL import Image, ImageOps

PUBLIC_DIR = r'public'
OG_WIDE_DIR = os.path.join(PUBLIC_DIR, 'og')
OG_SQ_DIR = os.path.join(PUBLIC_DIR, 'og', 'square')

os.makedirs(OG_WIDE_DIR, exist_ok=True)
os.makedirs(OG_SQ_DIR, exist_ok=True)

def create_wide_banner(src_path, out_path):
    """Creates a standard 1200x630 (1.91:1) OpenGraph wide card image."""
    with Image.open(src_path) as img:
        img = img.convert('RGB')
        fitted = ImageOps.fit(img, (1200, 630), Image.Resampling.LANCZOS)
        fitted.save(out_path, 'JPEG', quality=92, optimize=True)
        print(f"✅ Created Wide OG: {os.path.basename(out_path)}")

def create_square_cover(src_path, out_path):
    """Creates an 800x800 full-bleed cover image for photos (No colored bars!)."""
    with Image.open(src_path) as img:
        img = img.convert('RGB')
        fitted = ImageOps.fit(img, (800, 800), Image.Resampling.LANCZOS)
        fitted.save(out_path, 'JPEG', quality=92, optimize=True)
        print(f"✅ Created Square Cover (Photo): {os.path.basename(out_path)}")

def create_square_contain(src_path, out_path):
    """Creates an 800x800 padded image to protect text & packaging logos."""
    with Image.open(src_path) as img:
        img = img.convert('RGBA')
        top_left = img.getpixel((0, 0))
        bg_color = (top_left[0], top_left[1], top_left[2], 255) if len(top_left) == 4 and top_left[3] == 255 else (255, 255, 255, 255)
        
        canvas = Image.new('RGBA', (800, 800), bg_color)
        w, h = img.size
        ratio = min(800 / w, 800 / h)
        new_w, new_h = int(w * ratio), int(h * ratio)
        resized = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
        
        offset = ((800 - new_w) // 2, (800 - new_h) // 2)
        canvas.paste(resized, offset, resized)
        rgb_canvas = canvas.convert('RGB')
        rgb_canvas.save(out_path, 'JPEG', quality=92, optimize=True)
        print(f"✅ Created Square Contain (Text Protected): {os.path.basename(out_path)}")
```

---

## 6. Platform-Specific Rules & Requirements

| Platform | Recommended Dimensions | Key Requirement | Debugging Tool |
| :--- | :--- | :--- | :--- |
| **Facebook / Meta** | `1200 × 630 px` (1.91:1) | Needs absolute HTTPS URL. Max file size: 8 MB. | [Meta Sharing Debugger](https://developers.facebook.com/tools/debug/) |
| **WhatsApp** | `800 × 800 px` or `1200 × 630 px` | Requires `secureUrl`, file size **< 300 KB** for fast mobile loading. | Append `?v=1` to shared link |
| **LinkedIn** | `1200 × 630 px` (1.91:1) | Strictly ignores relative paths. Clears cache via inspector. | [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) |
| **Twitter / X** | `1200 × 630 px` (Large) or `800 × 800 px` | Controlled via `twitter:card` (`summary_large_image` or `summary`). | [OpenGraph.xyz](https://www.opengraph.xyz/) |
| **Google Search** | `1200 × 630 px` | Requires `max-image-preview: large` in robots meta tag. | [Google Rich Results Test](https://search.google.com/test/rich-results) |

---

## 7. Instant Testing & Cache-Busting Protocol

### Localhost Verification
1. Open `http://localhost:3000/your-page`.
2. View Page Source (`Ctrl + U`).
3. Confirm that `<meta property="og:image" content="https://yourdomain.com/og/og_name.jpg">` points to an absolute HTTPS URL.

### Live Server Cache Flushing
When you deploy changes to production, social networks cache the old preview. Use these actions to flush server cache:
1. **Facebook & WhatsApp Cache Flush:**  
   Go to [Meta Sharing Debugger](https://developers.facebook.com/tools/debug/), paste your URL, and click **Scrape Again**.
2. **LinkedIn Cache Flush:**  
   Go to [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/), paste your URL, and click **Inspect**.
3. **Instant WhatsApp Test Trick:**  
   Append `?v=1` or `?v=2` to your link when sharing in WhatsApp (e.g. `https://yourdomain.com/products/item?v=1`). WhatsApp treats it as a fresh URL and bypasses its cached link card immediately!
