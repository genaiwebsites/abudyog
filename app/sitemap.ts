import { MetadataRoute } from 'next';
import { getAllProducts } from '@/data/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const rawBaseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.abudyog.in';
  const baseUrl = rawBaseUrl.replace(/^https?:\/\/(www\.)?abudyog\.in/, 'https://www.abudyog.in');

  const products = getAllProducts();

  const productRoutes: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: product.slug === 'magik-dorb' || product.slug === 'ab-health' ? 1.0 : 0.9,
  }));

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
      url: `${baseUrl}/sustainability`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/infrastructure`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  return [...staticRoutes, ...productRoutes];
}
