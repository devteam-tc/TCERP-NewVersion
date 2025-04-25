/** @type {import('next').NextConfig} */ 
const nextConfig = {
    output: 'export', // Enables static export
    trailingSlash: true, // Adds trailing slashes to URLs
    experimental: {
      dynamicParams: false, // Ensures all slugs are pre-defined
    },
    images: {
      unoptimized: true, // Required for next/image in static export
      
    },
    
    // Custom headers for controlling crawler access
    async headers() {
      return [
        {
          source: '/_next/static/(.*)', // Pattern to match all static files including chunks
          headers: [
            {
              key: 'X-Robots-Tag',
              value: 'index, follow', // Prevent crawling of chunk URLs
            },
          ],
        },
      ];
    },
  
  };
  
  export default nextConfig;