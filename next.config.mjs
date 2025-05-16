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
  async redirects() {
    return [
      {
        source:
          '/blogs/client-side-rendering-dynamic-user-experiences',
        destination: '/blogs/client-side-rendering',
        permanent: true,
      },
      {
        source:
          '/blogs/multi-page-application-traditional-yet-powerful',
        destination: '/blogs/multi-page-application',
        permanent: true,
      },
    ];
  },
  transpilePackages: ['next-mdx-remote'],
};

export default withBundleAnalyzerInstance(nextConfig);
