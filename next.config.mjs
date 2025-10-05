 
/** @type {import('next').NextConfig} */
const nextConfig = {
images: {
    domains: ['images.unsplash.com', 'via.placeholder.com', 'res.cloudinary.com'],
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
  }, 
  compress: true,
  poweredByHeader: false, 

}
 
export default nextConfig;
