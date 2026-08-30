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

      // ── Legacy WordPress High-Impression Content 301 Redirects (GSC 404 Recovery) ──
      {
        source: '/how-is-rice-bran-oil-made-it-is-a-rich-source-of',
        destination: '/infrastructure',
        permanent: true,
      },
      {
        source: '/how-is-rice-bran-oil-made-it-is-a-rich-source-of/',
        destination: '/infrastructure',
        permanent: true,
      },
      {
        source: '/abu-dorb',
        destination: '/products/de-oiled-rice-bran',
        permanent: true,
      },
      {
        source: '/abu-dorb/',
        destination: '/products/de-oiled-rice-bran',
        permanent: true,
      },
      {
        source: '/can-rice-bran-oil-be-used-for-baking',
        destination: '/products/ab-health',
        permanent: true,
      },
      {
        source: '/can-rice-bran-oil-be-used-for-baking/',
        destination: '/products/ab-health',
        permanent: true,
      },
      {
        source: '/rice-bran-oil-vs-soya-bean-oil-which-is-the-better-choice',
        destination: '/products/ab-health',
        permanent: true,
      },
      {
        source: '/rice-bran-oil-vs-soya-bean-oil-which-is-the-better-choice/',
        destination: '/products/ab-health',
        permanent: true,
      },
      {
        source: '/is-rice-bran-oil-the-best-oil-for-deep-frying',
        destination: '/products/ab-health',
        permanent: true,
      },
      {
        source: '/is-rice-bran-oil-the-best-oil-for-deep-frying/',
        destination: '/products/ab-health',
        permanent: true,
      },
      {
        source: '/which-oil-is-better-for-cooking-rice-bran-oil-or-mustard-oil-4',
        destination: '/products',
        permanent: true,
      },
      {
        source: '/which-oil-is-better-for-cooking-rice-bran-oil-or-mustard-oil-4/',
        destination: '/products',
        permanent: true,
      },
      {
        source: '/rice-bran-oil-is-best-for-childrens-health-and-growth',
        destination: '/products/ab-health',
        permanent: true,
      },
      {
        source: '/rice-bran-oil-is-best-for-childrens-health-and-growth/',
        destination: '/products/ab-health',
        permanent: true,
      },
      {
        source: '/why-smoke-point-of-the-cooking-oil-matter',
        destination: '/products/ab-health',
        permanent: true,
      },
      {
        source: '/why-smoke-point-of-the-cooking-oil-matter/',
        destination: '/products/ab-health',
        permanent: true,
      },
      {
        source: '/is-rice-bran-oil-gluten-free',
        destination: '/products/ab-health',
        permanent: true,
      },
      {
        source: '/is-rice-bran-oil-gluten-free/',
        destination: '/products/ab-health',
        permanent: true,
      },
      {
        source: '/jeevan-rekha-rice-bran-oil-your-ultimate-antidote-to-cholesterol',
        destination: '/products/ab-health',
        permanent: true,
      },
      {
        source: '/jeevan-rekha-rice-bran-oil-your-ultimate-antidote-to-cholesterol/',
        destination: '/products/ab-health',
        permanent: true,
      },
      {
        source: '/is-rice-bran-oil-better-than-olive-oil',
        destination: '/products/ab-health',
        permanent: true,
      },
      {
        source: '/is-rice-bran-oil-better-than-olive-oil/',
        destination: '/products/ab-health',
        permanent: true,
      },
      {
        source: '/utilization-of-cooking-oil-before-its-expire',
        destination: '/sustainability',
        permanent: true,
      },
      {
        source: '/utilization-of-cooking-oil-before-its-expire/',
        destination: '/sustainability',
        permanent: true,
      },
      {
        source: '/tag/:tag*',
        destination: '/products',
        permanent: true,
      },
      {
        source: '/category/:cat*',
        destination: '/products',
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
