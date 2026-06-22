import type { Post } from "@type/post";

type Posts = {
  metadata: Post;
  content: string;
};

export type ArticlesProps = {
  posts: Posts[];
  title?: string;
  description?: string;
};

export type ArticleProps = {} & Post;
