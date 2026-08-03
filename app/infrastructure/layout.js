const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.abudyog.in';
const siteUrl = rawSiteUrl.replace(/^https?:\/\/(www\.)?abudyog\.in/, 'https://www.abudyog.in');

export const metadata = {
  title: 'Manufacturing Infrastructure',
  description: 'Explore Eastern India\'s premier solvent extraction and physical refining complex. 300 TPD extraction, 150 TPD refining, NABL lab, and PLC automation.',
  openGraph: {
    title: 'Manufacturing Infrastructure | AB Udyog',
    description: 'Explore Eastern India\'s premier solvent extraction and physical refining complex. 300 TPD extraction, 150 TPD refining, NABL lab, and PLC automation.',
    url: `${siteUrl}/infrastructure`,
    siteName: 'AB Udyog',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: `${siteUrl}/og/og_infrastructure.jpg`,
        secureUrl: `${siteUrl}/og/og_infrastructure.jpg`,
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'AB Udyog Physical Refining Towers & Solvent Extraction Plant Infrastructure Banner',
      },
      {
        url: `${siteUrl}/og/square/sq_infrastructure.jpg`,
        secureUrl: `${siteUrl}/og/square/sq_infrastructure.jpg`,
        width: 800,
        height: 800,
        type: 'image/jpeg',
        alt: 'AB Udyog Physical Refining Infrastructure Square Thumbnail',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manufacturing Infrastructure | AB Udyog',
    description: 'Explore Eastern India\'s premier solvent extraction and physical refining complex. 300 TPD extraction, 150 TPD refining, NABL lab, and PLC automation.',
    images: [
      {
        url: `${siteUrl}/og/og_infrastructure.jpg`,
        secureUrl: `${siteUrl}/og/og_infrastructure.jpg`,
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'AB Udyog Physical Refining Towers & Solvent Extraction Plant Infrastructure Banner',
      },
      {
        url: `${siteUrl}/og/square/sq_infrastructure.jpg`,
        secureUrl: `${siteUrl}/og/square/sq_infrastructure.jpg`,
        width: 800,
        height: 800,
        type: 'image/jpeg',
        alt: 'AB Udyog Physical Refining Infrastructure Square Thumbnail',
      },
    ],
  },
};

export default function InfrastructureLayout({ children }) {
  return <>{children}</>;
}
