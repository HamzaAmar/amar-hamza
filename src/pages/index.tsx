import styles from '@styles/home.module.css';
import React from 'react';
import {
  Service,
  Project,
  About,
  Skill,
  Article,
} from '@components/ui';
import { Layout } from '@components/common';
import { getAllFilesFrontMatter } from '@lib/mdx';
import { GetStaticProps } from 'next';
import PostType from '@type/post';

export const getStaticProps: GetStaticProps = () => {
  const posts = getAllFilesFrontMatter('blog', 6);

  return { props: { posts } };
};

const IndexPage = ({ posts }: { posts: PostType[] }) => {
  return (
    <>
      <Layout title="Home Page">
        <div className={styles.container}>
          <div className={styles.about}>
            <About />
          </div>
          <section className={styles.section}>
            <h1 className={styles.heading}>Services</h1>
            <Service />
          </section>
          <section className={styles.section}>
            <h1 className={styles.heading}>Skills</h1>
            <Skill />
          </section>
          <section className={styles.section}>
            <h1 className={styles.heading}>Articles</h1>
            <div className="articleContainer">
              {posts.map((props) => (
                <Article key={props.slug} {...props} />
              ))}
            </div>
          </section>
          <section className={styles.section}>
            <h1 className={styles.heading}>Projects</h1>
            <Project />
          </section>
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;
