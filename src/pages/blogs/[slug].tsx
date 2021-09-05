import { ParsedUrlQuery } from 'querystring';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { GetStaticProps } from 'next';
import { getFiles, getFileBySlug } from '@lib/mdx';
import { components } from '@components/ui';
import { Layout , ReadingLayout} from '@components/core';

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
