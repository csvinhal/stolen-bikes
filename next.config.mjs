/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "files.bikeindex.org",
        port: "",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
