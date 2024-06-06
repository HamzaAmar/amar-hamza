/* eslint-disable @typescript-eslint/require-await */

import React from 'react';
import { Layout } from '@components/common';
import { compareDesc } from 'date-fns';
import { Articles } from '@components/sections';
import { allBlogs, type Blog } from 'contentlayer/generated';

export async function getStaticProps() {
  const posts = allBlogs.sort((first, second) => {
    return compareDesc(new Date(first.date), new Date(second.date));
  });
  return { props: { posts } };
}

export default function Blog({ posts }: { posts: Blog[] }) {
  return (
    <Layout title="Blog Page">
      <Articles
        description="in this section we cover React, CSS, accessibility, and
          design systems to help you strengthen your knowledge and
          build beautiful, user-friendly web interfaces."
        posts={posts}
      />
    </Layout>
  );
}
