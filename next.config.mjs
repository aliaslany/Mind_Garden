// If you deploy to https://<user>.github.io/<repo>/ (project page, not a
// custom domain and not a <user>.github.io root repo), set NEXT_BASE_PATH
// to "/<repo>" as a build-time env var (the included GitHub Action does
// this automatically from the repo name).
const basePath = process.env.NEXT_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
