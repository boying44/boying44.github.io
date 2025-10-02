import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const basePathEnv = process.env.BASE_PATH || "";
const repoBasePath = basePathEnv ? `/${basePathEnv}` : "";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    // Next/Image optimization is not available in static export
    unoptimized: true,
  },
  // Use basePath/assetPrefix when building on GitHub Actions for project pages
  basePath: isGithubActions && repoBasePath ? repoBasePath : undefined,
  assetPrefix: isGithubActions && repoBasePath ? `${repoBasePath}/` : undefined,
};

export default nextConfig;
