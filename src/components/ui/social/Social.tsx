import React from 'react';
import SOCIALS from '@constants/socialMenu';

import styles from './social.module.css';
import SocialProps from './social.type';

const Social = ({
  className,
  direction = 'horizontal',
}: SocialProps) => {
  return (
    <ul
      className={`${styles.socials} ${styles[direction]} ${className}`}
    >
      {SOCIALS.map(({ id, icon, link, name }) => (
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
  );
};

export default Social;
