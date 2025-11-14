/** Redirección temporal mientras se indexa la nueva página */
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
        permanent: true, // Código de estado 308 (redirección permanente)
      },
    ]
  },
}

module.exports = nextConfig
