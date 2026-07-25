/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/manufacturing',
        destination: '/infrastructure',
        permanent: true,
      },
      {
        source: '/csr',
        destination: '/sustainability',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
