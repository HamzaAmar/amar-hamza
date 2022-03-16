import { ParsedUrlQuery } from 'querystring';

import React from 'react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { getFiles, getFileBySlug } from '@lib/mdx';
// import { getTweets } from '@lib/twitter';
import Image from 'next/image';
import { ReadingLayout, Layout } from '@components/common';
import { GetStaticProps } from 'next';

interface FrontMatter {
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
  frontMatter: FrontMatter;
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

  const post = await getFileBySlug('tutorial', slug);

  return { props: { ...post } };
};

export function getStaticPaths() {
  const posts = getFiles('tutorial');

  return {
    paths: posts.map((post: any) => ({
      params: {
        slug: post.replace(/\.mdx/, ''),
      },
    })),

    fallback: false,
  };
}
