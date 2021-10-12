import React from 'react';
import { getAllFilesFrontMatter } from '@lib/mdx';
import { Layout } from '@components/core';
import { GetStaticProps } from 'next';
import { Article } from '@components/ui';
import PostType from '@type/post';

export const getStaticProps: GetStaticProps = () => {
  const posts = getAllFilesFrontMatter('blog');

  return { props: { posts } };
};

export default function Blog({ posts }: { posts: PostType[] }) {
  return (
    <Layout title="Blog Page">
      <div className="articleContainer">
        {posts.map((post) => (
          <Article key={post.slug} {...post} />
        ))}
      </div>
    </Layout>
  );
}
