/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '2025.abudyog.in',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
