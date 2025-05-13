import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com', 'plus.unsplash.com', 'scontent-gru2-2.cdninstagram.com'],

    // Configurações opcionais:
    formats: ['image/webp'], // suporta WebP (mais leve)
    deviceSizes: [640, 768, 1024, 1280, 1600],
    imageSizes: [16, 32, 48, 64, 96],
  },
};

export default nextConfig;
