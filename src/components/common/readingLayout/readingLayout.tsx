import {
  Facebook,
  Github,
  Linkdin,
  Twitter,
} from '@components/icons';
import React, { ReactNode } from 'react';
import { formatDate } from '@utils/formatDate';
import type { Blog } from 'contentlayer/generated';
import {
  Avatar,
  Flex,
  Heading,
  IconButton,
  Text,
} from '@components/core';

interface ReadingProps extends Blog {
  children: ReactNode;
}

const readingLayout = ({
  children,
  title,
  image,
  date,
  author,
  readingTime,
}: ReadingProps) => {
  return (
    <div className="reading-layout center l_flow">
      <Heading as="h1" align="center">
        {title}
      </Heading>
      <div>
        <Flex items="center" gap="sm">
          <Avatar image={author.picture} title="hello" />
          <Flex gap="xs" direction="column" className="u_flex-1">
            <Text size="sm" weight="normal">
              {author.name}
            </Text>
            <Flex as="ul" gap="xs" className="reading-layout--list">
              <li>
                <IconButton
                  size="xs"
                  icon={<Facebook />}
                  title={`GO TO ${author.name} Facebook`}
                />
              </li>
              <li>
                <IconButton
                  size="xs"
                  icon={<Twitter />}
                  title={`GO TO ${author.name} Facebook`}
                />
              </li>
              <li>
                <IconButton
                  size="xs"
                  icon={<Github />}
                  title={`GO TO ${author.name} Facebook`}
                />
              </li>
              <li>
                <IconButton
                  size="xs"
                  icon={<Linkdin />}
                  title={`GO TO ${author.name} Facebook`}
                />
              </li>
            </Flex>
          </Flex>
          <div>
            <Text size="sm">{formatDate(date)}</Text>
            <Text
              align="center"
              size="sm"
              color="slate"
              contrast="low"
            >
              {readingTime.text}
            </Text>
          </div>
        </Flex>
      </div>
      <div>
        <img src={image} alt="" />
      </div>

      <div className="l_flow">{children}</div>
    </div>
  );
};

export default readingLayout;
