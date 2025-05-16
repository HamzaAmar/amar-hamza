import React from "react";

import {
  CircleProgress,
  Flex,
  Grid,
  HeroHeading,
  Text,
} from "@components/core";

import type { ItemSkillProps } from "./skills.type";

import SKILLS from "./skills.data";

const Item = ({
  title,
  icon,
  level,
  description,
}: ItemSkillProps) => {
  const iconUI = icon
    ? (
        <div className="sk-C">
          <div className="sk-I">{icon}</div>
        </div>
      )
    : null;
  return (
    <Flex
      as="li"
      gap="4"
      className="sk- l_box-article shows-scroll"
      key={title}
    >
      <div className="sk-A">
        <CircleProgress color="p" value={level} />
      </div>
      <div className="Sf-2 u_flex-1">
        <Flex justify="between" items="center">
          <Flex gap="3" items="center">
            {iconUI}
            <Text weight="5" size="5">
              {title}
            </Text>
          </Flex>
        </Flex>
        <Text truncate="5" color="b" size="4" low>
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
      className="section Sf-6"
    >
      <HeroHeading
        heading="My Web Development Expertise"
        subHeading="The Tools and Technologies I Use to Build Your Web Presence"
        section="skills"
      />
      <Grid gap="4" as="ul" columns="1fr 1fr" className="md_grid-one">
        {SKILLS.map(({ slug, ...rest }) => {
          return <Item key={slug} {...rest} />;
        })}
      </Grid>
    </section>
  );
};

export default SkillsContainer;
