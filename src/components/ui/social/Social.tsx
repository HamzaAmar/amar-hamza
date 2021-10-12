import React from 'react';
import SOCIALS from '@constants/socialMenu';
import cn from 'classnames';

import styles from './social.module.css';
import { SocialType } from './social.type';

const Social = ({
  className,
  direction = 'horizontal',
}: SocialType) => {
  const rootStyle = cn(styles.socials, className, {
    [styles.vertical]: direction === 'vertical',
    [styles.horizontal]: direction === 'horizontal',
  });
  return (
    <ul className={rootStyle}>
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
