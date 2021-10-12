interface Author {
  name: string;
  picture: string;
}

interface PostType {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: Author;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  tags?: string[];
}

export default PostType;
