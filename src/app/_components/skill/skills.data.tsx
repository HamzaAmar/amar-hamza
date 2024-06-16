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
    description:
      'Since 2018, I’ve built dynamic React applications. My expertise helps businesses deliver exceptional, performant user experiences. Let’s work together!',
  },
  {
    title: 'NextJs',
    slug: 'next_js',
    level: 90,
    icon: <NextIcon width="20" />,
    description:
      'I transitioned from CRA to Next.js for performance and SEO gains.  Love its ease of use and power. Remix is the next exciting step!',
  },
  {
    title: 'TypeScript',
    slug: 'typeScript',
    level: 90,
    icon: <TypeScript width="20" />,
    description:
      'TypeScript is now essential to my workflow. After a learning curve, I can’t imagine coding without its robust type-checking.',
  },
  {
    title: 'HTML',
    slug: 'html',
    level: 90,
    icon: <Html width="20" />,
    description:
      'Semantic HTML is the web’s foundation. I focus on writing accessible code for everyone, using tools like WAVE and aXe for validation.',
  },
  {
    title: 'CSS',
    slug: 'css',
    level: 95,
    icon: <Css width="20" />,
    description:
      'My CSS journey has been rewarding.  I love crafting beautiful UIs and continuously finding ways to enhance my styling abilities.',
  },
  {
    title: 'Gatsby',
    slug: 'gatsby',
    level: 60,
    icon: <Gatsby width="20" />,
    description:
      "Gatsby was a great SSG choice, but Next.js's expanded flexibility for SSR and ISR ultimately made it a better fit for my projects.",
  },
  {
    title: 'Remix',
    slug: 'remix',
    level: 80,
    icon: <Remix width="20" />,
    description:
      'Remix’s nested layouts and code organization won me over. Love how it streamlines data handling with actions and loaders.',
  },
  {
    title: 'Node js',
    slug: 'node_js',
    level: 60,
    icon: <Node width="20" />,
    description:
      'I used Node.js and Express for back-end work after PHP.  It was enjoyable, but my passion lies in crafting excellent front-end experiences.',
  },
];

export default skills;
