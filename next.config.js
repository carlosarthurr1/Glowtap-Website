/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Disable strict mode to reduce hydration warnings
  swcMinify: true,
  images: {
    domains: ['localhost'],
  },
  // Suppress specific hydration warnings
  onDemandEntries: {
    // Keep the build page in memory for longer periods
    maxInactiveAge: 25 * 1000,
    // Number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 5,
  },
  // Configure SWC to handle console output
  compiler: {
    removeConsole: {
      exclude: ['error', 'warn'],
    },
  },
};

module.exports = nextConfig;
