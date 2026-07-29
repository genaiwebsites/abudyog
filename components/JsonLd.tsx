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
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://abudyog.in';

  // Master Organization / Corporation & Entity Graph
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Corporation',
    '@id': `${baseUrl}/#organization`,
    name: 'AB Udyog Pvt. Ltd.',
    legalName: 'AB Udyog Private Limited',
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    image: `${baseUrl}/ab-udyog-rice-bran-oil-refinery-plant-kolkata.png`,
    description: "Eastern India's premier physical refining and solvent extraction complex producing pure edible oils and high-protein DORB animal feed since 1994.",
    foundingDate: '1994',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kolkata',
      addressRegion: 'West Bengal',
      postalCode: '700001',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '22.5726',
      longitude: '88.3639',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-74392-89709',
      contactType: 'sales',
      areaServed: 'IN',
      availableLanguage: ['en', 'hi', 'bn'],
    },
    brand: [
      {
        '@type': 'Brand',
        name: 'Jeevan Rekha',
        url: process.env.NEXT_PUBLIC_JEEVAN_REKHA_SITE_URL || 'https://jeevanrekhafoods.com',
        description: 'Flagship consumer edible oil brand — physically refined Rice Bran Oil & Kachhi Ghani Mustard Oil',
        sameAs: [
          'https://www.facebook.com/JeevanRekhaFoods/',
          'https://www.instagram.com/jeevanrekhafoods/',
        ],
      },
      {
        '@type': 'Brand',
        name: 'AB Health',
        url: `${baseUrl}/products/ab-health`,
        description: 'Physically refined Rice Bran Oil & Refined Soyabean Oil fortified with Vitamins A & D',
      },
      {
        '@type': 'Brand',
        name: 'Magik DORB',
        url: `${baseUrl}/products/magik-dorb`,
        description: 'Micro-milled super fine de-oiled rice bran for aquaculture, poultry, and livestock nutrition',
      },
    ],
    sameAs: [
      process.env.NEXT_PUBLIC_INDIAMART_URL || 'https://www.indiamart.com/ab-udyog/',
      process.env.NEXT_PUBLIC_TRADEINDIA_URL || 'https://www.tradeindia.com/Seller-AB-Udyog/',
      'https://www.instagram.com/jeevanrekhafoods/',
      'https://www.facebook.com/JeevanRekhaFoods/',
      'https://in.linkedin.com/company/ab-udyog-pvt-ltd',
      'https://www.youtube.com/channel/UCzz1eldG3F66AHrFLkUXSFQ',
    ].filter(Boolean),
  };

  // Plant Infrastructure Schema
  const plantSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${baseUrl}/#facility`,
    name: 'AB Udyog Solvent Extraction & Physical Refinery Complex',
    image: `${baseUrl}/ab-udyog-rice-bran-oil-refinery-plant-kolkata.png`,
    priceRange: '₹₹₹',
    telephone: '+91-74392-89709',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kolkata',
      addressRegion: 'West Bengal',
      addressCountry: 'IN',
    },
    parentOrganization: {
      '@id': `${baseUrl}/#organization`,
    },
  };

  // Product Schema (B2B Lead-Gen & Specs - No e-commerce cart/checkout)
  const productSchema = productData
    ? {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: productData.name,
        description: productData.description,
        image: productData.image ? `${baseUrl}${productData.image}` : `${baseUrl}/logo.png`,
        category: productData.category || 'Animal Feed & Edible Oils',
        mpn: productData.mpn || 'ABU-PROD-GENERIC',
        brand: {
          '@type': 'Brand',
          name: 'AB Udyog',
        },
        manufacturer: {
          '@type': 'Organization',
          name: 'AB Udyog Pvt. Ltd.',
          url: baseUrl,
        },
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(plantSchema) }}
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
