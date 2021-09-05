/* eslint-disable jsx-a11y/anchor-is-valid */
import { Layout } from '@components/core';
import React, { ReactNode, useState } from 'react';
import styles from '@styles/tutorial.module.css';
import { Css, Node, ReactIcon, TypeScript } from '@components/icons';
import {
  getAllFilesFrontMatter,
  getFileBySlug,
  getFiles,
} from '@lib/mdx';
import { GetStaticProps } from 'next';
import Link from 'next/link';

const programing = [
  { id: 1, title: 'Node', icon: <Node width="60%" height="60%" /> },
  {
    id: 2,
    title: 'React',
    icon: <ReactIcon width="60%" height="60%" />,
  },

  {
    id: 4,
    title: 'TypeScript',
    icon: <TypeScript width="60%" height="60%" />,
  },
  {
    id: 5,
    title: 'Css',
    icon: <Css width="60%" height="60%" />,
  },
];

export const getStaticProps: GetStaticProps = () => {
  const tutorials = getAllFilesFrontMatter('tutorial');

  return { props: { tutorials } };
};

interface ItemProps {
  // author: { name: string; picture: string };
  // coverImage: string;
  // date: string;
  // excerpt: string;
  image: string;
  slug: string;
  // tag: string;
  title: string;
  // icon: ReactNode;
}

const Item = ({ image, title, slug }: ItemProps) => {
  return (
    <div className={styles.itemContainer}>
      <Link href={`tutorial/${slug}`}>
        <a>
          <div className={styles.imageContainer}>
            <img className={styles.image} src={image} alt="" />
          </div>

          <div className={styles.itemContent}>
            <div className={styles.itemContentParent}>
              <div className={styles.iconContainer}>
                <ReactIcon width="70%" height="70%" />
              </div>
              <h3 className={styles.heading}>{title}</h3>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

interface ProgrammingProps {
  title: string;
  icon: ReactNode;
}

const ProgramingLanguageList = ({
  title,
  icon,
}: ProgrammingProps) => {
  // const [type, setType] = useState(null);

  return (
    <li className={styles.listItem}>
      <div className={styles.listItemIconContainer}>{icon}</div>
      <p className={styles.listItemHeading}>{title}</p>
    </li>
  );
};

const index = ({ tutorials }: { tutorials: ItemProps[] }) => {
  return (
    <Layout title="Tutorial Page">
      <div className={styles.container}>
        <div className={styles.left}>
          <ul className={styles.list}>
            {programing.map(({ title, id, icon }) => (
              <ProgramingLanguageList
                title={title}
                icon={icon}
                key={id}
              />
            ))}
          </ul>
        </div>
        <div className={styles.right}>
          {tutorials.map((challange) => (
            <Item key={challange.slug} {...challange} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default index;
