import React from 'react';
import SOCIALS from '@constants/socialMenu';
import cn from 'classnames';

import styles from './social.module.css';
import SocialProps from './social.type';

const Social = ({
  className,
  direction = 'horizontal',
}: SocialProps) => {
  const rootStyle = cn(
    styles.socials,
    {
      [styles.vertical]: direction === 'vertical',
      [styles.horizontal]: direction === 'horizontal',
    },
    className,
  );
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
