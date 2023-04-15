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
    description: `Since 2018, I have been passionate about working with React and writing code every day to bring engaging and dynamic web experiences to life. With my expertise, I can help your business stand out from the competition by building high-quality React applications that are both user-friendly and performant. Let's work together to take your web development to the next level!`,
  },
  {
    title: 'NextJs',
    slug: 'next_js',
    level: 90,
    icon: <NextIcon width="20" />,
    description:
      "After years of working with React, I realized the need to switch from CRA to SSR for better performance and SEO. That's when I discovered Next.js, and after my first project with it, I fell in love with its ease of use and capabilities. Since then, I've built all my personal websites with Next.js, until I discovered Remix, and now I'm excited to explore qwik as my next step",
  },
  {
    title: 'typeScript',
    slug: 'typeScript',
    level: 90,
    icon: <TypeScript width="20" />,
    description:
      "When TypeScript first became a trend, I struggled with it while migrating my portfolio from JS to TS. But instead of giving up, I decided to learn it from scratch. Now, TypeScript is one of my favorite tools and I can't imagine writing code without it. Thanks, Microsoft!",
  },
  {
    title: 'HTML',
    slug: 'html',
    level: 90,
    icon: <Html width="20" />,
    description:
      "HTML is the foundation of the web, and it's important to make sure it's accessible to everyone. When I first started building websites, I didn't think much about accessibility, but over time I've come to appreciate how crucial it is. I now strive to make sure all my HTML is semantically correct and meets accessibility standards, using tools like WAVE and aXe to ensure my sites are usable by everyone",
  },

  {
    title: 'CSS',
    slug: 'css',
    level: 90,
    icon: <Css width="20" />,
    description:
      'As a full-stack JavaScript developer, I realized that my CSS skills needed improvement. I took a break from freelancing to focus on solidifying my knowledge of CSS, Git, and accessibility. As I delved deeper into CSS, I fell in love with the language and discovered that I was happiest when finding new ways to improve my skills and create beautiful and accessible user interfaces. Since then, I have continued to work in this field and find great joy in exploring new ways to enhance my CSS abilities.',
  },
  {
    title: 'Gatsby',
    slug: 'gatsby',
    level: 80,
    icon: <Gatsby width="20" />,
    description:
      "After using Gatsby for my portfolio, I appreciated its SSG approach.. However, after discovering Next.js, I realized that there were even more features and benefits that I could leverage. Next.js's support for server-side rendering and incremental static regeneration was a game-changer, ",
  },
  {
    title: 'Remix',
    slug: 'remix',
    level: 80,
    icon: <Remix width="20" />,
    description:
      'Even though I enjoy working with Next.js, I was curious about Remix after learning about its nested layout handling. After giving it a try, I was impressed by its file structure organization and how it simplified my code. I also appreciate how Remix handles actions and loaders, which was a game-changer for me. All in all, Remix has become my go-to framework for building high-quality web applications.',
  },
  {
    title: 'Node js',
    slug: 'node_js',
    level: 60,
    icon: <Node width="20" />,
    description:
      'After several years of working with PHP and Laravel, I made the decision to switch to JavaScript in order to become a full-stack developer. I found the idea of using a single language for both front-end and back-end development very appealing, which led me to choose Node.js and Express. While working with them, I enjoyed the simplicity and flexibility they offered. However, I eventually realized that my passion lies in front-end development, prompting me to focus solely on this aspect of web development.',
  },
];

export default skills;
