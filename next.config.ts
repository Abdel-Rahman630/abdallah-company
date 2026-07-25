import type { NextConfig } from "next";

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://cms.ahcl.com.sa";

const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline';
  style-src 'self' 'unsafe-inline';
  img-src 'self' blob: data: https: http://cms.ahcl.com.sa;
  font-src 'self' data:;
  object-src 'none';
  base-uri 'self';
  connect-src 'self' https:;
  frame-src 'self' https://maps.google.com https://www.google.com;
  frame-ancestors 'none';
`.replace(/\n/g, '').replace(/\s+/g, ' ').trim();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "cms.ahcl.com.sa",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: cspHeader,
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
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
