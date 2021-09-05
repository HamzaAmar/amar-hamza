/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import cn from 'classnames';

import styles from './Article.module.css';

interface ArticleProps {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  tags: string[];
  coverImage: string;
  className: string;
}

const Article = ({
  title,
  slug,
  date,
  excerpt,
  tags,
  coverImage,
  className,
}: ArticleProps) => {
  return (
    <Link href={`/blogs/${slug}`}>
      <a className={styles.href}>
        <div className={cn(styles.container, className)}>
          <img src={coverImage} alt="" />
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.date}>
            {date}
            <span role="img" aria-label="cup of coffee">
              ☕️
            </span>
            5 min read
          </h2>
          <p className={styles.text}>{excerpt}</p>
          <nav className={styles.nav}>
            <ul>
              {tags.map((keyword) => (
                <li key={keyword}>
                  <Link href={`/tags/${keyword.toLowerCase()}`}>
                    {keyword}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </a>
    </Link>
  );
};

export default Article;
