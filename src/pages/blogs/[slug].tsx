import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

import { getFiles, getFileBySlug } from '@lib/mdx';
import { Layout } from '@components/core';
import Image from 'next/image';
import { ReadingLayout } from '@components/core';
import { GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { components } from '@components/ui';

interface IFrontMatter {
  author: {
    name: string;
    picture: string;
  };
  coverImage: string;
  date: string;
  excerpt: string;
  image: string;
  readingTime: {
    text: string;
    minutes: number;
    time: number;
    words: number;
  };
  slug: string;
  tag: string;
  title: string;
  wordCount: number;
}

interface Props {
  mdxSource: MDXRemoteSerializeResult;
  frontMatter: IFrontMatter;
}

export default function Blog({ mdxSource, frontMatter }: Props) {
  const { title, excerpt, coverImage, date } = frontMatter;
  return (
    <Layout
      title={title}
      description={excerpt}
      image={coverImage}
      date={new Date(date).toISOString()}
      type="article"
    >
      <ReadingLayout {...frontMatter}>
        <MDXRemote components={components} {...mdxSource} />
      </ReadingLayout>
    </Layout>
  );
}

interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as Params;

  const post = await getFileBySlug('blog', slug);

  return { props: { ...post } };
};

export async function getStaticPaths() {
  const posts = await getFiles('blog');

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ''),
      },
    })),

    fallback: false,
  };
}
