import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

import { getFiles, getFileBySlug } from '@lib/mdx';
// import { getTweets } from '@lib/twitter';
import { Layout } from '@components/core';
import Image from 'next/image';
import { ReadingLayout } from '@components/core';
import { GetStaticPaths, GetStaticProps } from 'next';
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
  console.log(
    'This is the value of frontmatter helo wolrd',
    frontMatter,
  );
  return (
    <Layout>
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

  const post = await getFileBySlug('challenge', slug);

  return { props: { ...post } };
};

export async function getStaticPaths() {
  const challenge = await getFiles('challenge');

  return {
    paths: challenge.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ''),
      },
    })),

    fallback: false,
  };
}
