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
      className="h-ar l_box-article l_f_2xs"
      aria-labelledby={headingId}
    >
      <div className="h-ar-imgW">
        {image ? (
          <div className="h-ar-imgC">
            <Image
              src={image}
              alt="Hello world"
              className="h-ar-img"
              loading="lazy"
              placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM0Cdx0BgAD/QIFYj/1qAAAAABJRU5ErkJggg=="
              fill
            />
          </div>
        ) : null}

        <div className="h-ar-tags l_cluster">
          {tags.map((tag) => (
            <Tag key={tag} color="p" title={tag} size="sm" />
          ))}
        </div>
      </div>
      <div className="h-ar-cnt l_f_2xs">
        <Flex items="center">
          <Flex gap="sm" items="center">
            <Avatar size="lg" image="/me.jpg" title="my Avatar" />
            <div>
              <Text size="xs" weight="medium">
                Hamza Miloud Amar
              </Text>
              <Text
                contrast="low"
                color="b"
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
          truncate={2}
        >
          {title}
        </Heading>
        <Text contrast="low" color="b" size="md" truncate={4}>
          {excerpt}
        </Text>
      </div>

      <Button
        as={Link}
        variant="outline"
        fluid
        className="h-ar-btn"
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
      className="sct l_f_lg"
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
