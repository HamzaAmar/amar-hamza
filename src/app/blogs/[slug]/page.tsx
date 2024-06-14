/* eslint-disable @typescript-eslint/require-await */

import { allBlogs } from 'contentlayer/generated';
import { notFound } from 'next/navigation';

interface Params {
  slug: string;
}

export default async function Blog({ params }: { params: Params }) {
  const { slug } = params;
  const post = allBlogs.find((blog) => slug === blog.slug);

  if (!post) {
    notFound();
  }

  const { body } = post;
  const Component = useMDXComponent(body.code);
  return <Component components={components} />;
}

export function generateStaticParams() {
  return {
    paths: allBlogs.map(({ slug }) => ({
      params: {
        slug,
      },
    })),

    fallback: false,
  };
}
