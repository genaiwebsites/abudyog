# SEO Audit: AB Udyog Pvt. Ltd. (`abudyog.in`)

**Audit Type**: Deep Technical, On-Page & SERP Competitive Audit  
**Target Codebase**: `C:\Projects\AB Udyog` (Next.js 16.2.4 App Router)  
**Production Host**: `https://www.abudyog.in`  
**Audit Date**: August 30, 2026  
**Auditor**: Senior SEO Strategist & Competitive Intelligence Lead  
**Evidence Sources**: Next.js AST Codebase Scan, Google Search Console (Coverage, Performance, CWV, Breadcrumbs), Ahrefs Crawl Report, and Regional SERP Landscapes.

---

## 1. Executive Summary & Health Scorecard

A full crawl analysis and codebase evaluation of `abudyog.in` reveals a **modern, high-performance Next.js web application with strong technical fundamentals**, but **severely impaired organic conversion and SERP click-through performance due to on-page title tag bugs, legacy 404 leaks, duplicate schema scripts, and near-orphaned byproduct subpages**.

```
┌────────────────────────────────────────────────────────────────────────┐
│ OVERALL SEO HEALTH SCORE: 77 / 100                                     │
│                                                                        │
│ • Site Architecture & Speed:     94/100 (Fast TTFB, clean routing)     │
│ • Title & Meta Tag Precision:    64/100 (Double-branding, >160 chars)  │
│ • Coverage & Legacy 404 Leaks:   56/100 (143 legacy URLs failing)      │
│ • Internal Linking Graph:        70/100 (6 byproduct spokes orphaned)  │
│ • Keyword & SERP CTR Conversion: 62/100 (1,067 impr @ Pos 8.7 = 0 clk)│
│ • Schema & Structured Markup:    80/100 (Org/Local present, dup tags)  │
└────────────────────────────────────────────────────────────────────────┘
```

### Top Risks & Opportunities:
1. **Critical Title Bug**: `app/products/[slug]/layout.js` appends `| AB Udyog` to titles, which `app/layout.js` (`%s | AB Udyog`) doubles into `... | AB Udyog | AB Udyog`, exceeding 60 characters and causing Google to rewrite SERP titles.
2. **Hidden Traffic Leak**: 143 legacy WordPress URLs are returning 404 Not Found in GSC, leaking over 2,000 monthly impressions.
3. **Zero CTR on High-Volume Terms**: `rice bran oil` (1,067 impressions, Pos 8.73) and `edible oil manufacturers in west bengal` (38 impressions, **Pos 1.37**) generate **0 clicks** due to non-optimized title hooks and missing B2B conversion intent.

---

## 2. Site Structure & Technical Architecture

### 2.1 Route Inventory & URL Quality
* **Active URLs Mapped**: 15 clean indexable routes
  - Core Pages: `/`, `/about`, `/contact`, `/infrastructure`, `/sustainability`, `/gallery`, `/products`
  - Product Spokes: `/products/ab-health`, `/products/magik-dorb`, `/products/de-oiled-rice-bran`, `/products/rice-bran-wax`, `/products/rice-bran-gums`, `/products/rice-bran-lecithin`, `/products/rice-bran-fatty-acid`, `/products/spent-bleaching-earth`
* **URL Hygiene**: 100% lowercase, hyphen-separated, zero trailing parameters, clean subfolder structure (`/products/[slug]`).
* **Sitemap Health**: [`app/sitemap.ts`](file:///c:/Projects/AB%20Udyog/app/sitemap.ts) dynamically enumerates all 15 indexable routes returning HTTP 200 OK.
* **Robots Health**: [`app/robots.ts`](file:///c:/Projects/AB%20Udyog/app/robots.ts) allows all search bots and references the canonical XML sitemap.

### 2.2 Internal Linking Graph & Click Depth
```mermaid
graph TD
    Home[Homepage /] --> About[/about/]
    Home --> Infra[/infrastructure/]
    Home --> Sust[/sustainability/]
    Home --> Contact[/contact/]
    Home --> Products[/products/]
    Products --> P1[/products/ab-health]
    Products --> P2[/products/magik-dorb]
    Products --> P3[/products/de-oiled-rice-bran]
    Products -.-> P4[/products/rice-bran-wax (1 Inlink)]
    Products -.-> P5[/products/rice-bran-gums (1 Inlink)]
    Products -.-> P6[/products/rice-bran-lecithin (1 Inlink)]
    Products -.-> P7[/products/rice-bran-fatty-acid (1 Inlink)]
    Products -.-> P8[/products/spent-bleaching-earth (1 Inlink)]
```

* **Vulnerability**: Ahrefs flagged that **6 byproduct subpages have only 1 incoming internal dofollow link** (from the `/products` list). They are completely missing from the Homepage, Infrastructure refining steps, and Sustainability circular economy content.

---

## 3. On-Page SEO & Metadata Review

### Per-Page Title, Meta Description & Heading Audit:

| URL Route | Current Title Tag | Current Meta Length | Heading Structure | Issues Identified |
| :--- | :--- | :---: | :--- | :--- |
| **`/` (Homepage)** | `AB Udyog Pvt. Ltd. \| Premium Rice Bran Oil & DORB Manufacturer in India` | 158 chars (Good) | `<h1>` in Hero, sequential `<h2>`/`<h3>` | Clean title, but lacks regional commercial hook ("West Bengal / Kolkata"). |
| **`/products`** | `Product Portfolio \| AB Udyog` | 157 chars (Good) | Missing `<h1>` (starts at `<h2>`) | **No semantic `<h1>` tag**. Leads directly with brand cards. |
| **`/products/magik-dorb`** | `Magik DORB Super Fine Animal Feed \| AB Udyog \| AB Udyog` | 134 chars (Good) | `<h1>` present | **Double-Branding Bug**. Title renders duplicate `\| AB Udyog`. |
| **`/products/ab-health`** | `AB Health Physically Refined Edible Oils \| AB Udyog \| AB Udyog` | 114 chars (Good) | `<h1>` present | **Double-Branding Bug**. |
| **`/products/rice-bran-wax`** | `Refined Rice Bran Wax (76°C MP) \| AB Udyog \| AB Udyog` | 134 chars (Good) | `<h1>` present | **Double-Branding Bug**. |
| **`/about`** | `Our Corporate Story \| AB Udyog` | **193 chars (Too Long)** | `<h1>` in Hero, clean `<h2>` | Meta description truncated on mobile/desktop SERPs. |
| **`/infrastructure`** | `Manufacturing Infrastructure \| AB Udyog` | **188 chars (Too Long)** | `<h1>` in Hero, clean `<h2>` | Meta description truncated. Missing links to Wax/Gums. |
| **`/gallery`** | `Visual Archive \| AB Udyog` | **182 chars (Too Long)** | `<h1>` present | Meta description truncated. |

---

## 4. Keyword Opportunities & SERP Performance (Real GSC Data)

| Target Search Query | Current GSC Metrics | Current Rank | Missing Search Intent / Content Gap |
| :--- | :---: | :---: | :--- |
| `rice bran oil` | 1,067 Impr, 0 Clicks | **8.73** | Generic consumer query. Needs high-intent title highlighting physical refining purity & 10,000+ PPM Oryzanol. |
| `edible oil manufacturers in west bengal` | 38 Impr, 0 Clicks | **1.37** | **Rank #1 with 0% CTR!** Current title is generic brand text; needs explicit "Factory Direct 300 TPD Supply". |
| `dorb` / `dorb cattle feed` | 160 Impr, 3 Clicks | **7.05** | B2B feed millers searching for protein specifications (16% Min) and bulk delivery terms. |
| `dorb full form` | 67 Impr, 1 Click | **3.37** | Rank #3. Needs direct answer snippet ("De-Oiled Rice Bran") for Google featured snippet extraction. |
| `rice bran oil kaise banta hai` | 101 Impr, 0 Clicks | **10.16** | Conversational extraction process search. Needs bilingual FAQ schema + step-by-step physical refining guide. |
| `rice bran oil manufacturers in india` | 24 Impr, 2 Clicks | **6.62** | Exporter and institutional bulk buyer query. Needs export certifications (ISO/FSSC 22000) highlighted in snippet. |

---

## 5. Competitor & SERP Landscape Comparison

| Competitor / Entity | Organic Strengths | Weaknesses | AB Udyog Competitive Advantage |
| :--- | :--- | :--- | :--- |
| **Adani Wilmar (Fortune)** | Massive domain authority (DR 70+), heavy brand search volume. | Chemical refining focus; generic retail consumer marketing. | **100% Chemical-Free Physical Refining** (Zero caustic washing, 10,000+ PPM natural Gamma Oryzanol). |
| **Emami Agrotech (Healthy & Tasty)** | Strong regional distribution in Bengal & Bihar. | Multi-oil conglomerate; lacks dedicated B2B byproduct technical transparency. | **Integrated 300 TPD Complex**: In-house NABL analytical lab, direct factory supply of DORB, Wax, Gums, Lecithin. |
| **Local Solvent Extraction Mills** | Local regional trade presence. | Outdated HTTP/WordPress sites with poor mobile experience, no structured data, zero digital footprint. | **Modern Next.js Web App**, fast Core Web Vitals, rich schema graph, and verified industrial credentials. |

---

## 6. Prioritized Recommendations & Action Plan

```
┌────────────────────────────────────────────────────────────────────────┐
│ PHASE 1: IMMEDIATE CRITICAL REPAIR (Day 1 - 2)                         │
│ 1. Fix double-branding bug in app/products/[slug]/layout.js            │
│ 2. Deploy 301 Redirect Map in next.config.mjs for 143 legacy 404s      │
│ 3. Shorten meta descriptions for About, Infrastructure, Gallery        │
│ 4. Add screen-reader <h1> on app/products/page.js                      │
├────────────────────────────────────────────────────────────────────────┤
│ PHASE 2: INTERNAL LINK GRAPH & SCHEMA SCOPING (Week 1)                 │
│ 1. Add contextual cross-links on Infrastructure & Sustainability pages │
│ 2. Scope JsonLd.tsx to prevent duplicate Organization schemas          │
│ 3. Deploy FAQPage JSON-LD on high-intent product routes                │
├────────────────────────────────────────────────────────────────────────┤
│ PHASE 3: EXPANSION & CITATION SCALING (Week 2 - 4)                     │
│ 1. Deploy public/llms.txt for AI Search & Agent retrieval              │
│ 2. Launch /compare/ and /feed/ programmatic knowledge hubs             │
│ 3. Re-submit updated XML sitemap to Google Search Console              │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 7. Sources & Audited Codebase Artifacts

- [`app/layout.js`](file:///c:/Projects/AB%20Udyog/app/layout.js) (Root metadata & `%s | AB Udyog` template)
- [`app/products/[slug]/layout.js`](file:///c:/Projects/AB%20Udyog/app/products/%5Bslug%5D/layout.js) (Product title mapping & OG tags)
- [`app/products/page.js`](file:///c:/Projects/AB%20Udyog/app/products/page.js) (Heading hierarchy & catalog structure)
- [`components/JsonLd.tsx`](file:///c:/Projects/AB%20Udyog/components/JsonLd.tsx) (Organization, LocalBusiness & Product schemas)
- [`app/robots.ts`](file:///c:/Projects/AB%20Udyog/app/robots.ts) & [`app/sitemap.ts`](file:///c:/Projects/AB%20Udyog/app/sitemap.ts)
- `abudyog.in-Coverage-2026-08-30.xlsx` (143 legacy 404 URLs)
- `abudyog.in-Performance-on-Search-2026-08-30.xlsx` (597 tracked queries, 76 pages)

---

## 8. Rerun Inputs
```yaml
workflow: firecrawl-seo-audit
site: https://www.abudyog.in
keywords:
  - rice bran oil
  - edible oil manufacturers in west bengal
  - dorb cattle feed
  - de oiled rice bran
  - rice bran wax
  - dorb full form
output: markdown
target_file: .agents/audit/firecrawl_seo_audit_report.md
```
