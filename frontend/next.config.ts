import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    turbo: {
      // Turbopack configurations
      rules: {
        "*.md": [
          {
            loader: "@mdx-js/loader",
            options: {
              format: "md",
            },
          },
        ],
      },
    },
  },
  typescript: {
    ignoreBuildErrors: true, // Set to false in production
  },
};

export default nextConfig;
