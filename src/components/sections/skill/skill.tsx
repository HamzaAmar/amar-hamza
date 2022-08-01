import React from 'react';
import { CircleProgress } from '@components/ui';
import SKILLS from '@constants/skills';
import { Heading } from '@components/core';

import { ItemSkillProps } from './skills.type';

const Item = ({ title, icon, level }: ItemSkillProps) => {
  const iconUI = icon ? (
    <div className="skill--icon-wrap">
      <div className="skill--icon">{icon}</div>
    </div>
  ) : null;
  return (
    <li className="skill" key={title}>
      <div className="skill--info">
        {iconUI}
        <Heading as="h3" size="xxs">
          {title}
        </Heading>
      </div>
      <div className="skill--progress">
        <CircleProgress
          width="100%"
          height="100%"
          color="primary"
          lvl={level}
        >
          <tspan>{level}%</tspan>
        </CircleProgress>
      </div>
    </li>
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
