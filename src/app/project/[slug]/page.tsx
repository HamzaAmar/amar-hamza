// oxlint-disable next/no-img-element
import { Button, CustomMDX, Flex, Text } from "@components/core";
import { Call, Email, Github, Twitter } from "@components/icons";
import { DOMAIN } from "@constants/domain";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import type { Article } from "schema-dts";

import { getProjectBySlug, getProjects } from "../../../api/blog";

type Params = {
  slug: string;
};

type ParamsReq = {
  params: Promise<Params>;
};

export default async function Project({ params }: ParamsReq) {
  const { slug } = await params;
  const post = getProjectBySlug(slug);

  if (!post) {
    notFound();
  }

  const permalink = `${DOMAIN}/blogs/${slug}`;

  const { content, metadata } = post;
  const { title, publishedAt, image, excerpt, lastModified, technologies } = metadata;

  const img = `${DOMAIN}/favicon/logo-512X512.png`;
  const ogImage = image?.src ? `${DOMAIN}/${image.src}` : img;

  const JSON_LD: Article = {
    "@type": "BlogPosting",
    headline: title,
    datePublished: publishedAt,
    dateModified: lastModified,
    description: excerpt,
    image: ogImage,
    url: `${DOMAIN}/blogs/${slug}`,
    author: {
      "@type": "Person",
      name: "Hamza Miloud Amar",
      url: "https://www.miloudamar.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Hamza Miloud Amar",
    },
    keywords: technologies,
  };

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            ...JSON_LD,
          }),
        }}
      />
      <div className="reading-layout Sf-6">
        <div className="Sf-5">
          <div className="Sf-2">
            <Text type="heading" as="h1" size="7" weight="4">
              {title}
            </Text>
            <Text type="heading" size="7" weight="3">
              {excerpt}
            </Text>
          </div>
          <Flex gap="4">
            <Button icon={<Call />}>Call Us</Button>
            <Button icon={<Email />} variant="soft">
              Contact Us
            </Button>
          </Flex>
        </div>
        <div className="reading-layout--avatar-container">
          <Image
            fill
            placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM0Cdx0BgAD/QIFYj/1qAAAAABJRU5ErkJggg=="
            className="reading-layout--avatar"
            src={image?.src ?? ""}
            alt={image?.alt ?? title}
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
                "--cluster-justify": "space-between",
              } as CSSProperties
            }
          >
            <a
              className="reading-layout--link u_column"
              target="_blank"
              rel="noreferrer noopener"
              href={`https://x.com/intent/tweet?${new URLSearchParams({
                url: permalink,
                text: `Just finished reading this article |${title}| by Hamza Miloud Amar. Highly recommend it to anyone interested in #webdev. Give it a read and share your thoughts!\n\n #frontend #nextjs #remix \n\n`,
              })}`}
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
              Your support helps me create more helpful content. If you enjoyed this, please consider buying me a
              coffee.
            </Text>
            <div>
              <a href="https://ko-fi.com/Y8Y210RGNC" target="_blank" rel="noreferrer">
                <img
                  height="36"
                  style={{ border: 0, height: "36px" }}
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
  const posts = getProjects().map(({ metadata }) => ({
    slug: metadata.slug,
  }));

  return posts;
}

export async function generateMetadata({ params }: ParamsReq): Promise<Metadata | undefined> {
  const { slug } = await params;
  const post = getProjectBySlug(slug);
  if (!post) {
    return;
  }

  const { title, publishedAt: publishedTime, excerpt: description, image, technologies } = post.metadata;

  const img = `${DOMAIN}/favicon/logo-512X512.png`;
  const ogImage = image?.src ? `${DOMAIN}/${image.src}` : img;

  return {
    title,
    description,
    keywords: technologies,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${DOMAIN}/blogs/${slug}`,

      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
