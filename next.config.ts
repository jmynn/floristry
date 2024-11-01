import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/floristry',
  images: {
    formats: ['image/webp'],
    unoptimized: true,
  }
};

export default nextConfig;
