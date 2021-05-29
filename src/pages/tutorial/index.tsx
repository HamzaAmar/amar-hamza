import { Layout } from '@components/core';
import React, { useState } from 'react';
import styles from '@styles/tutorial.module.css';
import { CSS, Node, ReactIcon, TypeScript } from '@components/icons';

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
  { id: 5, title: 'Css', icon: <CSS width="60%" height="60%" /> },
];

const Item = () => {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src="https://picsum.photos/id/234/400/400"
        />
      </div>

      <div className={styles.itemContent}>
        <div className={styles.itemContentParent}>
          <div className={styles.iconContainer}>
            <ReactIcon width="70%" height="70%" />
          </div>
          <h3 className={styles.heading}>
            hello world my name is hamza
          </h3>
        </div>
      </div>
    </div>
  );
};

const ProgramingLanguageList = ({ title, icon }) => {
  // const [type, setType] = useState(null);

  return (
    <li className={styles.listItem}>
      <div className={styles.listItemIconContainer}>{icon}</div>
      <h4 className={styles.listItemHeading}>{title}</h4>
    </li>
  );
};

const index = () => {
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
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </Layout>
  );
};

export default index;
