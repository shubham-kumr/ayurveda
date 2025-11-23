import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: '.'
  },
  images: {
    domains: ['localhost'],
  },
  experimental: {
    turbo: {
      root: '.'
    }
  }
};

export default nextConfig;
