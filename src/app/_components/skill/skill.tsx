import React from 'react';
import {
  Flex,
  Heading,
  Text,
  CircleProgress,
  Button,
  Grid,
  HeroHeading,
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
      <div className="skill--content l_flow__2xs u_flex-1">
        <Flex justify="between" items="center">
          <Flex gap="xs" items="center">
            {iconUI}
            <Text weight="medium" size="md">
              {title}
            </Text>
          </Flex>
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
      className="section l_flow__lg"
    >
      <HeroHeading
        heading="My Web Development Expertise"
        subHeading="The Tools and Technologies I Use to Build Your Web Presence"
        section="skills"
      />
      <Grid
        gap="lg"
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
