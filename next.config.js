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
      {
        protocol: 'https',
        hostname: 'ticket-api.mitrait.id',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
