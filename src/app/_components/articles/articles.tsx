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
  const buttonId = `${id}-b`;
  const headingId = `${id}-h`;

  return (
    <Flex
      as="article"
      direction="column"
      className="ar- l_box-article Sf-2 projects-scroll"
      aria-labelledby={headingId}
    >
      <div className="ar-H">
        {image ? (
          <div className="ar--imgC">
            <Image
              src={image}
              alt="Hello world"
              className="ar-I"
              loading="lazy"
              placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM0Cdx0BgAD/QIFYj/1qAAAAABJRU5ErkJggg=="
              fill
            />
          </div>
        ) : null}

        <div className="ar-T l_cluster">
          {tags.map((tag) => (
            <Tag key={tag} color="p" title={tag} size="4" />
          ))}
        </div>
      </div>
      <div className="ar-C Sf-2">
        <Flex items="center">
          <Flex gap="4" items="center">
            <Avatar image="/me.jpg" title="my Avatar" />
            <div>
              <Text size="3" weight="5">
                Hamza Miloud Amar
              </Text>
              <Text
                low
                color="b"
                as="time"
                size="3"
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
          weight="5"
          truncate="2"
        >
          {title}
        </Heading>
        <Text className="ard-" low color="b" size="4" truncate="4">
          {excerpt}
        </Text>
      </div>

      <Button
        as={Link}
        variant="outline"
        fluid
        className="ar-B"
        icon={<Arrow direction="right" strokeWidth={2.5} />}
        iconPosition="end"
        aria-labelledby={buttonId}
        href={`/blogs/${slug}`}
      >
        <span id={buttonId} className="Sr">
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
      className="sct Sf-6"
    >
      <HeroHeading
        heading="Join Me on My Web Development Journey"
        subHeading="Sharing insights and knowledge gained from my experiences on web development."
        section="articles"
        description={description}
      />
      <Grid
        columns="1fr 1fr 1fr"
        gap="5"
        className="sm_grid-one md_grid-two"
      >
        {posts.map((post) => (
          <Article key={post.metadata.slug} {...post.metadata} />
        ))}
      </Grid>
    </section>
  );
};

export default articles;
