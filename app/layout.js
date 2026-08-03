import { Cormorant_Garamond, Outfit, Archivo, Plus_Jakarta_Sans, Space_Mono } from 'next/font/google';
import { Analytics as VercelAnalytics } from '@vercel/analytics/next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppWidget from '../components/WhatsAppWidget';
import ConsoleGreeting from '../components/ConsoleGreeting';
import JsonLd from '../components/JsonLd';
import Analytics, { GtmNoScript } from '../components/Analytics';
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600'],
  variable: '--font-outfit',
  display: 'swap',
});

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-archivo',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
});

const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.abudyog.in';
const siteUrl = rawSiteUrl.replace(/^https?:\/\/(www\.)?abudyog\.in/, 'https://www.abudyog.in');

export const metadata = {
  title: {
    default: "AB Udyog Pvt. Ltd. | Premium Rice Bran Oil & DORB Manufacturer in India",
    template: "%s | AB Udyog",
  },
  description: "AB Udyog Pvt. Ltd. is a premier FMCG manufacturer based in Kolkata, India. We produce premium physically refined Jeevan Rekha Rice Bran Oil, Mustard Oil, and value-added industrial derivatives (DORB, Wax, Lecithin, Gums).",
  keywords: [
    "Rice Bran Oil",
    "DORB",
    "De-Oiled Rice Bran",
    "AB Udyog",
    "Magik DORB",
    "Jeevan Rekha Oil",
    "FMCG Manufacturer India",
    "Kolkata Refinery",
    "Rice Bran Wax",
    "Lecithin",
    "Animal Feed Supplier",
  ],
  authors: [{ name: "AB Udyog Pvt. Ltd.", url: siteUrl }],
  creator: "AB Udyog Pvt. Ltd.",
  publisher: "AB Udyog Pvt. Ltd.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: './',
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: {
      'msvalidate.01': process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || '',
    },
  },
  openGraph: {
    title: "AB Udyog Pvt. Ltd. | Premium Rice Bran Oil & DORB Manufacturer",
    description: "Discover Eastern India's leading physical refinement solvent plant. Pure cooking oils (Jeevan Rekha) and high-yield industrial derivatives (Magik DORB).",
    url: siteUrl,
    siteName: 'AB Udyog',
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
        url: `${siteUrl}/og/square/sq_homepage.jpg`,
        secureUrl: `${siteUrl}/og/square/sq_homepage.jpg`,
        width: 800,
        height: 800,
        type: 'image/jpeg',
        alt: 'AB Udyog Company Logo Square Thumbnail',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AB Udyog Pvt. Ltd. | Premium Rice Bran Oil & DORB Manufacturer',
    description: "Eastern India's premier physical refining complex since 1994.",
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
        url: `${siteUrl}/og/square/sq_homepage.jpg`,
        secureUrl: `${siteUrl}/og/square/sq_homepage.jpg`,
        width: 800,
        height: 800,
        type: 'image/jpeg',
        alt: 'AB Udyog Company Logo Square Thumbnail',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${cormorant.variable} ${outfit.variable} ${archivo.variable} ${plusJakarta.variable} ${spaceMono.variable}`}
    >
      <head>
        <JsonLd type="Organization" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="AB Udyog Corporate & Industrial RSS Feed"
          href={`${siteUrl}/feed.xml`}
        />
      </head>
      <body>
        <GtmNoScript />
        <Analytics />
        <VercelAnalytics />
        <ConsoleGreeting />
        <Navbar />
        {children}
        <WhatsAppWidget />
        <Footer />
      </body>
    </html>
  );
}
