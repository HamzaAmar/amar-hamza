import type { ReactElement, ReactNode } from "react";

type Image = {
  src: string;
  alt: string;
};

type Link = {
  title: string;
  site: string;
};

type BaseAsideProps = {
  title: string;
};

export type AsideItemProps = {
  children?: ReactNode;
  icon: ReactElement;
} & BaseAsideProps;

export type AsideProps = {
  img: Image;
  description?: string;
  links: Link[];
  technologies: string[];
} & BaseAsideProps;
