/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'x-custom-header',
            value: 'custom-value',
          },
        ],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'portfolio-ivan-martinez.vercel.app',
          },
        ],
        destination: 'https://portfolio-profesional-ivan-martinez.vercel.app/:path*',
        permanent: true,
      },
    ]
  },
  // Habilitar redirecciones en el lado del servidor
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig
