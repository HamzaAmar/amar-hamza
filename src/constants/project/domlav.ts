import { ProjectType } from './project.type';

export const domlav: ProjectType = {
  id: 'domlav',
  avatar: {
    src: '/assets/project/domlav/domlav-avatar.jpg',
    alt: 'domlav a washing service',
  },
  img: {
    src: '/assets/project/domlav/domlav.png',
    alt: 'domlav a washing service',
  },
  title: 'DOMLAV',
  links: [
    {
      site: 'https://www.domlav.com/',
      title: 'Site',
    },
  ],
  description:
    'A Laundry Service App for Everything You Need, Based in Morocco. This full-stack JavaScript project is built with React and Next.js for server-side rendering, powered by Storybook, and styled with SCSS.',
  technologies: [
    'React',
    'Next',
    'CSS',
    'HTML',
    'Firebase',
    'mongoDB',
    'Node',
    'Express',
  ],
};
