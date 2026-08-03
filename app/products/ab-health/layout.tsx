const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.abudyog.in';
const siteUrl = rawSiteUrl.replace(/^https?:\/\/(www\.)?abudyog\.in/, 'https://www.abudyog.in');

export const metadata = {
  title: 'AB Health Edible Oils | Physically Refined Rice Bran & Soyabean Oil',
  description: 'AB Health physically refined Rice Bran Oil & Soyabean Oil fortified with natural Oryzanol and Vitamins A & D. Chemical-free daily family nutrition.',
  openGraph: {
    title: 'AB Health Edible Oils | AB Udyog',
    description: 'AB Health physically refined Rice Bran Oil & Soyabean Oil fortified with natural Oryzanol and Vitamins A & D. Chemical-free daily family nutrition.',
    url: `${siteUrl}/products/ab-health`,
    siteName: 'AB Udyog',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: `${siteUrl}/og/og_ab_health.jpg`,
        secureUrl: `${siteUrl}/og/og_ab_health.jpg`,
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'AB Health Physically Refined Rice Bran & Soyabean Oil Packshots Banner',
      },
      {
        url: `${siteUrl}/og/square/sq_ab_health.jpg`,
        secureUrl: `${siteUrl}/og/square/sq_ab_health.jpg`,
        width: 800,
        height: 800,
        type: 'image/jpeg',
        alt: 'AB Health Edible Oils Square Thumbnail',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AB Health Edible Oils | AB Udyog',
    description: 'AB Health physically refined Rice Bran Oil & Soyabean Oil fortified with natural Oryzanol and Vitamins A & D. Chemical-free daily family nutrition.',
    images: [
      {
        url: `${siteUrl}/og/og_ab_health.jpg`,
        secureUrl: `${siteUrl}/og/og_ab_health.jpg`,
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'AB Health Physically Refined Rice Bran & Soyabean Oil Packshots Banner',
      },
      {
        url: `${siteUrl}/og/square/sq_ab_health.jpg`,
        secureUrl: `${siteUrl}/og/square/sq_ab_health.jpg`,
        width: 800,
        height: 800,
        type: 'image/jpeg',
        alt: 'AB Health Edible Oils Square Thumbnail',
      },
    ],
  },
};

export default function AbHealthLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
