import { Metadata } from 'next';

const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.abudyog.in';
const siteUrl = rawSiteUrl.replace(/^https?:\/\/(www\.)?abudyog\.in/, 'https://www.abudyog.in');

export const metadata = {
  title: 'Our Corporate Story',
  description: "Discover how AB Udyog Pvt. Ltd. evolved over four decades from Eastern India's premium solvent extraction facility into a pioneering agro-based food manufacturer.",
  openGraph: {
    title: 'Our Corporate Story | AB Udyog',
    description: "Discover how AB Udyog Pvt. Ltd. evolved over four decades from Eastern India's premium solvent extraction facility into a pioneering agro-based food manufacturer.",
    url: `${siteUrl}/about`,
    siteName: 'AB Udyog',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: `${siteUrl}/og/og_about.jpg`,
        secureUrl: `${siteUrl}/og/og_about.jpg`,
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'AB Udyog Corporate HQ Kolkata Refinery Entrance Banner',
      },
      {
        url: `${siteUrl}/og/square/sq_about.jpg`,
        secureUrl: `${siteUrl}/og/square/sq_about.jpg`,
        width: 800,
        height: 800,
        type: 'image/jpeg',
        alt: 'AB Udyog Corporate HQ Square Thumbnail',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Corporate Story | AB Udyog',
    description: "Discover how AB Udyog Pvt. Ltd. evolved over four decades from Eastern India's premium solvent extraction facility into a pioneering agro-based food manufacturer.",
    images: [
      {
        url: `${siteUrl}/og/og_about.jpg`,
        secureUrl: `${siteUrl}/og/og_about.jpg`,
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'AB Udyog Corporate HQ Kolkata Refinery Entrance Banner',
      },
      {
        url: `${siteUrl}/og/square/sq_about.jpg`,
        secureUrl: `${siteUrl}/og/square/sq_about.jpg`,
        width: 800,
        height: 800,
        type: 'image/jpeg',
        alt: 'AB Udyog Corporate HQ Square Thumbnail',
      },
    ],
  },
};

export default function AboutLayout({ children }) {
  return <>{children}</>;
}
