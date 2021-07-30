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
    <article className={styles.article}>
      <div className={styles.contentImage}>
        <Link href={`${pathname}/${slug}`}>
          <a className={styles.href}>
            <div className={styles.imageContainer}>
              <img
                className={styles.image}
                src="https://picsum.photos/id/200/1000/1000"
              />
            </div>
          </a>
        </Link>
        <div className={styles.tagContainer}>
          <div className={styles.tag}>Hello</div>
          <div className={styles.tag}>Hello</div>
          <div className={styles.tag}>Hello</div>
          <div className={styles.tag}>Hello</div>
        </div>
      </div>
      <div className={styles.contentInfo}>
        <time dateTime={date} className={styles.date}>
          {formatDate(date)}
        </time>
        <Link href={`${pathname}/${slug}`}>
          <a className={styles.title}>{title}</a>
        </Link>
        <p className={styles.description}>{excerpt}</p>
      </div>
    </article>
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
