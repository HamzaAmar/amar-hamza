import { getBlogPostBySlug, getBlogPosts } from 'api/blog';
import { notFound } from 'next/navigation';
import {
  Avatar,
  Flex,
  Heading,
  IconButton,
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
import { CSSProperties } from 'react';

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
  const { author, title, publishedAt, image, readingTime, slug } =
    metadata;

  console.log('this is the value of the post', title);

  return (
    <div className="reading-layout center l_flow">
      <Heading as="h1" align="center">
        {title}
      </Heading>
      {author && (
        <div>
          <Flex items="center" gap="sm">
            <Avatar
              image={author.picture}
              title="Hamza Miloud Amar Avatar"
            />
            <Flex gap="xs" direction="column" className="u_flex-1">
              <Text size="sm" weight="medium">
                {author.name}
              </Text>
              <Flex as="ul" gap="xs" className="reading-layout--list">
                <li>
                  <IconButton
                    size="xs"
                    icon={<Facebook />}
                    title={`GO TO ${author.name} Facebook`}
                  />
                </li>
                <li>
                  <IconButton
                    size="xs"
                    icon={<Twitter />}
                    title={`GO TO ${author.name} Facebook`}
                  />
                </li>
                <li>
                  <IconButton
                    size="xs"
                    icon={<Github />}
                    title={`GO TO ${author.name} Facebook`}
                  />
                </li>
                <li>
                  <IconButton
                    size="xs"
                    icon={<Linkdin />}
                    title={`GO TO ${author.name} Facebook`}
                  />
                </li>
              </Flex>
            </Flex>
            <div>
              <Text size="sm">{formatDate(publishedAt)}</Text>
              <Text
                align="center"
                size="sm"
                color="slate"
                contrast="low"
              >
                {readingTime.text}
              </Text>
            </div>
          </Flex>
        </div>
      )}
      <div>
        <img src={image} alt="" />
      </div>

      <div className="prose l_flow">
        <CustomMDX source={content} />
      </div>

      <div className="reading-layout--footer l_flow__md">
        <div
          className="l_cluster"
          style={
            { '--cluster-justify': 'space-between' } as CSSProperties
          }
        >
          <a
            className="reading-layout--link"
            target="_blank"
            rel="noreferrer noopener"
            href={`https://twitter.com/intent/tweet?${new URLSearchParams(
              {
                url: permalink,
                text: `I just read helel "${title}" by @HamzaMiloudAma1\n\n`,
              },
            )}`}
          >
            <Twitter width="20" strokeWidth="1.5" />
            Share on Twitter
          </a>
          <div className="l_cluster">
            <a
              className="reading-layout--link"
              target="_blank"
              rel="noreferrer noopener"
              href={`https://twitter.com/search?${new URLSearchParams(
                {
                  q: permalink,
                },
              )}`}
            >
              Discuss on 𝕏
            </a>
            <a
              className="reading-layout--link"
              target="_blank"
              rel="noreferrer noopener"
              href={`https://github.com/HamzaAmar/amar-hamza/tree/main/content/${slug}.mdx?plain=1`}
            >
              <Github width="20" strokeWidth="1.5" />
              Improve Post Github
            </a>
          </div>
        </div>

        <div className="l_flow__xs">
          <Text>
            Your support helps me create more helpful content. If you
            enjoyed this, please consider buying me a coffee.
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
  } = post.metadata;
  const img = `${DOMAIN}/assets/favicon/logo-512X512.png`;
  let ogImage = image ? `${DOMAIN}${image}` : img;

  return {
    title,
    description,
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
