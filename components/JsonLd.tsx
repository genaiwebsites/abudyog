import React from 'react';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface JsonLdProps {
  type?: 'Organization' | 'Product' | 'Breadcrumb';
  productData?: {
    name: string;
    description: string;
    image?: string;
    category?: string;
    mpn?: string;
    url?: string;
    sku?: string;
  };
  breadcrumbs?: BreadcrumbItem[];
}

export default function JsonLd({ type = 'Organization', productData, breadcrumbs }: JsonLdProps): React.ReactElement {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://abudyog.in';

  // 1. Master Organization / Corporation & Entity Graph Schema
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
      streetAddress: '11A, Rawdon Street',
      addressLocality: 'Kolkata',
      addressRegion: 'West Bengal',
      postalCode: '700017',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '22.5400',
      longitude: '88.3500',
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

  // 2. Plant Facility LocalBusiness Schema
  const plantSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${baseUrl}/#facility`,
    name: 'AB Udyog Solvent Extraction & Physical Refinery Complex',
    image: `${baseUrl}/ab-udyog-rice-bran-oil-refinery-plant-kolkata.png`,
    url: baseUrl,
    priceRange: '₹₹₹',
    telephone: '+91-74392-89709',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '11A, Rawdon Street',
      addressLocality: 'Kolkata',
      addressRegion: 'West Bengal',
      postalCode: '700017',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '22.5400',
      longitude: '88.3500',
    },
    parentOrganization: {
      '@id': `${baseUrl}/#organization`,
    },
  };

  // 3. B2B Product Rich Snippet Schema (Google Merchant & Rich Results Compliant)
  const productSchema = productData
    ? {
        '@context': 'https://schema.org',
        '@type': 'Product',
        '@id': productData.url ? `${baseUrl}${productData.url}` : `${baseUrl}/#product-${productData.name.toLowerCase().replace(/\s+/g, '-')}`,
        name: productData.name,
        description: productData.description,
        image: productData.image ? `${baseUrl}${productData.image}` : `${baseUrl}/logo.png`,
        category: productData.category || 'Animal Feed & Edible Oils',
        mpn: productData.mpn || `ABU-${productData.name.toUpperCase().replace(/\s+/g, '-')}`,
        sku: productData.sku || `SKU-${productData.name.toUpperCase().replace(/\s+/g, '-')}`,
        brand: {
          '@type': 'Brand',
          name: 'AB Udyog',
        },
        manufacturer: {
          '@type': 'Organization',
          name: 'AB Udyog Pvt. Ltd.',
          url: baseUrl,
        },
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'INR',
          lowPrice: '100',
          highPrice: '100000',
          offerCount: '1',
          priceValidUntil: '2030-12-31',
          availability: 'https://schema.org/InStock',
          itemCondition: 'https://schema.org/NewCondition',
          seller: {
            '@type': 'Organization',
            name: 'AB Udyog Pvt. Ltd.',
          },
        },
      }
    : null;

  // 4. BreadcrumbList Rich Snippet Schema
  const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: item.url.startsWith('http') ? item.url : `${baseUrl}${item.url}`,
        })),
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
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
    </>
  );
}
