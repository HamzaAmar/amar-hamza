import styles from '@styles/home.module.css';
import React from 'react';
import {
  Service,
  Project,
  About,
  Skill,
  Articles,
} from '@components/sections';
import { Layout } from '@components/common';
import { getAllFilesFrontMatter } from '@lib/mdx';
import { GetStaticProps } from 'next';
import PostType from '@type/post';
import { Heading } from '@components/core';

export const getStaticProps: GetStaticProps = () => {
  const posts = getAllFilesFrontMatter('blog', 8);

  return { props: { posts } };
};

const IndexPage = ({ posts }: { posts: PostType[] }) => {
  return (
    <>
      <Layout title="Home Page">
        <div className="home">
          <div className="home--about">
            <About />
          </div>
          <Service />
          <Skill />
          <Articles posts={posts} />
          <section className="section l_flow">
            <Heading>Projects</Heading>
            <Project />
          </section>
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;
