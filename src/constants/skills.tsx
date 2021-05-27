import React from 'react';
import {
  ReactIcon,
  NextIcon,
  TypeScript,
  Node,
  HTML,
  CSS,
  Graphql,
  Mongodb,
  Express,
  Gatsby,
} from '@components/icons';
const skills = [
  [
    'Front End',
    [
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
    ],
  ],
  [
    'Back End',
    [
      {
        title: 'Node',
        level: 80,
        icon: <Node />,
      },
      {
        title: 'Mongo DB',
        level: 80,
        icon: <Mongodb />,
      },
      {
        title: 'Express',
        level: 70,
        icon: <Express />,
      },
    ],
  ],
];

export default skills;
