import bundleAnalyzer from "@next/bundle-analyzer";
import type { NextConfig } from "next";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true"
});

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  trailingSlash: true,

  images: {
    unoptimized: true
  }
};

export default withBundleAnalyzer(nextConfig);
