import React from 'react';
import { Flex, IconButton } from '@components/core';
import SOCIALS from '@constants/socialMenu';
import { classnames } from '@utils/classnames';

import type SocialProps from './social.type';

export const Social = ({
  className,
  direction = 'horizontal',
  size = 'md',
}: SocialProps) => {
  const socialDirection =
    direction === 'horizontal' ? 'row' : 'column';
  return (
    <ul
      style={{ flexDirection: socialDirection }}
      {...classnames('s-o u_column', {
        [`s-o_${direction}`]: direction === 'vertical',
        [className!]: className,
      })}
    >
      {SOCIALS.map(({ id, icon, link, name }) => (
        <li key={id}>
          <IconButton
            as="a"
            href={link}
            icon={icon}
            size={size}
            target="_blank"
            rel="noreferrer noopener"
            title={`Visit My ${name} account`}
          />
        </li>
      ))}
    </ul>
  );
};
