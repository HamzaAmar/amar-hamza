interface Link {
  site: string;
  title: string;
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
