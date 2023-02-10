/* eslint-disable @typescript-eslint/require-await */
import { ParsedUrlQuery } from 'querystring';

import { useMDXComponent } from 'next-contentlayer/hooks';
import React from 'react';
import { GetStaticProps } from 'next';
import { Layout, ReadingLayout } from '@components/common';
import { allBlogs, type Blog } from 'contentlayer/generated';
import { Heading } from '@components/core';
import { components } from '@components/ui';

export default function Blog({ post }: { post: Blog }) {
  const { body, ...rest } = post;
  const Component = useMDXComponent(body.code);
  return (
    <Layout
      title={rest.title}
      description={rest.excerpt}
      image={rest.image}
      date={new Date(rest.date).toISOString()}
      type="article"
    >
      <ReadingLayout {...post}>
        <Component components={components} />
        <Heading>Hello</Heading>
      </ReadingLayout>
    </Layout>
  );
}

interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as Params;

  const post = allBlogs.find((blog) => slug === blog.slug);

  return { props: { post } };
};

export function getStaticPaths() {
  return {
    paths: allBlogs.map(({ slug }) => ({
      params: {
        slug,
      },
    })),

    fallback: false,
  };
}
