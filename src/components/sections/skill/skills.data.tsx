// // // // // import React from 'react';
// // // // // import {
// // // // //   ReactIcon,
// // // // //   NextIcon,
// // // // //   TypeScript,
// // // // //   Html,
// // // // //   Css,
// // // // //   Gatsby,
// // // // //   Node,
// // // // //   Remix,
// // // // // } from '@components/icons';

// // // // // // const skills = [
// // // // // //   {
// // // // // //     title: 'React',
// // // // // //     slug: 'react',
// // // // // //     level: 90,
// // // // // //     icon: <ReactIcon width="20" fill="var(--color-text)" />,
// // // // // //     description: `Since 2018, I have been passionate about working with React and writing code every day to bring engaging and dynamic web experiences to life. With my expertise, I can help your business stand out from the competition by building high-quality React applications that are both user-friendly and performant. Let's work together to take your web development to the next level!`,
// // // // // //   },
// // // // // //   {
// // // // // //     title: 'NextJs',
// // // // // //     slug: 'next_js',
// // // // // //     level: 90,
// // // // // //     icon: <NextIcon width="20" />,
// // // // // //     description:
// // // // // //       "After years of working with React, I realized the need to switch from CRA to SSR for better performance and SEO. That's when I discovered Next.js, and after my first project with it, I fell in love with its ease of use and capabilities. Since then, I've built all my personal websites with Next.js, until I discovered Remix, and now I'm excited to explore qwik as my next step",
// // // // // //   },
// // // // // //   {
// // // // // //     title: 'typeScript',
// // // // // //     slug: 'typeScript',
// // // // // //     level: 90,
// // // // // //     icon: <TypeScript width="20" />,
// // // // // //     description:
// // // // // //       "When TypeScript first became a trend, I struggled with it while migrating my portfolio from JS to TS. But instead of giving up, I decided to learn it from scratch. Now, TypeScript is one of my favorite tools and I can't imagine writing code without it. Thanks, Microsoft!",
// // // // // //   },
// // // // // //   {
// // // // // //     title: 'HTML',
// // // // // //     slug: 'html',
// // // // // //     level: 90,
// // // // // //     icon: <Html width="20" />,
// // // // // //     description:
// // // // // //       "HTML is the foundation of the web, and it's important to make sure it's accessible to everyone. When I first started building websites, I didn't think much about accessibility, but over time I've come to appreciate how crucial it is. I now strive to make sure all my HTML is semantically correct and meets accessibility standards, using tools like WAVE and aXe to ensure my sites are usable by everyone",
// // // // // //   },

// // // // // //   {
// // // // // //     title: 'CSS',
// // // // // //     slug: 'css',
// // // // // //     level: 90,
// // // // // //     icon: <Css width="20" />,
// // // // // //     description:
// // // // // //       'As a full-stack JavaScript developer, I realized that my CSS skills needed improvement. I took a break from freelancing to focus on solidifying my knowledge of CSS, Git, and accessibility. As I delved deeper into CSS, I fell in love with the language and discovered that I was happiest when finding new ways to improve my skills and create beautiful and accessible user interfaces. Since then, I have continued to work in this field and find great joy in exploring new ways to enhance my CSS abilities.',
// // // // // //   },
// // // // // //   {
// // // // // //     title: 'Gatsby',
// // // // // //     slug: 'gatsby',
// // // // // //     level: 80,
// // // // // //     icon: <Gatsby width="20" />,
// // // // // //     description:
// // // // // //       "After using Gatsby for my portfolio, I appreciated its SSG approach.. However, after discovering Next.js, I realized that there were even more features and benefits that I could leverage. Next.js's support for server-side rendering and incremental static regeneration was a game-changer, ",
// // // // // //   },
// // // // // //   {
// // // // // //     title: 'Remix',
// // // // // //     slug: 'remix',
// // // // // //     level: 80,
// // // // // //     icon: <Remix width="20" />,
// // // // // //     description:
// // // // // //       'Even though I enjoy working with Next.js, I was curious about Remix after learning about its nested layout handling. After giving it a try, I was impressed by its file structure organization and how it simplified my code. I also appreciate how Remix handles actions and loaders, which was a game-changer for me. All in all, Remix has become my go-to framework for building high-quality web applications.',
// // // // // //   },
// // // // // //   {
// // // // // //     title: 'Node js',
// // // // // //     slug: 'node_js',
// // // // // //     level: 60,
// // // // // //     icon: <Node width="20" />,
// // // // // //     description:
// // // // // //       'After several years of working with PHP and Laravel, I made the decision to switch to JavaScript in order to become a full-stack developer. I found the idea of using a single language for both front-end and back-end development very appealing, which led me to choose Node.js and Express. While working with them, I enjoyed the simplicity and flexibility they offered. However, I eventually realized that my passion lies in front-end development, prompting me to focus solely on this aspect of web development.',
// // // // // //   },
// // // // // // ];

// // // // // const skills = [
// // // // //   {
// // // // //     title: 'React',
// // // // //     slug: 'react',
// // // // //     level: 90,
// // // // //     icon: <ReactIcon width="20" fill="var(--color-text)" />,
// // // // //     description:
// // // // //       "Passionate about React since 2018 – let's build exceptional, user-friendly React applications together!",
// // // // //   },
// // // // //   {
// // // // //     title: 'Next.js',
// // // // //     slug: 'next_js',
// // // // //     level: 90,
// // // // //     icon: <NextIcon width="20" />,
// // // // //     description:
// // // // //       'Switched from CRA to Next.js for SSR/SEO benefits. Love its developer-friendly approach.',
// // // // //   },
// // // // //   {
// // // // //     title: 'TypeScript',
// // // // //     slug: 'typeScript',
// // // // //     level: 90,
// // // // //     icon: <TypeScript width="20" />,
// // // // //     description:
// // // // //       'TypeScript is essential for type safety.  I overcame initial hurdles and now love it!',
// // // // //   },
// // // // //   {
// // // // //     title: 'HTML',
// // // // //     slug: 'html',
// // // // //     level: 90,
// // // // //     icon: <Html width="20" />,
// // // // //     description:
// // // // //       'I prioritize semantic, accessible HTML using tools to ensure best practices.',
// // // // //   },
// // // // //   {
// // // // //     title: 'CSS',
// // // // //     slug: 'css',
// // // // //     level: 90,
// // // // //     icon: <Css width="20" />,
// // // // //     description:
// // // // //       "Focused on improving my CSS skills – let's create stunning and accessible user interfaces!",
// // // // //   },
// // // // //   {
// // // // //     title: 'Gatsby',
// // // // //     slug: 'gatsby',
// // // // //     level: 80,
// // // // //     icon: <Gatsby width="20" />,
// // // // //     description:
// // // // //       "Appreciated Gatsby's SSG, but Next.js offers more flexibility and broader features.",
// // // // //   },
// // // // //   {
// // // // //     title: 'Remix',
// // // // //     slug: 'remix',
// // // // //     level: 80,
// // // // //     icon: <Remix width="20" />,
// // // // //     description:
// // // // //       "Remix's nested layouts and streamlined data handling make it my top choice for web apps.",
// // // // //   },
// // // // //   {
// // // // //     title: 'Node.js',
// // // // //     slug: 'node_js',
// // // // //     level: 60,
// // // // //     icon: <Node width="20" />,
// // // // //     description:
// // // // //       'Node.js experience supports my full-stack capabilities, but I specialize in crafting excellent frontends.',
// // // // //   },
// // // // // ];

// // // // // export default skills;

// // // // import React from 'react';
// // // // import {
// // // //   ReactIcon,
// // // //   NextIcon,
// // // //   TypeScript,
// // // //   Html,
// // // //   Css,
// // // //   Gatsby,
// // // //   Node,
// // // //   Remix,
// // // // } from '@components/icons';

// // // // const skills = [
// // // //   {
// // // //     title: 'React',
// // // //     slug: 'react',
// // // //     level: 90,
// // // //     icon: <ReactIcon width="20" fill="var(--color-text)" />,
// // // //     description:
// // // //       "Passionate about React since 2018, I build dynamic experiences. Let's create exceptional, user-friendly React apps for your business!",
// // // //   },
// // // //   {
// // // //     title: 'Next.js',
// // // //     slug: 'next_js',
// // // //     level: 90,
// // // //     icon: <NextIcon width="20" />,
// // // //     description:
// // // //       'I switched from CRA to Next.js for SSR/SEO benefits and love its developer experience.  All my personal sites are now built with Next.js.',
// // // //   },
// // // //   {
// // // //     title: 'TypeScript',
// // // //     slug: 'typeScript',
// // // //     level: 90,
// // // //     icon: <TypeScript width="20" />,
// // // //     description:
// // // //       'TypeScript is essential for type-safe code. I overcame initial challenges and now consider it a must-have tool.',
// // // //   },
// // // //   {
// // // //     title: 'HTML',
// // // //     slug: 'html',
// // // //     level: 90,
// // // //     icon: <Html width="20" />,
// // // //     description:
// // // //       'I create semantic, accessible HTML using tools like WAVE and aXe to ensure everyone can use my websites.',
// // // //   },
// // // //   {
// // // //     title: 'CSS',
// // // //     slug: 'css',
// // // //     level: 90,
// // // //     icon: <Css width="20" />,
// // // //     description:
// // // //       'Focused on improving my CSS skills, I strive to craft stunning, accessible user interfaces that enhance the web experience.',
// // // //   },
// // // //   {
// // // //     title: 'Gatsby',
// // // //     slug: 'gatsby',
// // // //     level: 80,
// // // //     icon: <Gatsby width="20" />,
// // // //     description:
// // // //       "Gatsby's SSG was powerful, but Next.js offers more flexibility and broader features for the types of projects I build.",
// // // //   },
// // // //   {
// // // //     title: 'Remix',
// // // //     slug: 'remix',
// // // //     level: 80,
// // // //     icon: <Remix width="20" />,
// // // //     description:
// // // //       "Remix's nested layouts, streamlined data handling, and developer focus make it my preferred choice for building top-tier web applications.",
// // // //   },
// // // //   {
// // // //     title: 'Node.js',
// // // //     slug: 'node_js',
// // // //     level: 60,
// // // //     icon: <Node width="20" />,
// // // //     description:
// // // //       'Node.js broadened my full-stack capabilities, but my true passion lies in crafting excellent front-end experiences for users.',
// // // //   },
// // // // ];

// // // // export default skills;

// // // import React from 'react';
// // // import {
// // //   ReactIcon,
// // //   NextIcon,
// // //   TypeScript,
// // //   Html,
// // //   Css,
// // //   Gatsby,
// // //   Node,
// // //   Remix,
// // // } from '@components/icons';

// // // const skills = [
// // //   {
// // //     title: 'React',
// // //     slug: 'react',
// // //     level: 90,
// // //     icon: <ReactIcon width="20" fill="var(--color-text)" />,
// // //     description:
// // //       "Passionate about React since 2018, I build dynamic web experiences. Let's create exceptional, user-friendly React apps for your business!",
// // //   },
// // //   {
// // //     title: 'Next.js',
// // //     slug: 'next_js',
// // //     level: 90,
// // //     icon: <NextIcon width="20" />,
// // //     description:
// // //       'Switched from CRA to Next.js for SSR/SEO benefits. Love its developer experience, and use it for all personal projects.',
// // //   },
// // //   {
// // //     title: 'TypeScript',
// // //     slug: 'typeScript',
// // //     level: 90,
// // //     icon: <TypeScript width="20" />,
// // //     description:
// // //       'TypeScript is essential for type-safe code. I overcame initial hurdles and now consider it a must-have tool.',
// // //   },
// // //   {
// // //     title: 'HTML',
// // //     slug: 'html',
// // //     level: 90,
// // //     icon: <Html width="20" />,
// // //     description:
// // //       'I prioritize semantic, accessible HTML using tools like WAVE and aXe to ensure inclusive web experiences.', // SLIGHTLY longer for emphasis on accessibility
// // //   },
// // //   {
// // //     title: 'CSS',
// // //     slug: 'css',
// // //     level: 90,
// // //     icon: <Css width="20" />,
// // //     description:
// // //       "Focused on improving my CSS, I create stunning, accessible UIs. Let's enhance the web experience together!",
// // //   },
// // //   {
// // //     title: 'Gatsby',
// // //     slug: 'gatsby',
// // //     level: 80,
// // //     icon: <Gatsby width="20" />,
// // //     description:
// // //       "Gatsby's SSG was powerful, but Next.js offers more flexibility for the types of projects I build.",
// // //   },
// // //   {
// // //     title: 'Remix',
// // //     slug: 'remix',
// // //     level: 80,
// // //     icon: <Remix width="20" />,
// // //     description:
// // //       "Remix's nested layouts and streamlined data handling make it my top choice for building exceptional web applications.",
// // //   },
// // //   {
// // //     title: 'Node.js',
// // //     slug: 'node_js',
// // //     level: 60,
// // //     icon: <Node width="20" />,
// // //     description:
// // //       'Node.js broadened my full-stack capabilities, but my true passion lies in crafting excellent front-end user experiences.',
// // //   },
// // // ];

// // // export default skills;

// // import React from 'react';
// // import {
// //   ReactIcon,
// //   NextIcon,
// //   TypeScript,
// //   Html,
// //   Css,
// //   Gatsby,
// //   Node,
// //   Remix,
// // } from '@components/icons';

// // const skills = [
// //   {
// //     title: 'React',
// //     slug: 'react',
// //     level: 90,
// //     icon: <ReactIcon width="20" fill="var(--color-text)" />,
// //     description:
// //       "Passionate about React since 2018, I build dynamic web experiences. Let's create exceptional, user-friendly React apps for your business!",
// //   },
// //   {
// //     title: 'Next.js',
// //     slug: 'next_js',
// //     level: 90,
// //     icon: <NextIcon width="20" />,
// //     description:
// //       'Switched from CRA to Next.js for SSR/SEO benefits. Love its developer experience, and use it for all personal projects.',
// //   },
// //   {
// //     title: 'TypeScript',
// //     slug: 'typeScript',
// //     level: 90,
// //     icon: <TypeScript width="20" />,
// //     description:
// //       'TypeScript is essential for type-safe code. I overcame initial hurdles and now consider it a must-have tool.',
// //   },
// //   {
// //     title: 'HTML',
// //     slug: 'html',
// //     level: 90,
// //     icon: <Html width="20" />,
// //     description:
// //       'I prioritize semantic, accessible HTML using tools like WAVE and aXe to ensure inclusive web experiences.', // SLIGHTLY longer for emphasis on accessibility
// //   },
// //   {
// //     title: 'CSS',
// //     slug: 'css',
// //     level: 90,
// //     icon: <Css width="20" />,
// //     description:
// //       "Focused on improving my CSS, I create stunning, accessible UIs. Let's enhance the web experience together!",
// //   },
// //   {
// //     title: 'Gatsby',
// //     slug: 'gatsby',
// //     level: 80,
// //     icon: <Gatsby width="20" />,
// //     description:
// //       "Gatsby's SSG was powerful, but Next.js offers more flexibility for the types of projects I build.",
// //   },
// //   {
// //     title: 'Remix',
// //     slug: 'remix',
// //     level: 80,
// //     icon: <Remix width="20" />,
// //     description:
// //       "Remix's nested layouts and streamlined data handling make it my top choice for building exceptional web applications.",
// //   },
// //   {
// //     title: 'Node.js',
// //     slug: 'node_js',
// //     level: 60,
// //     icon: <Node width="20" />,
// //     description:
// //       'Node.js broadened my full-stack capabilities, but my true passion lies in crafting excellent front-end user experiences.',
// //   },
// // ];

// // export default skills;

// import React from 'react';
// import {
//   ReactIcon,
//   NextIcon,
//   TypeScript,
//   Html,
//   Css,
//   Gatsby,
//   Node,
//   Remix,
// } from '@components/icons';

// const skills = [
//   {
//     title: 'React',
//     slug: 'react',
//     level: 90,
//     icon: <ReactIcon width="20" fill="var(--color-text)" />,
//     description:
//       'My passion for React drives me to build engaging web experiences since 2018. Let me help you create exceptional, performant React applications.',
//   },
//   {
//     title: 'NextJs',
//     slug: 'next_js',
//     level: 90,
//     icon: <NextIcon width="20" />,
//     description:
//       'Seeking improved SEO & performance, I fell in love with Next.js. Now, I build personal sites with Next, enthusiastically exploring Remix and Qwik.',
//   },
// ];

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
    level: 90,
    icon: <Css width="20" />,
    description:
      'My CSS journey has been rewarding.  I love crafting beautiful UIs and continuously finding ways to enhance my styling abilities.',
  },
  {
    title: 'Gatsby',
    slug: 'gatsby',
    level: 80,
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
