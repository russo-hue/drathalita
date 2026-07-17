import type { NextConfig } from "next";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isGithubPages = process.env.GITHUB_PAGES === "true";
const isUserPage = repoName.endsWith(".github.io");
const basePath = isGithubPages && repoName && !isUserPage ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  poweredByHeader: false,
  basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
