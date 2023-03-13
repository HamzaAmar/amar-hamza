import {
  Avatar,
  Button,
  Flex,
  Heading,
  IconButton,
  Tag,
  Text,
} from '@components/core';
import { Arrow, Bookmark } from '@components/icons';
import { formatDate } from '@utils/formatDate';
import Image from 'next/image';
import Link from 'next/link';
import { useId } from 'react';

import type { ArticlesProps, ArticleProps } from './article.type';

/*
====================================================================================================
  Article Item Section
====================================================================================================
*/

const Article = ({
  excerpt,
  title,
  date,
  slug,
  tags,
  isBookmarked = false,
}: ArticleProps) => {
  const id = useId();
  const buttonId = `${id}-button`;
  const headingId = `${id}-heading`;

  return (
    <Flex
      as="article"
      direction="column"
      className="article l_box-article l_flow"
      aria-labelledby={headingId}
    >
      <div className="article--image-wrapper">
        <div className="article--image-container">
          <Image
            src="/assets/blog/hello-world/cover.jpg"
            alt="Hello world"
            objectFit="cover"
            layout="fill"
            className="article--image"
            objectPosition="center top"
          />
        </div>

        <div className="article--tags l_cluster">
          {tags.map((tag) => (
            <Tag key={tag} color="primary" title={tag} size="sm" />
          ))}
        </div>
      </div>
      <div className="article--content l_flow">
        <Flex items="center">
          <Flex gap="xs" items="center">
            <Avatar size="lg" image="/me.jpg" title="my Avatar" />
            <div className="article--header-content">
              <Text size="md" weight="normal">
                Hamza Miloud Amar
              </Text>
              <Text
                contrast="low"
                color="slate"
                as="time"
                size="sm"
                dateTime={date}
              >
                {formatDate(date)}
              </Text>
            </div>
          </Flex>

          <IconButton
            type="button"
            icon={<Bookmark width={20} />}
            title={`${
              isBookmarked ? 'Remove' : 'Add'
            } Article to Favorite`}
            data-bookmark={isBookmarked}
            className="article--favorite"
          />
        </Flex>
        <Heading id={headingId} as="h3" align="start" size="sm">
          {title}
        </Heading>
        <Text
          contrast="low"
          color="slate"
          size="md"
          truncate="multiline"
          numberLine={4}
        >
          {excerpt}
        </Text>
      </div>

      <Link href={`/blogs/${slug}`} passHref>
        <Button
          variant="outline"
          fluid
          className="article--button"
          as="a"
          icon={<Arrow direction="right" strokeWidth={2.5} />}
          iconPosition="end"
          aria-labelledby={buttonId}
        >
          <span id={buttonId} className="u_sr-only">
            Go to {title}
          </span>
          Read More
        </Button>
      </Link>
    </Flex>
  );
};

/*
====================================================================================================
  Articles List Section
====================================================================================================
*/

const articles = ({
  posts,
  title = 'Articles',
  description,
}: ArticlesProps) => {
  const descriptionText = description ? (
    <Text color="slate" contrast="low">
      {description}
    </Text>
  ) : null;

  return (
    <section
      aria-labelledby="articles-id-section"
      className="section l_flow"
    >
      <div>
        <Heading id="articles-id-section">{title}</Heading>
        {descriptionText}
      </div>
      <div className="l_grid articles">
        {posts.map((post) => (
          <Article key={post.slug} {...post} />
        ))}
      </div>
    </section>
  );
};

export default articles;
