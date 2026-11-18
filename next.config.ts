import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Cloudflare Workers has no image optimizer wired up, so /_next/image would only pass the
    // original file through. Images are pre-converted to WebP in public/assets instead
    // (sources are kept in assets-src/), and served directly with cache headers (public/_headers).
    unoptimized: true,
  },
};

export default nextConfig;
