module.exports = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["example.com", "192.168.88.253"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
};
