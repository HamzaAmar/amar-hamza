import React from 'react';
import {
  ReactIcon,
  NextIcon,
  TypeScript,
  HTML,
  CSS,
  Graphql,
  Gatsby,
} from '@components/icons';
const skills = [
  {
    title: 'React',
    level: 95,
    icon: <ReactIcon width={10} height={10} />,
  },
  {
    title: 'NextJs',
    level: 95,
    icon: <NextIcon />,
  },
  {
    title: 'typeScript',
    level: 85,
    icon: <TypeScript />,
  },
  {
    title: 'HTML',
    level: 95,
    icon: <HTML />,
  },

  {
    title: 'CSS',
    level: 95,
    icon: <CSS />,
  },
  {
    title: 'GraphQL',
    level: 70,
    icon: <Graphql />,
  },
  {
    title: 'Gatsby',
    level: 80,
    icon: <Gatsby />,
  },
];

export default skills;
