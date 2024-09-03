/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    eslint: {
      ignoreDuringBuilds: true
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'buw4lzuktl6dhwoc.public.blob.vercel-storage.com',
            port: '',
          },
        ],
      },
};

export default nextConfig;
