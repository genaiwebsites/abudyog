const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.abudyog.in';
const siteUrl = rawSiteUrl.replace(/^https?:\/\/(www\.)?abudyog\.in/, 'https://www.abudyog.in');

export const metadata = {
  title: 'Contact Us',
  description: 'Connect with AB Udyog Pvt. Ltd. trade desk, corporate headquarters in Kolkata, or Uchalan refinery complex for commercial edible oil and DORB bulk orders.',
  openGraph: {
    title: 'Contact Us | AB Udyog',
    description: 'Connect with AB Udyog Pvt. Ltd. trade desk, corporate headquarters in Kolkata, or Uchalan refinery complex for commercial edible oil and DORB bulk orders.',
    url: `${siteUrl}/contact`,
    siteName: 'AB Udyog',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: `${siteUrl}/og/og_contact.jpg`,
        secureUrl: `${siteUrl}/og/og_contact.jpg`,
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'AB Udyog Corporate Headquarters Kolkata & Trade Desk Banner',
      },
      {
        url: `${siteUrl}/og/square/sq_contact.jpg`,
        secureUrl: `${siteUrl}/og/square/sq_contact.jpg`,
        width: 800,
        height: 800,
        type: 'image/jpeg',
        alt: 'AB Udyog Trade Desk Square Thumbnail',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | AB Udyog',
    description: 'Connect with AB Udyog Pvt. Ltd. trade desk, corporate headquarters in Kolkata, or Uchalan refinery complex for commercial edible oil and DORB bulk orders.',
    images: [
      {
        url: `${siteUrl}/og/og_contact.jpg`,
        secureUrl: `${siteUrl}/og/og_contact.jpg`,
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'AB Udyog Corporate Headquarters Kolkata & Trade Desk Banner',
      },
      {
        url: `${siteUrl}/og/square/sq_contact.jpg`,
        secureUrl: `${siteUrl}/og/square/sq_contact.jpg`,
        width: 800,
        height: 800,
        type: 'image/jpeg',
        alt: 'AB Udyog Trade Desk Square Thumbnail',
      },
    ],
  },
};

export default function ContactLayout({ children }) {
  return <>{children}</>;
}
