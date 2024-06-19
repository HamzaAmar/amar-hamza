import React from 'react';
import { compareDesc } from 'date-fns';
import { getBlogPosts } from 'api/blog';
import { Articles } from 'app/_components';
import { Metadata } from 'next';

export default async function Blog() {
  const posts = getBlogPosts().sort((first, second) => {
    return compareDesc(
      new Date(first.metadata.publishedAt),
      new Date(second.metadata.publishedAt),
    );
  });

  return <Articles posts={posts} />;
}

export const metadata: Metadata = {
  title: 'Blogs Posts',
  description:
    'Level up your web dev skills! Explore React, CSS, accessibility & design systems. Build beautiful, inclusive interfaces.',
};
