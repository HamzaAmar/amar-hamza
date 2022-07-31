import PostType from '@type/post';

export interface ArticleProps extends PostType {
  isBookmarked?: boolean;
}
