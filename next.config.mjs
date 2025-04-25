/** @type {import('next').NextConfig} */ 
const nextConfig = {
    output: 'export', // Enables static export
    trailingSlash: true, // Adds trailing slashes to URLs
    images: {
      unoptimized: true, // Required for next/image in static export
    },
    typescript: {
      ignoreBuildErrors: false,
    },
    experimental: {
      typedRoutes: true,
    }
};
  
export default nextConfig;