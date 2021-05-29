import { MDXRemote } from 'next-mdx-remote';

import { getFiles, getFileBySlug } from '@lib/mdx';
import { getTweets } from '@lib/twitter';
import { Layout } from '@components/core';
import Image from 'next/image';
import { ReadingLayout } from '@components/core';

export default function Blog({ mdxSource, frontMatter }) {
  return (
    <Layout>
      <ReadingLayout {...frontMatter}>
        <MDXRemote components={{ Image }} {...mdxSource} />
      </ReadingLayout>
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
