import {
  Facebook,
  Github,
  Linkdin,
  Twitter,
} from '@components/icons';
import React, { ReactNode } from 'react';
import { formatDate } from 'utils/formatDate';
import styles from './readingLayout.module.css';

interface IAuthor {
  name: string;
  picture: string;
}

interface Props {
  children: ReactNode;
  title: string;
  coverImage: string;
  date: string;
  readingTime: any;
  author: IAuthor;
}

const readingLayout = ({
  children,
  title,
  coverImage,
  date,
  author,
  readingTime,
}: Props) => {
  console.log(readingTime);
  return (
    <div className={styles.container}>
      <div className={styles.readingContent}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>{title}</h1>
        </div>
        <div className={styles.infoAndDateContainer}>
          <div className={styles.infoAndDate}>
            <div className={styles.authorImageContainer}>
              <img
                className={styles.authorImage}
                src={author.picture}
              />
            </div>
            <div className={styles.authorInfo}>
              <h4 className={styles.authorName}>{author.name}</h4>
              <ul className={styles.mediaList}>
                <li className={styles.mediaItem}>
                  <Facebook width="55%" />
                </li>
                <li className={styles.mediaItem}>
                  <Twitter width="55%" />
                </li>
                <li className={styles.mediaItem}>
                  <Github width="55%" height="55%" />
                </li>
                <li className={styles.mediaItem}>
                  <Linkdin width="55%" />
                </li>
              </ul>
            </div>
          </div>
          <div>
            <p>{readingTime.text}</p>
            <p>{formatDate(date)}</p>
          </div>
        </div>
        <div className={styles.blogImageContainer}>
          <img className={styles.blogImage} src={coverImage} />
        </div>

        <div>{children}</div>
      </div>
    </div>
  );
};

export default readingLayout;
