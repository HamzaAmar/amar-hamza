import type { ReadTimeResults } from 'reading-time';

interface Author {
  name: string;
  picture: string;
}

export interface Post {
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
}
