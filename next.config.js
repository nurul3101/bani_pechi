/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    serverActions: true,
  },
};
