/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { getAllFilesFrontMatter } from '@lib/mdx';
import { Layout } from '@components/core';
// import { Article } from '@components/ui';
import styles from '@styles/blog.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { formatDate } from '@utils/formatDate';
import { GetStaticProps } from 'next';
import Image from 'next/image';

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllFilesFrontMatter('blog');

  return { props: { posts } };
};

interface BlogProps {
  // author: { name: string; picture: string };
  // coverImage: string;
  date: string;
  excerpt: string;
  image: string;
  slug: string;
  // tag: string;
  title: string;
  tags: string[];
}

const Article = ({
  image,
  excerpt,
  title,
  date,
  slug,
  tags,
}: BlogProps) => {
  const { pathname } = useRouter();

  return (
    <article className={styles.article}>
      <div className={styles.contentImage}>
        <Link href={`${pathname}/${slug}`}>
          <a className={styles.href}>
            <div className={styles.imageContainer}>
              <Image
                src="/assets/blog/hello-world/cover.jpg"
                alt="Hello world"
                objectFit="cover"
                layout="fill"
                className={styles.cover}
                objectPosition="center top"
              />
            </div>
          </a>
        </Link>
        <div className={styles.tagContainer}>
          {tags.map((tag) => (
            <div key={tag} className={styles.tag}>
              {tag}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.contentInfo}>
        <time dateTime={date} className={styles.date}>
          {formatDate(date)}
        </time>
        <Link href={`${pathname}/${slug}`}>
          <h1>
            <a className={styles.title}>{title}</a>
          </h1>
        </Link>
        <p className={styles.description}>{excerpt}</p>
      </div>
    </article>
  );
};

export default function Blog({ posts }: { posts: BlogProps[] }) {
  return (
    <Layout title="Blog Page">
      <div className={styles.content}>
        {posts.map((post) => (
          <Article key={post.slug} {...post} />
        ))}
      </div>
    </Layout>
  );
}
