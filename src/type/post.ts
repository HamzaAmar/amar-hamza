import type { ReadTimeResults } from "reading-time";

type Author = {
  name: string;
  picture: string;
};

export type Post = {
  title: string;
  publishedAt: string;
  lastModified: string;
  author: Author;
  excerpt: string;
  image: string;
  content: string;
  tags: string[];
  slug: string;
  readingTime: ReadTimeResults;
};
