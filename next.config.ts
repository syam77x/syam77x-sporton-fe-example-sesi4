import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "be-sporton.agunacourse.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.agunacourse.com",
      },
    ],
  },
};

export default nextConfig;
