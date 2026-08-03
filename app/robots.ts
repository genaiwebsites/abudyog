import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const rawBaseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.abudyog.in';
  const baseUrl = rawBaseUrl.replace(/^https?:\/\/(www\.)?abudyog\.in/, 'https://www.abudyog.in');

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/private/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
