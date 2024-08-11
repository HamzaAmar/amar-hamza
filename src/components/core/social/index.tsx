import React from 'react';
import { Flex, IconButton } from '@components/core';
import SOCIALS from '@constants/socialMenu';

import SocialProps from './social.type';
import { classnames } from '@utils/classnames';

export const Social = ({
  className,
  direction = 'horizontal',
}: SocialProps) => {
  const socialDirection =
    direction === 'horizontal' ? 'row' : 'column';
  return (
    <ul
      style={{ flexDirection: socialDirection }}
      {...classnames(`s-o u_column`, {
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
            size="md"
            target="_blank"
            rel="noreferrer noopener"
            title={`Visit My ${name} account`}
          />
        </li>
      ))}
    </ul>
  );
};
