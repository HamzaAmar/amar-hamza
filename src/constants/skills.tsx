import React from 'react';
import {
  ReactIcon,
  NextIcon,
  TypeScript,
  HTML,
  CSS,
  Graphql,
  Gatsby,
  Node,Express,Mongodb
} from '@components/icons';
const skills = [
  {
    title: 'React',
    level: 90,
    icon: <ReactIcon width={10} height={10} />,
  },
  {
    title: 'NextJs',
    level: 90,
    icon: <NextIcon />,
  },
  {
    title: 'typeScript',
    level: 90,
    icon: <TypeScript />,
  },
  {
    title: 'HTML',
    level: 90,
    icon: <HTML />,
  },

  {
    title: 'CSS',
    level: 90,
    icon: <CSS />,
  },
   {
    title: 'Gatsby',
    level: 80,
    icon: <Gatsby />,
  },
  {
    title: 'GraphQL',
    level: 70,
    icon: <Graphql />,
  },
 
   {
    title: 'Node js',
    level: 60,
    icon: <Node />,
  },
  {
    title: 'Express',
    level: 60,
    icon: <Express />,
  },
  {
    title: 'Mongo',
    level: 60,
    icon: <Mongodb />,
  },
];

export default skills;
