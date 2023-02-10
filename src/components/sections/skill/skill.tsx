import React from 'react';
import {
  Flex,
  Heading,
  Text,
  CircleProgress,
  Button,
} from '@components/core';

import SKILLS from './skills.data';
import type { ItemSkillProps } from './skills.type';

const Item = ({
  title,
  icon,
  level,
  description,
}: ItemSkillProps) => {
  const iconUI = icon ? (
    <div className="skill--icon-wrap">
      <div className="skill--icon">{icon}</div>
    </div>
  ) : null;
  return (
    <Flex
      as="li"
      gap="md"
      className="skill l_box-article"
      key={title}
    >
      <div className="skill--progress">
        <CircleProgress color="primary" value={level} />
      </div>
      <div className="skill--content l_flow u_flex-1">
        <Flex justify="between" items="center">
          <Flex gap="sm" items="center">
            {iconUI}
            <Heading as="h3" size="sm">
              {title}
            </Heading>
          </Flex>
          <Button variant="outline" as="p" size="xs" color="primary">
            Projects
          </Button>
        </Flex>
        <Text
          truncate="multiline"
          numberLine={4}
          color="slate"
          size="sm"
          contrast="low"
        >
          {description}
        </Text>
      </div>
    </Flex>
  );
};

const SkillsContainer = () => {
  return (
    <section className="section l_flow">
      <Heading>Skills</Heading>
      <ul className="skills l_grid">
        {SKILLS.map(({ slug, ...rest }) => {
          return <Item key={slug} {...rest} />;
        })}
      </ul>
    </section>
  );
};

export default SkillsContainer;
