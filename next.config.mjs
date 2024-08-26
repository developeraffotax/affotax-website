/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,

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
