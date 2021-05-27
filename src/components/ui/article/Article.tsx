import React from 'react';
import Link from 'next/link';

import styles from './Article.module.css';
import cn from 'classnames';

interface IProps {
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
}: IProps) => {
  return (
    <Link href={`/blogs/${slug}`}>
      <a className={styles.href}>
        <div className={cn(styles.container, className)}>
          <img src={coverImage} />
          <h1 className={styles.title}>{title}</h1>
          <h3 className={styles.date}>{date} • ☕️ 5 min read</h3>
          <p className={styles.text}>{excerpt}</p>
          <nav className={styles.nav}>
            <ul>
              {tags?.map((keyword) => (
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
