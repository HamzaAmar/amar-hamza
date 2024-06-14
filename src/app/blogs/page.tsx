/* eslint-disable @typescript-eslint/require-await */

import React from 'react';
import { compareDesc } from 'date-fns';
import { Articles } from '@components/sections';
import { allBlogs, type Blog } from 'contentlayer/generated';

export default async function Blog() {
  const posts = allBlogs.sort((first, second) => {
    return compareDesc(new Date(first.date), new Date(second.date));
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
