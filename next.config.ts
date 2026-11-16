import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Required allowlist since Next.js 16; the default quality is all we use.
    qualities: [75],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
