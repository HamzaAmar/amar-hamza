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
} from '@components/icons';

import type { SkillsProps } from './skills.type';

export const SKILLS: SkillsProps[] = [
  {
    slug: 'react',
    title: 'React',
    level: 90,
    icon: (
      <ReactIcon width={10} height={10} fill="var(--color-text)" />
    ),
  },
  {
    slug: 'next_js',
    title: 'NextJs',
    level: 90,
    icon: <NextIcon fill="var(--color-text)" />,
  },
  {
    slug: 'typescript',
    title: 'typeScript',
    level: 90,
    icon: <TypeScript fill="var(--color-text)" />,
  },
  {
    slug: 'html',
    title: 'HTML',
    level: 90,
    icon: <Html fill="var(--color-text)" />,
  },

  {
    slug: 'css',
    title: 'CSS',
    level: 90,
    icon: <Css fill="var(--color-text)" />,
  },
  {
    slug: 'gatsby',
    title: 'Gatsby',
    level: 80,
    icon: <Gatsby fill="var(--color-text)" />,
  },
  {
    slug: 'graphQL',
    title: 'GraphQL',
    level: 70,
    icon: <Graphql fill="var(--color-text)" />,
  },

  {
    slug: 'node_js',
    title: 'Node js',
    level: 60,
    icon: <Node />,
  },
  {
    slug: 'express',
    title: 'Express',
    level: 60,
    icon: <Express fill="var(--color-text)" />,
  },
  {
    slug: 'mongo',
    title: 'Mongo',
    level: 60,
    icon: <Mongodb fill="var(--color-text)" />,
  },
];
