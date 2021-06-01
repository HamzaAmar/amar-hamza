import { useState } from 'react';
import { getAllFilesFrontMatter } from '@lib/mdx';
import { Layout } from '@components/core';
// import { Article } from '@components/ui';
import styles from '@styles/blog.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { formatDate } from '@utils/formatDate';
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllFilesFrontMatter('blog');

  return { props: { posts } };
};

interface IProps {
  author: { name: string; picture: string };
  coverImage: string;
  date: string;
  excerpt: string;
  image: string;
  slug: string;
  tag: string;
  title: string;
}

const Article = ({ image, excerpt, title, date, slug }: IProps) => {
  const { pathname } = useRouter();
  console.log(`${pathname}/${slug}`);

  return (
    <Link href={`${pathname}/${slug}`}>
      {/* <a className={styles.href}> */}
      <article className={styles.article}>
        <div className={styles.contentImage}>
          <div className={styles.imageContainer}>
            <img
              className={styles.image}
              src="https://picsum.photos/id/200/1000/1000"
            />
            <div className={styles.tagContainer}>
              <div className={styles.tag}>Hello</div>
              <div className={styles.tag}>Hello</div>
              <div className={styles.tag}>Hello</div>
              <div className={styles.tag}>Hello</div>
            </div>
          </div>
        </div>
        <div className={styles.contentInfo}>
          <small className={styles.date}>{formatDate(date)}</small>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{excerpt}</p>
        </div>
      </article>
      {/* </a> */}
    </Link>
  );
};

export default function Blog({ posts }: { posts: IProps[] }) {
  return (
    <Layout>
      <div className={styles.content}>
        {posts.map((post) => (
          <Article key={post.slug} {...post} />
        ))}
      </div>
    </Layout>
  );
}
