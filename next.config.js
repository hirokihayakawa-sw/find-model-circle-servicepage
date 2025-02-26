const nextConfig = {
  output: 'export',
  distDir: process.env.NODE_ENV === 'development' ? '.next' : 'dist',
  images: {
    unoptimized: true,
  },
  trailingSlash: true
}

module.exports = nextConfig