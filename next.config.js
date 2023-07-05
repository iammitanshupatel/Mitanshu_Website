const withPWA = require('next-pwa')({
  dest: 'public',
});

module.exports = withPWA({
  images: {
    minimumCacheTTL: 60,
    domains: ['res.cloudinary.com', 'api.mapbox.com'],
  },
  pwa: {
    dest: 'public',
  },
  swcMinify: true,
});
