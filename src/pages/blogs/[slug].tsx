import { MDXRemote } from 'next-mdx-remote';

import { getFiles, getFileBySlug } from '@lib/mdx';
import { getTweets } from '@lib/twitter';
import { Layout } from '@components/core';
import Image from 'next/image';

export default function Blog({ mdxSource, frontMatter }) {
  return (
    <Layout>
      <div
        style={{
          padding: '4rem',
        }}
      >
        <MDXRemote components={{ Image }} {...mdxSource} />
      </div>
    </Layout>
  );
}

export const getStaticProps = async (context) => {
  const { slug } = context.params;
  const post = await getFileBySlug('blog', slug);

  return { props: { ...post } };
};

export async function getStaticPaths() {
  const posts = await getFiles('blog');

  return {
    paths: [
      {
        params: {
          slug: 'preview',
        },
      },
    ],
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  };
}
