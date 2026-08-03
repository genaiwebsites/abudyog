const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.abudyog.in';
const siteUrl = rawSiteUrl.replace(/^https?:\/\/(www\.)?abudyog\.in/, 'https://www.abudyog.in');

const PRODUCT_META_MAP = {
  'magik-dorb': {
    title: 'Magik DORB Super Fine Animal Feed | AB Udyog',
    desc: 'Super fine animal feed grade de-oiled rice bran with 16% Min crude protein for aquaculture, poultry, and cattle.',
    img: 'magik_dorb',
  },
  'ab-health': {
    title: 'AB Health Physically Refined Edible Oils | AB Udyog',
    desc: 'Physically refined Rice Bran Oil & Soyabean Oil fortified with natural Oryzanol and Vitamins A & D.',
    img: 'ab_health',
  },
  'de-oiled-rice-bran': {
    title: 'De-Oiled Rice Bran (DORB) Animal Feed | AB Udyog',
    desc: 'High-yield de-oiled rice bran (DORB) in powder & pellet forms. 16% protein minimum for commercial animal nutrition.',
    img: 'de_oiled_rice_bran',
  },
  'rice-bran-wax': {
    title: 'Refined Rice Bran Wax (76°C MP) | AB Udyog',
    desc: 'Premium hard natural vegetable wax (76°C melting point) for cosmetics, pharmaceuticals, polishes, and industrial coatings.',
    img: 'rice_bran_wax',
  },
  'rice-bran-gums': {
    title: 'Stabilized Rice Bran Gums | AB Udyog',
    desc: 'Natural emulsifier and binding agent byproduct derived from physical refining of crude rice bran oil.',
    img: 'rice_bran_gums',
  },
  'rice-bran-lecithin': {
    title: 'Natural Rice Bran Lecithin | AB Udyog',
    desc: 'Non-GMO liquid lecithin emulsifier for food processing, animal feeds, and industrial formulations.',
    img: 'rice_bran_lecithin',
  },
  'rice-bran-fatty-acid': {
    title: 'Distilled Rice Bran Fatty Acid | AB Udyog',
    desc: 'High-FFA organic fatty acid derivative (70-85% FFA) for soap manufacturing, oleochemicals, and industrial distillation.',
    img: 'rice_bran_fatty_acid',
  },
  'spent-bleaching-earth': {
    title: 'Eco-Friendly Spent Bleaching Earth | AB Udyog',
    desc: 'Residual eco-friendly bleaching clay by-product ideal for brick kilns, cement blending, and industrial bio-fuel.',
    img: 'spent_bleaching_earth',
  },
};

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug || '';
  const product = PRODUCT_META_MAP[slug] || {
    title: 'Industrial Products & Derivatives | AB Udyog',
    desc: 'High-grade agro-industrial products, edible oils, and de-oiled rice bran derivatives from AB Udyog.',
    img: 'products',
  };

  const pageUrl = `${siteUrl}/products/${slug}`;
  const ogWide = `${siteUrl}/og/og_${product.img}.jpg`;
  const ogSq = `${siteUrl}/og/square/sq_${product.img}.jpg`;

  return {
    title: product.title,
    description: product.desc,
    openGraph: {
      title: product.title,
      description: product.desc,
      url: pageUrl,
      siteName: 'AB Udyog',
      locale: 'en_IN',
      type: 'website',
      images: [
        {
          url: ogWide,
          secureUrl: ogWide,
          width: 1200,
          height: 630,
          type: 'image/jpeg',
          alt: `${product.title} Banner`,
        },
        {
          url: ogSq,
          secureUrl: ogSq,
          width: 800,
          height: 800,
          type: 'image/jpeg',
          alt: `${product.title} Thumbnail`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: product.title,
      description: product.desc,
      images: [
        {
          url: ogWide,
          secureUrl: ogWide,
          width: 1200,
          height: 630,
          type: 'image/jpeg',
          alt: `${product.title} Banner`,
        },
        {
          url: ogSq,
          secureUrl: ogSq,
          width: 800,
          height: 800,
          type: 'image/jpeg',
          alt: `${product.title} Thumbnail`,
        },
      ],
    },
  };
}

export default function ProductSlugLayout({ children }) {
  return <>{children}</>;
}
