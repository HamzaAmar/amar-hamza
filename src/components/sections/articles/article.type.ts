import { type Blog } from 'contentlayer/generated';

export interface ArticlesProps {
  posts: Blog[];
  title?: string;
  description?: string;
}

export interface ArticleProps extends Blog {
  isBookmarked?: boolean;
}
