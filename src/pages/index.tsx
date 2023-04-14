import React from 'react';
import {
  Service,
  Project,
  About,
  Skill,
  Articles,
} from '@components/sections';
import { Layout } from '@components/common';
// import { getAllFilesFrontMatter } from '@lib/mdx';
import { GetStaticProps } from 'next';
import { allBlogs } from 'contentlayer/generated';

function getBlogPosts(max: number) {
  const postLength = allBlogs.length > max ? max : allBlogs.length;
  const posts = Array.from({ length: postLength }).map(
    (_, index) => allBlogs[index],
  );
  return posts;
}

export const getStaticProps: GetStaticProps = () => {
  const posts = getBlogPosts(8);
  return { props: { posts } };
};

const IndexPage = ({ posts }: any) => {
  return (
    <Layout title="Home Page">
      <div className="home">
        <div className="home--about">
          <About />
        </div>
        <Service />
        <Skill />
        <Articles posts={posts} />
        <Project />
      </div>
    </Layout>
  );
};

export default IndexPage;
