import React from 'react';
import {
  ReactIcon,
  NextIcon,
  TypeScript,
  Html,
  Css,
  Gatsby,
  Node,
  Remix,
} from '@components/icons';

const skills = [
  {
    title: 'React',
    slug: 'react',
    level: 90,
    icon: <ReactIcon width="20" fill="var(--color-text)" />,
    description: `I love To Work with React and write code every days with it since 2019, `,
  },
  {
    title: 'NextJs',
    slug: 'next_js',
    level: 90,
    icon: <NextIcon width="20" />,
    description:
      'After Working with react I realise that I need To Switch From CRA and To SSR Then I find Next After the first project I write with Next js I fell in love with it from then I write all my personal website with next Until Remix came 😀',
  },
  {
    title: 'typeScript',
    slug: 'typeScript',
    level: 90,
    icon: <TypeScript width="20" />,
    description:
      "First when typescript is get a trend I say to my self is time to learn typescript after a while I gave up because a lot of problem I staggle with it when I first try to migrate my portfolio from js to ts then I decide to learn it from scratch and know is one of my favorite I can't find my self writing code without typescript Thanks Microsoft",
  },
  {
    title: 'HTML',
    slug: 'html',
    level: 90,
    icon: <Html width="20" />,
    description:
      'I love To Work with React And is one of the programming language I Love To work with and write code with it every days',
  },

  {
    title: 'CSS',
    slug: 'css',
    level: 90,
    icon: <Css width="20" />,
    description:
      'I love To Work with React And is one of the programming language I Love To work with and write code with it every days',
  },
  {
    title: 'Gatsby',
    slug: 'gatsby',
    level: 80,
    icon: <Gatsby width="20" />,
    description:
      'I love To Work with React And is one of the programming language I Love To work with and write code with it every days',
  },
  {
    title: 'Remix',
    slug: 'remix',
    level: 80,
    icon: <Remix width="20" />,
    description:
      'I love To Work with React And is one of the programming language I Love To work with and write code with it every days',
  },
  {
    title: 'Node js',
    slug: 'node_js',
    level: 60,
    icon: <Node width="20" />,
    description:
      'I love To Work with React And is one of the programming language I Love To work with and write code with it every days',
  },
];

export default skills;
