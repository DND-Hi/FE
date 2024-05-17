/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "kr.object.ncloudstorage.com",
      },
    ],
  },
};

export default nextConfig;
