import React from 'react';
import {
  ReactIcon,
  NextIcon,
  TypeScript,
  Html,
  Css,
  Graphql,
  Gatsby,
  Node,
  Express,
  Mongodb,
  Remix,
} from '@components/icons';

const skills = [
  {
    title: 'React',
    slug: 'react',
    level: 90,
    icon: (
      <ReactIcon width={10} height={10} fill="var(--color-text)" />
    ),
  },
  {
    title: 'NextJs',
    slug: 'next_js',
    level: 90,
    icon: <NextIcon />,
  },
  {
    title: 'typeScript',
    slug: 'typeScript',
    level: 90,
    icon: <TypeScript />,
  },
  {
    title: 'HTML',
    slug: 'html',
    level: 90,
    icon: <Html />,
  },

  {
    title: 'CSS',
    slug: 'css',
    level: 90,
    icon: <Css />,
  },
  {
    title: 'Gatsby',
    slug: 'gatsby',
    level: 80,
    icon: <Gatsby />,
  },
  {
    title: 'Remix',
    slug: 'remix',
    level: 80,
    icon: <Remix />,
  },
  {
    title: 'Node js',
    slug: 'node_js',
    level: 60,
    icon: <Node />,
  },
];

export default skills;
