const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
  images: {
    minimumCacheTTL: 60,
    domains: ['res.cloudinary.com', 'api.mapbox.com'],
  },
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
});
