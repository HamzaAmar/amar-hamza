import React from 'react';
import { Flex, IconButton } from '@components/core';
import SOCIALS from '@constants/socialMenu';

import SocialProps from './social.type';

export const Social = ({
  className,
  direction = 'horizontal',
}: SocialProps) => {
  const socialDirection =
    direction === 'horizontal' ? 'row' : 'column';
  return (
    <Flex
      as="ul"
      gap="xs"
      direction={socialDirection}
      className={`s-o s-o_${direction} ${className}`}
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
    </Flex>
  );
};
