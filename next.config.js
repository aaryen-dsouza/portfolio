/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable Next.js default image optimization for static export
  },
  basePath: "/portfolio",
  assetPrefix: "/portfolio",
};

module.exports = nextConfig;
