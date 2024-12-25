interface Link {
  site: string;
  title: 'Figma' | 'Github' | 'Site';
}

interface Image {
  src: string;
  alt: string;
}

export interface ProjectType {
  id: string;
  img: Image;
  avatar: Image;
  title: string;
  links: Link[];
  description: string;
  technologies: string[];
}
