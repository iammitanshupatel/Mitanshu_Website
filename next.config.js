const withPWA = require('next-pwa');

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
