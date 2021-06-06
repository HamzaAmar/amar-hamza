import React from 'react';

import { Service, Project, About, Skill } from '../components/ui';
import { Layout } from '../components/core';
import style from '@styles/home.module.css';

const IndexPage = () => {
  return (
    <>
      <Layout>
        <div className={style.container}>
          <div className={style.section}>
            <About />
          </div>
          <div className={style.section}>
            <h1 className={style.heading}>Services</h1>
            <Service />
          </div>
          <div className={style.section}>
            <h1 className={style.heading}>Skills</h1>
            <Skill />
          </div>
          <div className={style.section}>
            <h3 className={style.heading}>Projects</h3>
            <Project />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;
