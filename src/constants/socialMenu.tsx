import React from 'react';
import {
  Facebook,
  Github,
  Linkdin,
  Twitter,
  Instagram,
} from '@components/icons';

interface Socials {
  id: number;
  icon: React.ReactNode;
  name: string;
  link: string;
}

const SOCIALS: Socials[] = [
  {
    id: 1,
    icon: <Facebook />,
    name: 'Facebook',
    link: 'https://www.facebook.com/hamza.amar.351',
  },

  {
    id: 2,
    icon: <Twitter />,
    name: 'Twitter',
    link: 'https://twitter.com/HamzaMiloudAma1',
  },
  {
    id: 3,
    icon: <Instagram />,
    name: 'Instagram',
    link: 'https://www.instagram.com/amar_dev_js',
  },
  {
    id: 4,
    icon: <Linkdin />,
    name: 'Linkdin',
    link: 'https://www.linkedin.com/in/hamza-miloud-amar-463b24167',
  },
  {
    id: 5,
    icon: <Github />,
    name: 'Github',
    link: 'https://github.com/HamzaAmar',
  },
];

export default SOCIALS;
