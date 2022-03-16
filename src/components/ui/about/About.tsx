import React from 'react';
import { Social } from '@components/ui';
import Link from 'next/link';
import { Button } from '@components/core';

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
            <Link href="/contact" passHref>
              <Button as="a">Hire Me</Button>
            </Link>
            <Link href="/resume" passHref>
              <Button variant="text" as="a">
                Resume
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className={`${styles.title} ${styles.top}`}>
        <p className={styles.topTitle}>
          <div>I am a freelance web developer</div>
          <div className={styles.circle} />
        </p>
      </div>

      <div className={`${styles.title} ${styles.bottom}`}>
        <p className={styles.bottomTitle}>
          <div>Am Available</div>
          <div
            className={`${styles.circle} ${styles.bottomCircle}`}
          />
        </p>
      </div>
      <div className={styles.right}>
        <p className={styles.rightTitle}>scroll Down</p>
      </div>
    </div>
  );
};

export default About;
