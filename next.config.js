/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'api.ts', 'api.tsx'],
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'images.unsplash.com',
      'github.com',
      'avatars.githubusercontent.com',
    ],
  },
}

module.exports = nextConfig
