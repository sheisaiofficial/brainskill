/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '12mb',
    },
    // pdf-parse ships with a test fixture that breaks Next's bundler tracing.
    // Keep it as a runtime require, not bundled.
    serverComponentsExternalPackages: ['pdf-parse'],
  },
};

export default nextConfig;
