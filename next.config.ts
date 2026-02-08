import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [{
      hostname: "gog53pkxdx.ufs.sh",
    }]
  }
};

export default nextConfig;
