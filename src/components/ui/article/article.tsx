import Link from 'next/link';
import { formatDate } from '@utils/formatDate';
import Image from 'next/image';
import {
  Avatar,
  Button,
  Heading,
  IconButton,
  Tag,
  Text,
} from '@components/core';
import { Bookmark } from '@components/icons';

import { ArticleProps } from './article.type';

const Article = ({
  excerpt,
  title,
  date,
  slug,
  tags,
  isBookmarked = false,
}: ArticleProps) => {
  const handleClick = () => {
    console.log(slug);
  };

  return (
    <article className="article l_flow">
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

        <div className="article--tags">
          {tags?.map((tag) => (
            <Tag key={tag} color="secondary" title={tag} size="sm" />
          ))}
        </div>
      </div>
      <div className="article--content l_flow">
        <div className="article--header">
          <Avatar size="lg" image="/me.jpg" title="my Avatar" />
          <div className="avatarContainerHeader">
            <Text variant="caption" weight="bold">
              Hamza Miloud Amar
            </Text>
            <Text as="time" variant="caption" dateTime={date}>
              {formatDate(date)}
            </Text>
          </div>

          <IconButton
            onClick={handleClick}
            type="button"
            // color="danger"
            data-bookmark={isBookmarked}
            className="article--favorite"
          >
            <Bookmark width={20} />
          </IconButton>
        </div>
        <Heading align="start" size="xs">
          {title}
        </Heading>
        <Text truncate="multiline" multiline={4}>
          {excerpt}
        </Text>
      </div>

      <Link href={`/blogs/${slug}`} passHref>
        <Button
          variant="outline"
          size="fluid"
          className="article--button"
          as="a"
        >
          Read More
        </Button>
      </Link>
    </article>
  );
};

export default Article;
