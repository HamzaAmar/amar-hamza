/* eslint-disable global-require */
module.exports = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/generate_sitemap');
      require('./scripts/generate_rss');
    }
    return config;
  },
};
