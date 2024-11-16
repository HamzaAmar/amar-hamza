import { getBlogPostBySlug, getBlogPosts } from 'api/blog';
import { notFound } from 'next/navigation';
import {
  Avatar,
  Flex,
  Heading,
  Social,
  Text,
} from '@components/core';
import { Github, Twitter } from '@components/icons';
import { formatDate } from '@utils/formatDate';
import { CustomMDX } from '@components/core/mdx';
import type { Metadata } from 'next';
import { DOMAIN } from '@constants/domain';
import { type CSSProperties, Suspense } from 'react';
import Image from 'next/image';
import { incrementViews } from 'app/actions/views';
import { PageViews } from './pageViews';
import type { Article } from 'schema-dts';

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
  const ogImage = image ? `${DOMAIN}/${image}` : img;

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
      <div className="reading-layout Sf-6">
        <Heading as="h1" size="7" weight="4">
          {title}
        </Heading>
        {author && (
          <div>
            <Flex items="center" gap="4">
              <div>
                <Avatar
                  image={author.picture}
                  title="Hamza Miloud Amar Avatar"
                />
              </div>
              <Flex gap="2" direction="column" className="u_flex-1">
                <Text size="4" weight="5">
                  {author.name}
                </Text>
                <Suspense
                  fallback={
                    <div className="reading-layout--fallback" />
                  }
                >
                  <PageViews slug={slug} />
                </Suspense>
                <Social size="4" />
              </Flex>
              <div>
                <Text size="4">{formatDate(publishedAt)}</Text>
                <Text align="center" size="4" color="b" low>
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

        <div className="prose Sf-5">
          <CustomMDX source={content} />
        </div>

        <div className="reading-layout--footer Sf-5">
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

          <div className="Sf-3">
            <Text>
              Your support helps me create more helpful content. If
              you enjoyed this, please consider buying me a coffee.
            </Text>
            <div>
              <a
                href="https://ko-fi.com/Y8Y210RGNC"
                target="_blank"
                rel="noreferrer"
              >
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

  const {
    title,
    publishedAt: publishedTime,
    excerpt: description,
    image,
    slug,
    tags,
  } = post.metadata;
  const img = `${DOMAIN}/favicon/logo-512X512.png`;
  const ogImage = image ? `${DOMAIN}/${image}` : img;

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
