import withBundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzerInstance = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  transpilePackages: ['next-mdx-remote'],
};

export default withBundleAnalyzerInstance(nextConfig);
