import React from 'react';
import { getBlogPostsWithLimit } from 'api/blog';
import {
  About,
  Articles,
  Project,
  Service,
  Skill,
} from './_components';

const IndexPage = async () => {
  const posts = getBlogPostsWithLimit(8);

  return (
    <div className="home">
      <About />
      <Service />
      <Skill />
      <Articles posts={posts} />
      <Project />
    </div>
  );
};

export default IndexPage;
