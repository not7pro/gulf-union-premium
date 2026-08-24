import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/gulf-union-premium",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
