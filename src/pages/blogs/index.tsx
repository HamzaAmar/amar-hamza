import React from 'react';
import { getAllFilesFrontMatter } from '@lib/mdx';
import { Layout } from '@components/common';
import { GetStaticProps } from 'next';
import { Article } from '@components/ui';
import PostType from '@type/post';
import { Articles } from '@components/sections';

export const getStaticProps: GetStaticProps = () => {
  const posts = getAllFilesFrontMatter('blog');

  return { props: { posts } };
};

export default function Blog({ posts }: { posts: PostType[] }) {
  return (
    <Layout title="Blog Page">
      <Articles posts={posts} />
    </Layout>
  );
}
