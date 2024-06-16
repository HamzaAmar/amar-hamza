import { Post } from '@type/post';

interface Posts {
  metadata: Post;
  content: string;
}
[];

export interface ArticlesProps {
  posts: Posts[];
  title?: string;
  description?: string;
}

export interface ArticleProps extends Post {
  isBookmarked?: boolean;
}
