import styles from '@styles/home.module.css';
import React from 'react';
import { Service, Project, About, Skill } from '@components/ui';
import { Layout } from '@components/core';

const IndexPage = () => {
  return (
    <>
      <Layout title="Home Page">
        <div className={styles.container}>
          <div className={styles.about}>
            <About />
          </div>
          <section className={styles.section}>
            <h1 className={styles.heading}>Services</h1>
            <Service />
          </section>
          <section className={styles.section}>
            <h1 className={styles.heading}>Skills</h1>
            <Skill />
          </section>
          <section className={styles.section}>
            <h1 className={styles.heading}>Projects</h1>
            <Project />
          </section>
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;
