/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '192.168.1.201',
        port: '8888',
        pathname: '/ticket-reselling-api/public/**',
      },
    ],
  },
}

module.exports = nextConfig
