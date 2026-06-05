import { Cormorant_Garamond, Outfit } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AuditHud from '../components/AuditHud';
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

export const metadata = {
  title: {
    default: "AB Udyog Pvt. Ltd. | Premium Rice Bran Oil & DORB Manufacturer in India",
    template: "%s | AB Udyog"
  },
  description: "AB Udyog Pvt. Ltd. is a premier FMCG manufacturer based in Kolkata, India. We produce premium physically refined Jeevan Rekha Rice Bran Oil, Mustard Oil, and value-added industrial derivatives (DORB, Wax, Lecithin, Gums).",
  keywords: ["Rice Bran Oil", "DORB", "De-Oiled Rice Bran", "AB Udyog", "Jeevan Rekha Oil", "FMCG Manufacturer India", "Kolkata Refinery", "Rice Bran Wax", "Lecithin"],
  authors: [{ name: "AB Udyog Pvt. Ltd." }],
  creator: "AB Udyog Pvt. Ltd.",
  publisher: "AB Udyog Pvt. Ltd.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://abudyog.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "AB Udyog Pvt. Ltd. | Premium Rice Bran Oil & DORB Manufacturer",
    description: "Discover Eastern India's leading physical refinement solvent plant. Pure cooking oils (Jeevan Rekha) and high-yield industrial derivatives.",
    url: 'https://abudyog.in',
    siteName: 'AB Udyog',
    locale: 'en_US',
    type: 'website',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};


export default function RootLayout({ children }) {
  // Structured data markup (JSON-LD) for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AB Udyog Pvt. Ltd.",
    "url": "https://abudyog.in",
    "logo": "https://abudyog.in/abu_logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-74392-89709",
      "contactType": "sales",
      "areaServed": "IN",
      "availableLanguage": ["en", "hi", "bn"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kolkata",
      "addressRegion": "West Bengal",
      "addressCountry": "IN"
    }
  };

  return (
    <html lang="en" suppressHydrationWarning className={`${cormorant.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <AuditHud />
      </body>
    </html>
  );
}
