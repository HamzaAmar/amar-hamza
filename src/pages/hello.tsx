import fs from 'fs';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Head from 'next/head';
import Link from 'next/link';
import path from 'path';

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  a: () => <Link href=""></Link>,
  Head,
};

export default function PostPage({ source, frontMatter }) {
  return (
    <>
      <header>
        <nav>
          <Link href="/">
            <a>👈 Go back home {frontMatter.title}</a>
          </Link>
        </nav>
      </header>
      <div className="post-header">
        <h1>{frontMatter.title}</h1>
        {frontMatter.description && (
          <p className="description">{frontMatter.description}</p>
        )}
      </div>
      <main>
        <MDXRemote {...source} components={components} />
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const postFilePath = path.join(
    process.cwd(),
    'src',
    'data',
    'blog',
    `preview.mdx`,
  );
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: {
        // wordCount: content.split(/\s+/gu).length,
        // readingTime: readingTime(content),
        slug: 'preview' || null,
        ...data,
      },
    },
  };
};
