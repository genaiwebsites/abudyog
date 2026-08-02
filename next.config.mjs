/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // ── Legacy WordPress Page Mappings (301 Permanent SEO Redirects) ──
      {
        source: '/about-us',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/contact-us',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/our-products',
        destination: '/products',
        permanent: true,
      },
      {
        source: '/products-services',
        destination: '/products',
        permanent: true,
      },
      {
        source: '/manufacturing',
        destination: '/infrastructure',
        permanent: true,
      },
      {
        source: '/plant',
        destination: '/infrastructure',
        permanent: true,
      },
      {
        source: '/facility',
        destination: '/infrastructure',
        permanent: true,
      },
      {
        source: '/certifications',
        destination: '/infrastructure',
        permanent: true,
      },
      {
        source: '/csr',
        destination: '/sustainability',
        permanent: true,
      },
      {
        source: '/gallery-photos',
        destination: '/gallery',
        permanent: true,
      },

      // ── WordPress System & Junk URLs (Redirect to Homepage) ──
      {
        source: '/wp-admin',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wp-admin/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wp-content/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wp-includes/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wp-json/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/xmlrpc.php',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index.php',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
