import { ProjectType } from './project.type';

export const openHand: ProjectType = {
  id: 'open-hand',
  avatar: {
    src: '/assets/project/huna/huna-avatar.png',
    alt: 'open-hand a washing service',
  },
  img: {
    src: '/assets/project/open-hand/ohm.png',
    alt: 'open-hand a volunteering site',
  },
  title: 'Open Hand Morocco',
  links: [
    {
      site: 'https://openhandsmorocco.com/',
      title: 'Site',
    },
  ],
  description:
    'Open Hand is a volunteering site that connects people with volunteer opportunities in the Morocco. We are a volunteer-led project that aims to connect people with volunteer opportunities in Morocco.',
  technologies: [
    'Nextjs',
    'Pillar-ui',
    'Express',
    'MongoDB',
    'Node.js',
  ],
};
