import PostType from '@type/post';

export interface ArticleProps {
  posts: PostType[];
  title?: string;
  description?: string;
}
