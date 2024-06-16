import React from 'react';
import { getBlogPostsWithLimit } from 'api/blog';
import {
  About,
  Articles,
  Project,
  Service,
  Skill,
} from './_components';

// .home {
//   display: grid;
// }

// @media (max-width: 800px) {
//   .section {
//     font-size: 0.7rem;
//   }
// }

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
