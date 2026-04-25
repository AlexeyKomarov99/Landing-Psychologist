import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'export', // делает статичный сайт (HTML/CSS/JS файлы)
  images: {
    unoptimized: true,
    qualities: [75, 85, 100],
  },
  trailingSlash: true, // ← для совместимости с Beget
};

export default nextConfig;