import React from 'react';
import { IconButton } from '@components/core';
import SOCIALS from '@constants/socialMenu';

import SocialProps from './social.type';

const Social = ({
  className,
  direction = 'horizontal',
}: SocialProps) => {
  return (
    <ul className={`socials socials__${direction} ${className}`}>
      {SOCIALS.map(({ id, icon, link, name }) => (
        <li key={id}>
          <IconButton
            as="a"
            href={link}
            target="_blank"
            rel="noreferrer"
            aria-label={`${name} icon`}
          >
            {icon}
          </IconButton>
        </li>
      ))}
    </ul>
  );
};

export default Social;
