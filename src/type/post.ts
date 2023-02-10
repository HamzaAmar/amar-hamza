interface Author {
  name: string;
  picture: string;
}

interface PostType {
  slug: string;
  title: string;
  date: string;
  author: Author;
  excerpt: string;
  image: string;
  content: string;
  tags?: string[];
}

export default PostType;
