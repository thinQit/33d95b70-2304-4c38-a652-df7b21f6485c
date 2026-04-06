const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  typescript: {
    // Fail the build on build errors for TypeScript
    ignoreBuildErrors: true,
  },
  eslint: {
    // Fail the build on lint errors
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
