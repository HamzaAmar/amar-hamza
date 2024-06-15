import React from 'react';
import {
  Service,
  Project,
  About,
  Skill,
  Articles,
} from '@components/sections';
import { getBlogPostsWithLimit } from 'api/blog';

// function getBlogPosts(max: number) {
//   const postLength = allBlogs.length > max ? max : allBlogs.length;
//   const posts = Array.from({ length: postLength }).map(
//     (_, index) => allBlogs[index],
//   );
//   return posts;
// }

const IndexPage = async () => {
  const posts = getBlogPostsWithLimit(8);
  // const posts = getBlogPosts(8);

  return (
    <div className="home">
      <div className="home--about">
        <About />
      </div>
      <Service />
      <Skill />
      <Articles posts={posts} />
      <Project />
    </div>
  );
};

export default IndexPage;
