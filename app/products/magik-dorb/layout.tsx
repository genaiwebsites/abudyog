const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.abudyog.in';
const siteUrl = rawSiteUrl.replace(/^https?:\/\/(www\.)?abudyog\.in/, 'https://www.abudyog.in');

export const metadata = {
  title: 'Magik DORB Super Fine Animal Feed | High-Protein De-Oiled Rice Bran',
  description: 'Magik DORB (Super Fine) animal feed grade de-oiled rice bran. 16% Min crude protein, ultra-low silica, high digestibility for aquaculture, poultry, and livestock.',
  openGraph: {
    title: 'Magik DORB Super Fine Animal Feed | AB Udyog',
    description: 'Magik DORB (Super Fine) animal feed grade de-oiled rice bran. 16% Min crude protein, ultra-low silica, high digestibility for aquaculture, poultry, and livestock.',
    url: `${siteUrl}/products/magik-dorb`,
    siteName: 'AB Udyog',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: `${siteUrl}/og/og_magik_dorb.jpg`,
        secureUrl: `${siteUrl}/og/og_magik_dorb.jpg`,
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Magik DORB Super Fine Animal Feed Bag Packshot Banner',
      },
      {
        url: `${siteUrl}/og/square/sq_magik_dorb.jpg`,
        secureUrl: `${siteUrl}/og/square/sq_magik_dorb.jpg`,
        width: 800,
        height: 800,
        type: 'image/jpeg',
        alt: 'Magik DORB Animal Feed Square Thumbnail',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Magik DORB Super Fine Animal Feed | AB Udyog',
    description: 'Magik DORB (Super Fine) animal feed grade de-oiled rice bran. 16% Min crude protein, ultra-low silica, high digestibility for aquaculture, poultry, and livestock.',
    images: [
      {
        url: `${siteUrl}/og/og_magik_dorb.jpg`,
        secureUrl: `${siteUrl}/og/og_magik_dorb.jpg`,
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Magik DORB Super Fine Animal Feed Bag Packshot Banner',
      },
      {
        url: `${siteUrl}/og/square/sq_magik_dorb.jpg`,
        secureUrl: `${siteUrl}/og/square/sq_magik_dorb.jpg`,
        width: 800,
        height: 800,
        type: 'image/jpeg',
        alt: 'Magik DORB Animal Feed Square Thumbnail',
      },
    ],
  },
};

export default function MagikDorbLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
