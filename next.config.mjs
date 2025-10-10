import withBundleAnalyzer from '@next/bundle-analyzer';

const isAnalyze = process.env.ANALYZE === 'true';

/** @type {import('next').NextConfig} */
const baseConfig = {
  reactStrictMode: true,
  output: 'export', // Enables static export (SSG)
  trailingSlash: true, // Adds trailing slashes to URLs
  images: {
    unoptimized: true, // Required for next/image in static export
  },
  ...(isAnalyze && {
    webpack(config) {
      return config;
    },
  }),
};

export default withBundleAnalyzer({
  enabled: isAnalyze,
})(baseConfig);