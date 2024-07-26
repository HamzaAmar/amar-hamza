'use client';

import {
  Avatar,
  Button,
  Flex,
  Grid,
  Heading,
  HeroHeading,
  Tag,
  Text,
} from '@components/core';
import { Arrow } from '@components/icons';
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
  slug,
  tags,
  image,
  publishedAt,
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
        {image ? (
          <div className="article--image-container">
            <Image
              src={image}
              alt="Hello world"
              objectFit="cover"
              className="article--image"
              objectPosition="center top"
              loading="lazy"
              placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM0Cdx0BgAD/QIFYj/1qAAAAABJRU5ErkJggg=="
              fill
            />
          </div>
        ) : null}

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
              <Text size="xs" weight="medium">
                Hamza Miloud Amar
              </Text>
              <Text
                contrast="low"
                color="slate"
                as="time"
                size="sm"
                dateTime={publishedAt}
              >
                {formatDate(publishedAt)}
              </Text>
            </div>
          </Flex>
        </Flex>
        <Heading
          id={headingId}
          as="h3"
          align="start"
          weight="medium"
          size="sm"
          truncate="multiline"
          numberLine={2}
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

      <Button
        as={Link}
        variant="outline"
        fluid
        className="article--button"
        icon={<Arrow direction="right" strokeWidth={2.5} />}
        iconPosition="end"
        aria-labelledby={buttonId}
        href={`/blogs/${slug}`}
      >
        <span id={buttonId} className="u_sr-only">
          Go to {title}
        </span>
        Read More
      </Button>
    </Flex>
  );
};

/*
====================================================================================================
  Articles List Section
====================================================================================================
*/

const articles = ({ posts, description }: ArticlesProps) => {
  return (
    <section
      aria-labelledby="articles-id-section"
      className="section l_flow__lg"
    >
      <HeroHeading
        heading="Join Me on My Web Development Journey"
        subHeading="Sharing insights and knowledge gained from my experiences on web development."
        section="articles"
        description={description}
      />
      <Grid
        columns="1fr 1fr 1fr"
        gap="md"
        className="sm_grid-one md_grid-two articles"
      >
        {posts.map((post) => (
          <Article key={post.metadata.slug} {...post.metadata} />
        ))}
      </Grid>
    </section>
  );
};

export default articles;
