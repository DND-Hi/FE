/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "kr.object.ncloudstorage.com",
      },
      {
        hostname: "img1.daumcdn.net",
      },
    ],
  },
};

export default nextConfig;
