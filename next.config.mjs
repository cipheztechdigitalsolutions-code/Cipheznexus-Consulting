/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const repo = "Cipheznexus-Consulting";

const nextConfig = {
  output: "export", // static HTML export for GitHub Pages
  images: { unoptimized: true },
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
