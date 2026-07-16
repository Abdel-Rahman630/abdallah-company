import type { NextConfig } from "next";

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "https://digital-iconcreations.com/ahcl-crm";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "digital-iconcreations.com",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/cms/:path*",
        destination: `${API_BASE}/api/cms/:path*`,
      },
    ];
  },
};

export default nextConfig;
