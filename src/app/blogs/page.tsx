import React from 'react';
import { compareDesc } from 'date-fns';
import { Articles } from '@components/sections';
import { getBlogPosts } from 'api/blog';

export default async function Blog() {
  const posts = getBlogPosts().sort((first, second) => {
    return compareDesc(
      new Date(first.metadata.publishedAt),
      new Date(second.metadata.publishedAt),
    );
  });

  return (
    <Articles
      description="in this section we cover React, CSS, accessibility, and
          design systems to help you strengthen your knowledge and
          build beautiful, user-friendly web interfaces."
      posts={posts}
    />
  );
}
