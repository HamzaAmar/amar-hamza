import React from 'react';
import {
  Flex,
  Heading,
  Text,
  CircleProgress,
  Button,
  Grid,
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
            <Heading as="h3" weight="normal" size="xs">
              {title}
            </Heading>
          </Flex>
          <Button variant="outline" as="p" size="xs" color="primary">
            Projects
          </Button>
        </Flex>
        <Text
          truncate="multiline"
          numberLine={5}
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
    <section
      aria-labelledby="skills-id-section"
      className="section l_flow"
    >
      <Heading id="skills-id-section">Skills</Heading>
      <Grid
        gap="sm"
        as="ul"
        columns="1fr 1fr"
        className="md_grid-one"
      >
        {SKILLS.map(({ slug, ...rest }) => {
          return <Item key={slug} {...rest} />;
        })}
      </Grid>
    </section>
  );
};

export default SkillsContainer;
