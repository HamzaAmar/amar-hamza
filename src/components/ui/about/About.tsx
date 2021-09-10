import React from 'react';
import {
  Facebook,
  Github,
  Linkdin,
  Twitter,
  Instagram,
} from '@components/icons';

import { Button } from '../form';

import styles from './About.module.css';

interface Socials {
  id: number;
  icon: React.ReactNode;
  name: string;
  link: string;
}

const socials: Socials[] = [
  {
    id: 1,
    icon: <Facebook />,
    name: 'Facebook',
    link: 'https://www.facebook.com',
  },

  {
    id: 2,
    icon: <Twitter />,
    name: 'Twitter',
    link: 'https://twitter.com/HamzaMiloudAma1',
  },
  {
    id: 3,
    icon: <Instagram />,
    name: 'Instagram',
    link: 'https://twitter.com/HamzaMiloudAma1',
  },
  {
    id: 4,
    icon: <Linkdin />,
    name: 'Linkdin',
    link: 'https://www.linkedin.com/in/hamza-miloud-amar-463b24167',
  },
  {
    id: 5,
    icon: <Github />,
    name: 'Github',
    link: 'https://github.com/HamzaAmar',
  },
];

const About = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.socials}>
        {socials.map(({ id, icon, link, name }) => (
          <li key={id} className={styles.socialItem}>
            <a
              href={link}
              target="_blank"
              className={styles.socialItemLink}
              rel="noreferrer"
              aria-label={`${name} icon`}
            >
              {icon}
            </a>
          </li>
        ))}
      </ul>
      <div className={styles.heroContent}>
        <div className={styles.description}>
          <h1 className={styles.myName}>Hamza Amar</h1>
          <p className={styles.info}>
            Senior Front End Developer I like every think about it but
            I am in love with
            <strong className={styles.strong}>React</strong>
            <strong className={styles.strong}>HTML</strong>
            <strong className={styles.strong}>CSS</strong>
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
