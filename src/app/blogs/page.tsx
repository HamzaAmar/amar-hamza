import React from 'react';
import { getBlogPosts } from 'api/blog';
import { Articles } from 'app/_components';
import { Metadata } from 'next';

export default async function Blog() {
  const posts = getBlogPosts();

  return <Articles posts={posts} />;
}

export const metadata: Metadata = {
  title: 'Blogs Posts',
  description:
    'Level up your web dev skills! Explore React, CSS, accessibility & design systems. Build beautiful, inclusive interfaces.',
};
