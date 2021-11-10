import React from 'react';
import Link from 'next/link';
import { formatDate } from '@utils/formatDate';
import Image from 'next/image';
import PostType from '@type/post';

import { Button } from '..';

import styles from './Article.module.css';

const Article = ({ excerpt, title, date, slug, tags }: PostType) => {
  return (
    <article className={styles.article}>
      <div className={styles.contentImage}>
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

        <div className={styles.tagContainer}>
          {tags?.map((tag) => (
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
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{excerpt}</p>
      </div>

      <Link href={`/blogs/${slug}`} passHref>
        <Button variant="outline" as="a" className={styles.button}>
          Read More
        </Button>
      </Link>
    </article>
  );
};

export default Article;
