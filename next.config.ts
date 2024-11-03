import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'image.tmdb.org',
            port: '',
            pathname: '/t/p/w500/**', // Adjust the path pattern as needed
        },
    ],
    minimumCacheTTL: 60, // Optional: Cache images for 60 seconds
    deviceSizes: [320, 420, 768, 1024, 1200], // Define responsive sizes
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Define fixed sizes
},
};

export default nextConfig;
