const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.abudyog.in';
const siteUrl = rawSiteUrl.replace(/^https?:\/\/(www\.)?abudyog\.in/, 'https://www.abudyog.in');

export const metadata = {
  title: 'Product Portfolio',
  description: 'Three distinct product lines spanning physically refined edible oils (Jeevan Rekha, AB Health), super fine animal feed (Magik DORB), and industrial derivatives.',
  openGraph: {
    title: 'Product Portfolio | AB Udyog',
    description: 'Three distinct product lines spanning physically refined edible oils (Jeevan Rekha, AB Health), super fine animal feed (Magik DORB), and industrial derivatives.',
    url: `${siteUrl}/products`,
    siteName: 'AB Udyog',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: `${siteUrl}/og/og_products.jpg`,
        secureUrl: `${siteUrl}/og/og_products.jpg`,
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'AB Udyog Complete Edible Oils and DORB Product Range Banner',
      },
      {
        url: `${siteUrl}/og/square/sq_products.jpg`,
        secureUrl: `${siteUrl}/og/square/sq_products.jpg`,
        width: 800,
        height: 800,
        type: 'image/jpeg',
        alt: 'AB Udyog Product Range Square Thumbnail',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Product Portfolio | AB Udyog',
    description: 'Three distinct product lines spanning physically refined edible oils (Jeevan Rekha, AB Health), super fine animal feed (Magik DORB), and industrial derivatives.',
    images: [
      {
        url: `${siteUrl}/og/og_products.jpg`,
        secureUrl: `${siteUrl}/og/og_products.jpg`,
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'AB Udyog Complete Edible Oils and DORB Product Range Banner',
      },
      {
        url: `${siteUrl}/og/square/sq_products.jpg`,
        secureUrl: `${siteUrl}/og/square/sq_products.jpg`,
        width: 800,
        height: 800,
        type: 'image/jpeg',
        alt: 'AB Udyog Product Range Square Thumbnail',
      },
    ],
  },
};

export default function ProductsLayout({ children }) {
  return <>{children}</>;
}
