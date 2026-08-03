const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.abudyog.in';
const siteUrl = rawSiteUrl.replace(/^https?:\/\/(www\.)?abudyog\.in/, 'https://www.abudyog.in');

export const metadata = {
  title: 'Visual Archive',
  description: 'Visual gallery showcasing AB Udyog\'s solvent extraction plant, NABL accredited testing laboratory, high-speed automated packaging lines, and product range.',
  openGraph: {
    title: 'Visual Archive | AB Udyog',
    description: 'Visual gallery showcasing AB Udyog\'s solvent extraction plant, NABL accredited testing laboratory, high-speed automated packaging lines, and product range.',
    url: `${siteUrl}/gallery`,
    siteName: 'AB Udyog',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: `${siteUrl}/og/og_gallery.jpg`,
        secureUrl: `${siteUrl}/og/og_gallery.jpg`,
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'AB Udyog NABL Accredited Testing Laboratory & Quality Control Banner',
      },
      {
        url: `${siteUrl}/og/square/sq_gallery.jpg`,
        secureUrl: `${siteUrl}/og/square/sq_gallery.jpg`,
        width: 800,
        height: 800,
        type: 'image/jpeg',
        alt: 'AB Udyog NABL Laboratory Square Thumbnail',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Visual Archive | AB Udyog',
    description: 'Visual gallery showcasing AB Udyog\'s solvent extraction plant, NABL accredited testing laboratory, high-speed automated packaging lines, and product range.',
    images: [
      {
        url: `${siteUrl}/og/og_gallery.jpg`,
        secureUrl: `${siteUrl}/og/og_gallery.jpg`,
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'AB Udyog NABL Accredited Testing Laboratory & Quality Control Banner',
      },
      {
        url: `${siteUrl}/og/square/sq_gallery.jpg`,
        secureUrl: `${siteUrl}/og/square/sq_gallery.jpg`,
        width: 800,
        height: 800,
        type: 'image/jpeg',
        alt: 'AB Udyog NABL Laboratory Square Thumbnail',
      },
    ],
  },
};

export default function GalleryLayout({ children }) {
  return <>{children}</>;
}
