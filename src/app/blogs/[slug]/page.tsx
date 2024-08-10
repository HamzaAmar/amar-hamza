import { getBlogPostBySlug, getBlogPosts } from 'api/blog';
import { notFound } from 'next/navigation';
import {
  Avatar,
  Flex,
  Heading,
  IconButton,
  Social,
  Text,
} from '@components/core';
import {
  Facebook,
  Github,
  Linkdin,
  Twitter,
} from '@components/icons';
import { formatDate } from '@utils/formatDate';
import { CustomMDX } from '@components/core/mdx';
import { Metadata } from 'next';
import { DOMAIN } from '@constants/domain';
import { CSSProperties, Suspense } from 'react';
import Image from 'next/image';
import { incrementViews } from 'app/actions/views';
import { PageViews } from './pageViews';
import { Article } from 'schema-dts';

interface Params {
  slug: string;
}

interface ParamsReq {
  params: Params;
}

export default async function Blog({ params }: ParamsReq) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const permalink = `${DOMAIN}/blogs/${params.slug}`;

  const { content, metadata } = post;
  const {
    author,
    title,
    publishedAt,
    image,
    readingTime,
    slug,
    excerpt,
    lastModified,
    tags,
  } = metadata;

  const img = `${DOMAIN}/favicon/logo-512X512.png`;
  let ogImage = image ? `${DOMAIN}/${image}` : img;

  const JSON_LD: Article = {
    '@type': 'BlogPosting',
    headline: title,
    datePublished: publishedAt,
    dateModified: lastModified,
    description: excerpt,
    image: ogImage,
    url: `${DOMAIN}/blogs/${slug}`,
    author: {
      '@type': 'Person',
      name: 'Hamza Miloud Amar',
      url: 'https://www.miloudamar.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Hamza Miloud Amar',
    },
    keywords: tags,
  };

  await incrementViews(slug);

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            ...JSON_LD,
          }),
        }}
      />
      <div className="reading-layout l_f_lg">
        <Heading as="h1" size="xl" weight="normal">
          {title}
        </Heading>
        {author && (
          <div>
            <Flex items="center" gap="sm">
              <div>
                <Avatar
                  image={author.picture}
                  title="Hamza Miloud Amar Avatar"
                />
              </div>
              <Flex gap="xs" direction="column" className="u_flex-1">
                <Text size="sm" weight="medium">
                  {author.name}
                </Text>
                <Suspense
                  fallback={
                    <div className="reading-layout--fallback" />
                  }
                >
                  <PageViews slug={slug} />
                </Suspense>
                <Social />
              </Flex>
              <div>
                <Text size="sm">{formatDate(publishedAt)}</Text>
                <Text
                  align="center"
                  size="sm"
                  color="b"
                  contrast="low"
                >
                  {readingTime.text}
                </Text>
              </div>
            </Flex>
          </div>
        )}
        <div className="reading-layout--avatar-container">
          <Image
            fill
            placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM0Cdx0BgAD/QIFYj/1qAAAAABJRU5ErkJggg=="
            className="reading-layout--avatar"
            src={image}
            alt={title}
            priority
          />
        </div>

        <div className="prose l_f_md">
          <CustomMDX source={content} />
        </div>

        <div className="reading-layout--footer l_f_md">
          <div
            className="l_cluster"
            style={
              {
                '--cluster-justify': 'space-between',
              } as CSSProperties
            }
          >
            <a
              className="reading-layout--link u_column"
              target="_blank"
              rel="noreferrer noopener"
              href={`https://x.com/intent/tweet?${new URLSearchParams(
                {
                  url: permalink,
                  text: `Just finished reading this article |${title}| by Hamza Miloud Amar. Highly recommend it to anyone interested in #webdev. Give it a read and share your thoughts!\n\n #frontend #nextjs #remix \n\n`,
                },
              )}`}
            >
              <Twitter width="20" strokeWidth="1.5" />
              Share on 𝕏
            </a>
            <div className="l_cluster">
              <a
                className="reading-layout--link u_column"
                target="_blank"
                rel="noreferrer noopener"
                href={`https://x.com/search?${new URLSearchParams({
                  q: permalink,
                })}`}
              >
                Discuss on 𝕏
              </a>
              <a
                className="reading-layout--link u_column"
                target="_blank"
                rel="noreferrer noopener"
                href={`https://github.com/HamzaAmar/amar-hamza/tree/main/content/${slug}.mdx?plain=1`}
              >
                <Github width="20" strokeWidth="1.5" />
                Improve Post Github
              </a>
            </div>
          </div>

          <div className="l_f_xs">
            <Text>
              Your support helps me create more helpful content. If
              you enjoyed this, please consider buying me a coffee.
            </Text>
            <div>
              <a href="https://ko-fi.com/Y8Y210RGNC" target="_blank">
                <img
                  height="36"
                  style={{ border: 0, height: '36px' }}
                  src="https://storage.ko-fi.com/cdn/kofi1.png?v=3"
                  alt="Buy Me a Coffee at ko-fi.com"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function generateStaticParams() {
  const posts = getBlogPosts().map(({ metadata }) => ({
    slug: metadata.slug,
  }));

  return posts;
}

export async function generateMetadata({
  params,
}: ParamsReq): Promise<Metadata | undefined> {
  const post = getBlogPostBySlug(params.slug);
  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    excerpt: description,
    image,
    slug,
    tags,
  } = post.metadata;
  const img = `${DOMAIN}/favicon/logo-512X512.png`;
  let ogImage = image ? `${DOMAIN}/${image}` : img;

  return {
    title,
    description,
    keywords: tags,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${DOMAIN}/blogs/${slug}`,

      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}
