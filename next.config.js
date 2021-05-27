/* eslint-disable global-require */
module.exports = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      // // eslint-disable-next-line global-require
      require('./scripts/generate_sitemap.ts');
      require('./scripts/generate_rss.ts');
    }

    return config;
  },
};
