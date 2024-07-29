import path from "path";
import { fileURLToPath } from "url";

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  sassOptions: {
    includePaths: [
      path.join(path.dirname(fileURLToPath(import.meta.url)), "styles"),
    ],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
        // port: '',
        // pathname: 'https://cdn.dummyjson.com/**',
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        // port: '',
        // pathname: 'https://cdn.dummyjson.com/**',
      },
    ],
  },
};

export default nextConfig;
