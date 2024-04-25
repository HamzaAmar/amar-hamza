import {
  Avatar,
  Button,
  Flex,
  Grid,
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
      className="article l_box-article l_flow__2xs"
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
      <div className="article--content l_flow__2xs">
        <Flex items="center">
          <Flex gap="xs" items="center">
            <Avatar size="lg" image="/me.jpg" title="my Avatar" />
            <div className="article--header-content">
              <Text size="xs" weight="normal">
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
        <Heading
          id={headingId}
          as="h3"
          align="start"
          weight="normal"
          size="xs"
        >
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
      className="section l_flow__lg"
    >
      <div>
        <Heading weight="medium" id="articles-id-section">
          <Text transform="uppercase" color="primary" contrast="low">
            Engaging Web Articles
          </Text>
          Dive into my insightful articles on web development and
          design.
        </Heading>
        {descriptionText}
      </div>
      <Grid
        columns="1fr 1fr 1fr"
        gap="md"
        className="sm_grid-one md_grid-two articles"
      >
        {posts.map((post) => (
          <Article key={post.slug} {...post} />
        ))}
      </Grid>
    </section>
  );
};

export default articles;
