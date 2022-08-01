import { Heading, Text } from '@components/core';
import { Article } from '@components/ui';

import type { ArticleProps } from './article.type';

const articles = ({
  posts,
  title = 'Articles',
  description,
}: ArticleProps) => {
  const descriptionText = description ? (
    <Text truncate="none">{description}</Text>
  ) : null;
  return (
    <section className="section l_flow">
      <Heading variant="hero">{title}</Heading>
      {descriptionText}
      <div className="l_grid articles">
        {posts.map((post) => (
          <Article key={post.slug} {...post} />
        ))}
      </div>
    </section>
  );
};

export default articles;
