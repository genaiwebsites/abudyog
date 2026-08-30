# Comprehensive Technical & On-Page SEO Audit Report

**Target Domain**: `https://www.abudyog.in`  
**Target Codebase**: `C:\Projects\AB Udyog` (Next.js 16.2.4 App Router)  
**Audit Date**: August 30, 2026  
**Auditor**: Senior SEO Strategist & Technical Auditor  
**Audit Skill Framework**: `seo-audit` v2.0.0 (Technical, On-Page, Schema, GSC Data, Site Architecture & ICE Prioritization)

---

## 1. Executive Summary & Audit Scorecard

An exhaustive technical, architectural, and on-page SEO audit was conducted across the AB Udyog Next.js codebase, cross-referenced with real **Google Search Console** performance/coverage exports, **Ahrefs Site Audit** (100% crawl), and **Lighthouse** audits.

```
┌────────────────────────────────────────────────────────────────────────┐
│ OVERALL SEO HEALTH SCORE: 76 / 100 (SOLID FOUNDATION, CRITICAL FIXES)  │
│                                                                        │
│ • Technical Crawlability & Speed: 92/100 (Clean robots, valid CWV)     │
│ • Indexation & Coverage Health:   55/100 (143 legacy 404s + proto split│
│ • On-Page Metadata & CTR:         65/100 (Double-branding, bad lengths)│
│ • Schema & Structured Data:       78/100 (Org/Plant present, dup tags) │
│ • Internal Linking & Hierarchy:   70/100 (6 orphan derivative pages)   │
│ • Content & Intent Match:         68/100 (Zero clicks on Pos 1-8 terms)│
└────────────────────────────────────────────────────────────────────────┘
```

### Critical Findings Matrix:
| Audit Domain | Score | Status | Critical Findings & Root Causes |
| :--- | :---: | :---: | :--- |
| **1. Crawlability & Robots** | **95 / 100** | PASS | `app/robots.ts` allows all bots (`*`), dynamic `app/sitemap.ts` returns clean 200 URLs. |
| **2. Indexation & 404 Leaks** | **55 / 100** | **CRITICAL** | **143 legacy WordPress URLs return 404 in GSC**. High-impression URLs (`/how-is-rice-bran-oil-made.../` with 845 impressions, `/can-rice-bran-oil-be-used-for-baking/` with 435 impressions) are leaking organic traffic and backlink equity. |
| **3. Title & Meta Engineering** | **65 / 100** | **FAIL** | **Double-Branding Bug**: `app/products/[slug]/layout.js` appends `| AB Udyog`, which root `app/layout.js` `%s | AB Udyog` doubles into `... | AB Udyog | AB Udyog`. 3 meta descriptions exceed 160 characters. |
| **4. Internal Link Architecture** | **70 / 100** | **WARNING** | Ahrefs flagged **6 subpages with only 1 incoming dofollow internal link** (Wax, Gums, Lecithin, Fatty Acid, Spent Earth, Magik DORB). They lack contextual links from main navigation hubs. |
| **5. Semantic Hierarchy** | **75 / 100** | **WARNING** | `/products` main page lacks an explicit `<h1>` element, jumping directly into `<h2>` brand cards. |
| **6. Schema & Structured Data** | **78 / 100** | **WARNING** | Ahrefs flagged **22 schema validation notices** caused by duplicate `orgSchema` and `plantSchema` injection on every page render. Zero `FAQPage` or `HowTo` schema. |
| **7. Core Web Vitals** | **98 / 100** | **PASS** | Mobile LCP < 2.5s, CLS < 0.1, INP < 200ms. Zero active CWV failures in GSC. |

---

## 2. Technical SEO Audit (Crawlability, Indexation & Protocols)

### 2.1 Domain & Protocol Fragmentation (GSC Data)
GSC performance data reveals that search equity and crawl budget are fragmented across 4 different URL variations:
- `https://www.abudyog.in/`: 173 clicks, 4,820 impressions (Primary Canonical)
- `http://www.abudyog.in/`: 27 clicks, 2,462 impressions (Unencrypted HTTP index split)
- `https://abudyog.in/`: 9 clicks, 178 impressions (Non-WWW HTTPS split)
- `https://2025.abudyog.in/`: 39 impressions (Legacy staging subdomain indexed)
- **Trailing Slash Inconsistency**: `/contact` vs `/contact/` both getting crawled.

**Action Required**: Enforce a strict 301 redirect rule at the server/edge level (e.g. Vercel / Cloudflare / Nginx) routing all `http://`, non-`www`, and staging requests directly to `https://www.abudyog.in`.

---

### 2.2 Coverage & 404 Recovery (143 URLs Leaking Traffic)
Search Console's Coverage report shows **143 URLs under "Not Found (404)"**. These are legacy WordPress URLs that held keyword rankings before the Next.js migration.

#### Priority 301 Redirect Mapping Table (To Add to `next.config.mjs`):
| Legacy WordPress Slug (404 in GSC) | Impressions | GSC Avg Position | 301 Target (Next.js App Router) |
| :--- | :---: | :---: | :--- |
| `/how-is-rice-bran-oil-made-it-is-a-rich-source-of/` | **845** | 10.25 | `/infrastructure` |
| `/can-rice-bran-oil-be-used-for-baking/` | **435** | 6.91 | `/products/ab-health` |
| `/rice-bran-oil-vs-soya-bean-oil-which-is-the-better-choice/` | **196** | 7.04 | `/products/ab-health` |
| `/is-rice-bran-oil-the-best-oil-for-deep-frying/` | **139** | 9.66 | `/products/ab-health` |
| `/which-oil-is-better-for-cooking-rice-bran-oil-or-mustard-oil-4/` | **104** | 13.40 | `/products` |
| `/rice-bran-oil-is-best-for-childrens-health-and-growth/` | **70** | 6.20 | `/products/ab-health` |
| `/why-smoke-point-of-the-cooking-oil-matter/` | **67** | 25.79 | `/products/ab-health` |
| `/is-rice-bran-oil-gluten-free/` | **64** | 10.41 | `/products/ab-health` |
| `/abu-dorb/` | **56** | 8.68 | `/products/de-oiled-rice-bran` |
| `/jeevan-rekha-rice-bran-oil-your-ultimate-antidote-to-cholesterol/` | **46** | 8.76 | `/products/ab-health` |
| `/utilization-of-cooking-oil-before-its-expire/` | **39** | 51.97 | `/sustainability` |

---

## 3. On-Page SEO & Content Quality Audit

### 3.1 The "Double-Branding" Title Tag Bug
* **Root Cause in [`app/products/[slug]/layout.js`](file:///c:/Projects/AB%20Udyog/app/products/%5Bslug%5D/layout.js#L6)**:
  `PRODUCT_META_MAP` includes `| AB Udyog` in each subpage title string. Because [`app/layout.js`](file:///c:/Projects/AB%20Udyog/app/layout.js#L27) defines `template: '%s | AB Udyog'`, Next.js renders:
  ```html
  <title>Magik DORB Super Fine Animal Feed | AB Udyog | AB Udyog</title>
  ```
* **Impact**: Triggers Ahrefs warning *"Title too long"* (>60 characters) and causes Google to rewrite SERP titles, lowering CTR.
* **Fix**: Strip `| AB Udyog` from all entries in `PRODUCT_META_MAP`.

---

### 3.2 Meta Descriptions Exceeding Pixel Width / 160 Characters
* **Audit Findings**:
  - `app/about/layout.js`: **193 characters** (Truncated with `...`)
  - `app/infrastructure/layout.js`: **188 characters** (Truncated)
  - `app/gallery/layout.js`: **182 characters** (Truncated)
* **Optimization**: Rewrite to **145–155 characters** with strong commercial B2B click triggers.

---

### 3.3 Semantic Heading Hierarchy (`<h1>` Compliance)
* **Violation**: [`app/products/page.js`](file:///c:/Projects/AB%20Udyog/app/products/page.js) starts with `<h2>Jeevan Rekha</h2>` and has no `<h1>`.
* **Fix**: Insert `<h1 className="sr-only">AB Udyog Product Portfolio — Physically Refined Edible Oils, DORB Feed & Industrial Derivatives</h1>`.

---

## 4. Structured Data & Schema.org Audit

* **File**: [`components/JsonLd.tsx`](file:///c:/Projects/AB%20Udyog/components/JsonLd.tsx)
* **Ahrefs Audit Finding**: **22 schema.org validation notices**.
* **Diagnosis**:
  1. `JsonLd.tsx` renders `orgSchema` and `plantSchema` on every page render.
  2. When `/products/[slug]` renders `<JsonLd type="Product" />`, the page outputs **multiple duplicate Organization and LocalBusiness schemas** without isolated JSON-LD graph scope.
* **Missing High-Value Schemas**:
  - `FAQPage` schema (for rich accordion snippet expansions).
  - `HowTo` schema (for the physical steam refining distillation process).
  - `ItemList` schema (for the `/products` catalog).

---

## 5. Site Architecture & Internal Link Graph

### The "6-Orphan" Subpage Bottleneck
Ahrefs flagged **6 product subpages with only 1 incoming internal link**:
1. `/products/spent-bleaching-earth`
2. `/products/rice-bran-wax`
3. `/products/rice-bran-lecithin`
4. `/products/rice-bran-gums`
5. `/products/rice-bran-fatty-acid`
6. `/products/magik-dorb`

**Architectural Fix**:
- Cross-link industrial byproducts from [`app/infrastructure/page.js`](file:///c:/Projects/AB%20Udyog/app/infrastructure/page.js) (e.g., under Dewaxing $\to$ link to `/products/rice-bran-wax`; under Degumming $\to$ link to `/products/rice-bran-gums` and `/products/rice-bran-lecithin`).
- Cross-link circular economy byproducts from [`app/sustainability/page.js`](file:///c:/Projects/AB%20Udyog/app/sustainability/page.js) $\to$ `/products/spent-bleaching-earth`.
- Cross-link agro-feed from [`app/about/page.js`](file:///c:/Projects/AB%20Udyog/app/about/page.js) $\to$ `/products/magik-dorb`.

---

## 6. High-CTR SERP Title Tag Re-Engineering (Real GSC Data)

| Search Query | GSC Data (Last 3 Mo) | Optimized High-CTR Title (< 60 chars) | Optimized Meta Description (145-155 chars) |
| :--- | :---: | :--- | :--- |
| `rice bran oil` | 1,067 Impr, 0 Clicks, Pos 8.7 | `Physically Refined Rice Bran Oil (10,000 PPM Oryzanol)` | `Direct manufacturer of pure physically refined Rice Bran Oil fortified with Vitamins A & D and 10,000+ PPM Gamma Oryzanol. FSSAI certified bulk supply.` |
| `edible oil manufacturers in west bengal` | 38 Impr, 0 Clicks, **Pos 1.37** | `Top Edible Oil Manufacturer in West Bengal (300 TPD)` | `Leading physical refinery & edible oil manufacturer in West Bengal. 300 TPD capacity producing pure Rice Bran & Mustard Oil. Inquire for factory rates.` |
| `dorb` / `dorb cattle feed` | 160 Impr, 3 Clicks, Pos 7.0 | `DORB Animal Feed (16% Min Protein) | Wholesale Supplier` | `Wholesale De-Oiled Rice Bran (DORB) in powder & pellet forms. 16% minimum crude protein for cattle, poultry, and aquaculture feed. Inquire for bulk pricing.` |
| `rice bran wax` | 45 Impr, 2 Clicks, Pos 5.1 | `Refined Rice Bran Wax (76°C MP) | Natural Vegetable Wax` | `High-purity refined Rice Bran Wax with 76°C–82°C melting point. 100% vegetable origin alternative to Carnauba wax for cosmetics, pharma & polishes.` |

---

## 7. Prioritized Action Plan with ICE Scoring

| Task | Category | Impact (1-10) | Confidence (1-10) | Ease (1-10) | ICE Score | Priority |
| :--- | :--- | :---: | :---: | :---: | :---: | :---: |
| **Fix Double-Branding Title Bug in `[slug]/layout.js`** | On-Page | 9 | 10 | 10 | **9.7** | **P0** |
| **Add 301 Redirect Map in `next.config.mjs` for 143 404s** | Technical | 10 | 9 | 9 | **9.3** | **P0** |
| **Fix Oversized Meta Descriptions in About & Infra** | On-Page | 8 | 9 | 10 | **9.0** | **P0** |
| **Add Screen-Reader `<h1>` to `app/products/page.js`** | Accessibility | 7 | 10 | 10 | **9.0** | **P1** |
| **Fix Duplicate Schema Injections in `JsonLd.tsx`** | Structured Data | 8 | 9 | 8 | **8.3** | **P1** |
| **Add Contextual Cross-Links for 6 Orphan Product Pages** | Site Arch | 8 | 8 | 8 | **8.0** | **P1** |
| **Deploy `public/llms.txt` for AI Answer Engines** | AEO / GEO | 8 | 8 | 9 | **8.3** | **P1** |
| **Submit Updated Sitemap & Request GSC Validation** | Indexation | 9 | 9 | 9 | **9.0** | **P1** |
