import { ProjectType } from './project.type';

export const dashboard: ProjectType = {
  id: 'dashboard',
  title: 'Dashboard',
  img: {
    src: '/assets/project/dashboard/dashboard.png',
    alt: 'dashboard Project',
  },
  avatar: {
    src: '/assets/project/dashboard/dashboard.png',
    alt: 'cinema project',
  },
  links: [
    {
      site: 'https://dashboard-puce-one-14.vercel.app/pages/ecommerce',
      title: 'Site',
    },
  ],
  description:
    'Fully Accessible Admin Dashboard Site Powered by (React, React-Router-Dom V16.4, SCSS That helps (Web developers, and companies) to make their UI sites up and running fast, you can find all the components you need From) Base UI, Composite UI Pages, Dashboard Pages, Icons, Charts, and Forms) and so, once you try it, I think you are going to like it.',
  technologies: ['React', 'React-router-dom-16.4', 'CSS', 'HTML'],
};
