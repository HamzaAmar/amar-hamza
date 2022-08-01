import type { ReactElement, ReactNode } from 'react';

interface Image {
  src: string;
  alt: string;
}

interface Link {
  title: string;
  site: string;
}

interface BaseAsideProps {
  title: string;
}

export interface AsideItemProps extends BaseAsideProps {
  children?: ReactNode;
  icon: ReactElement;
}

export interface AsideProps extends BaseAsideProps {
  img: Image;
  description?: string;
  links: Link[];
  technologies: string[];
}
