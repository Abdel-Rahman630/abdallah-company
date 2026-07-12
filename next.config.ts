import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "digital-iconcreations.com",
      },
    ],
  },
};

export default nextConfig;
