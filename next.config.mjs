/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "more-images.kr.object.ncloudstorage.com",
      },
      {
        hostname: "kr.object.ncloudstorage.com",
      },
      {
        hostname: "img1.daumcdn.net",
      },
      {
        hostname: "img.freepik.com",
      },
    ],
  },
};

export default nextConfig;
