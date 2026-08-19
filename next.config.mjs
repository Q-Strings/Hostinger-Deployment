/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use export for static deployment (Hostinger Shared Hosting)
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  
  experimental: {
    scrollRestoration: true
  },
  
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ]
  },
};

export default nextConfig;
