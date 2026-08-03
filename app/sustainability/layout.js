const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.abudyog.in';
const siteUrl = rawSiteUrl.replace(/^https?:\/\/(www\.)?abudyog\.in/, 'https://www.abudyog.in');

export const metadata = {
  title: 'Sustainability & ESG Commitment',
  description: 'AB Udyog\'s environmental stewardship: zero-chemical physical refining, 100% biomass thermal power, eco-packaging, and rural community welfare in West Bengal.',
  openGraph: {
    title: 'Sustainability & ESG Commitment | AB Udyog',
    description: 'AB Udyog\'s environmental stewardship: zero-chemical physical refining, 100% biomass thermal power, eco-packaging, and rural community welfare in West Bengal.',
    url: `${siteUrl}/sustainability`,
    siteName: 'AB Udyog',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: `${siteUrl}/og/og_sustainability.jpg`,
        secureUrl: `${siteUrl}/og/og_sustainability.jpg`,
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'AB Udyog Sustainable Rice Belt Sourcing & Green Energy Banner',
      },
      {
        url: `${siteUrl}/og/square/sq_sustainability.jpg`,
        secureUrl: `${siteUrl}/og/square/sq_sustainability.jpg`,
        width: 800,
        height: 800,
        type: 'image/jpeg',
        alt: 'AB Udyog Sustainability Square Thumbnail',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sustainability & ESG Commitment | AB Udyog',
    description: 'AB Udyog\'s environmental stewardship: zero-chemical physical refining, 100% biomass thermal power, eco-packaging, and rural community welfare in West Bengal.',
    images: [
      {
        url: `${siteUrl}/og/og_sustainability.jpg`,
        secureUrl: `${siteUrl}/og/og_sustainability.jpg`,
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'AB Udyog Sustainable Rice Belt Sourcing & Green Energy Banner',
      },
      {
        url: `${siteUrl}/og/square/sq_sustainability.jpg`,
        secureUrl: `${siteUrl}/og/square/sq_sustainability.jpg`,
        width: 800,
        height: 800,
        type: 'image/jpeg',
        alt: 'AB Udyog Sustainability Square Thumbnail',
      },
    ],
  },
};

export default function SustainabilityLayout({ children }) {
  return <>{children}</>;
}
