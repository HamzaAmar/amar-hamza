import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

import { getFiles, getFileBySlug } from '@lib/mdx';
// import { getTweets } from '@lib/twitter';
import { Layout } from '@components/core';
import Image from 'next/image';
import { ReadingLayout } from '@components/core';
import { GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';

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
        <MDXRemote components={{ Image }} {...mdxSource} />
      </ReadingLayout>
    </Layout>
  );
}

interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as Params;

  console.log(slug, 'this is the value of slug');

  const post = await getFileBySlug('tutorial', slug);

  return { props: { ...post } };
};

export async function getStaticPaths() {
  const posts = await getFiles('tutorial');

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ''),
      },
    })),

    fallback: false,
  };
}
