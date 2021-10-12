import React from 'react';
import { getAllFilesFrontMatter } from '@lib/mdx';
import { Layout } from '@components/core';
import { GetStaticProps } from 'next';
import { Article } from '@components/ui';
import PostType from '@type/post';

export const getStaticProps: GetStaticProps = () => {
  const challenges = getAllFilesFrontMatter('challenge');
  return { props: { challenges } };
};

export default function Blog({
  challenges,
}: {
  challenges: PostType[];
}) {
  return (
    <Layout title="Challenge Page">
      <div className="articleContainer">
        {challenges.map((post) => (
          <Article key={post.slug} {...post} />
        ))}
      </div>
    </Layout>
  );
}
