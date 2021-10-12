import React from 'react';
import { Social } from '@components/ui';

import { Button } from '../form';

import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <Social className={styles.absolute} direction="vertical" />
      <div className={styles.heroContent}>
        <div className={styles.description}>
          <h1 className={styles.myName}>Hamza Amar</h1>
          <p className={styles.info}>
            Senior Front End Developer I like every think about it but
            I am in love with
            <span className={styles.language}>
              <strong className={styles.strong}>React</strong>
              <strong className={styles.strong}>HTML</strong>
              <strong className={styles.strong}>CSS</strong>
            </span>
          </p>
          <div className={styles.buttonContainer}>
            <Button>Hire Me</Button>
          </div>
        </div>
      </div>
      <div className={`${styles.title} ${styles.top}`}>
        <p className={styles.topTitle}>
          I am a freelance web developer
        </p>
      </div>

      <div className={`${styles.title} ${styles.bottom}`}>
        <p className={styles.bottomTitle}>Am Available</p>
      </div>
      <div className={styles.right}>
        <p className={styles.rightTitle}>scroll Down</p>
      </div>
    </div>
  );
};

export default About;
