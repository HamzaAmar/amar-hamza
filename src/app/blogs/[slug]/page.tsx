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

interface Params {
  slug: string;
}

export default async function Blog({ params }: { params: Params }) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const { content, metadata } = post;
  const { author, title, publishedAt, image, readingTime } = metadata;

  return (
    <div className="reading-layout center l_flow">
      <Heading as="h1" align="center">
        {title}
      </Heading>
      {author && (
        <div>
          <Flex items="center" gap="sm">
            <Avatar image={author.picture} title="hello" />
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
    </div>
  );
}

// export function generateStaticParams() {
//   return {
//     paths: getBlogPosts().map(({ metadata }) => ({
//       params: {
//         slug: metadata.slug,
//       },
//     })),

//     fallback: false,
//   };
// }
