import React from 'react';
import { notFound } from 'next/navigation';
import { getProductBySlug, getAllProductSlugs } from '@/data/products';
import ProductClientView from './ProductClientView';

const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.abudyog.in';
const siteUrl = rawSiteUrl.replace(/^https?:\/\/(www\.)?abudyog\.in/, 'https://www.abudyog.in');

export async function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: 'Product Specification',
      description: 'Explore industrial and consumer products manufactured by AB Udyog.',
    };
  }

  const title = product.metaTitle;
  const description = product.metaDesc;
  const canonicalUrl = `${siteUrl}/products/${product.slug}`;
  const ogImageUrl = `${siteUrl}/og/og_${product.ogImageName}.jpg`;
  const sqImageUrl = `${siteUrl}/og/square/sq_${product.ogImageName}.jpg`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${title} | AB Udyog`,
      description,
      url: canonicalUrl,
      siteName: 'AB Udyog',
      locale: 'en_IN',
      type: 'website',
      images: [
        {
          url: ogImageUrl,
          secureUrl: ogImageUrl,
          width: 1200,
          height: 630,
          type: 'image/jpeg',
          alt: `${title} Banner`,
        },
        {
          url: sqImageUrl,
          secureUrl: sqImageUrl,
          width: 800,
          height: 800,
          type: 'image/jpeg',
          alt: `${title} Thumbnail`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | AB Udyog`,
      description,
      images: [
        {
          url: ogImageUrl,
          secureUrl: ogImageUrl,
          width: 1200,
          height: 630,
          type: 'image/jpeg',
          alt: `${title} Banner`,
        },
        {
          url: sqImageUrl,
          secureUrl: sqImageUrl,
          width: 800,
          height: 800,
          type: 'image/jpeg',
          alt: `${title} Thumbnail`,
        },
      ],
    },
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return <ProductClientView product={product} />;
}
