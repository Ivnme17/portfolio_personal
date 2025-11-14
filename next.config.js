/** @type {import('next').NextConfig} */
const nextConfig = {
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
  // Configuración para manejar correctamente las redirecciones
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/:path*',
      },
    ]
  },
}

module.exports = nextConfig
