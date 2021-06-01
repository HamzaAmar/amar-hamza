import { Layout } from '@components/core';
import React, { ReactNode, useState } from 'react';
import styles from '@styles/tutorial.module.css';
import { CSS, Node, ReactIcon, TypeScript } from '@components/icons';
import { getAllFilesFrontMatter } from '@lib/mdx';
import { GetStaticProps } from 'next';

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
    icon: <CSS width="60%" height="60%" />,
  },
];

export const getStaticProps: GetStaticProps = async () => {
  const tutorials = await getAllFilesFrontMatter('tutorial');

  return { props: { tutorials } };
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
  icon: ReactNode;
}

const Item = ({ image, title }: IProps) => {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={image} />
      </div>

      <div className={styles.itemContent}>
        <div className={styles.itemContentParent}>
          <div className={styles.iconContainer}>
            <ReactIcon width="70%" height="70%" />
          </div>
          <h3 className={styles.heading}>{title}</h3>
        </div>
      </div>
    </div>
  );
};

interface IProgramming {
  title: string;
  icon: ReactNode;
}

const ProgramingLanguageList = ({ title, icon }: IProgramming) => {
  // const [type, setType] = useState(null);

  return (
    <li className={styles.listItem}>
      <div className={styles.listItemIconContainer}>{icon}</div>
      <h4 className={styles.listItemHeading}>{title}</h4>
    </li>
  );
};

const index = ({ tutorials }: { tutorials: IProps[] }) => {
  return (
    <Layout>
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
