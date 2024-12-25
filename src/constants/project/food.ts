import { ProjectType } from './project.type';

export const food: ProjectType = {
  id: 'food',
  title: 'Food',
  img: {
    src: '/assets/project/food/food.png',
    alt: 'car-rental project',
  },
  avatar: {
    src: '/assets/project/car-rental/car-rental-avatar.png',
    alt: 'car-rental project',
  },
  links: [
    {
      site: 'https://www.figma.com/design/zsA2CrCS4tCxG2VSqSHIG0/Untitled?node-id=1-1111&t=ZevHsY1GDTCE7htr-0',
      title: 'Figma',
    },
  ],
  description:
    'A user-friendly and visually appealing mobile application for a food delivery service. The design process will be conducted entirely within Figma',
  technologies: ['Figma', 'UI/UX'],
};
