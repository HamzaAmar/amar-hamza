const { withContentlayer } = require('next-contentlayer');

const nextConfig = {
  swcMinify: true,
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/generate_sitemap');
      require('./scripts/generate_rss');
    }
    return config;
  },
};

module.exports = withContentlayer(nextConfig);
