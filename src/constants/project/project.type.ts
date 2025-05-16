type Link = {
  site: string;
  title: "Figma" | "Github" | "Site";
};

type Image = {
  src: string;
  alt: string;
};

export type ProjectType = {
  id: string;
  img: Image;
  avatar: Image;
  title: string;
  links: Link[];
  description: string;
  technologies: string[];
};
