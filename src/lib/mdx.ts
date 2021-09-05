import path from 'path';
import fs from 'fs';

import matter from 'gray-matter';
import readingTime from 'reading-time';
import { serialize } from 'next-mdx-remote/serialize';
import mdxPrism from 'mdx-prism';

const root = process.cwd();
const rootWithSrcFolder = path.join(root, 'src');

export function getFiles(type: string) {
  return fs.readdirSync(path.join(rootWithSrcFolder, 'data', type));
}

// export async function getFile(type: string[]) {
//   return fs.readFileSync(
//     path.join(rootWithSrcFolder, 'data', ...type),
//     'utf8',
//   );
// }

export async function getFileBySlug(type: string, slug: string) {
  const source = slug
    ? fs.readFileSync(
        path.join(rootWithSrcFolder, 'data', type, `${slug}.mdx`),
        'utf8',
      )
    : fs.readFileSync(
        path.join(rootWithSrcFolder, 'data', `${type}.mdx`),
        'utf8',
      );

  const { data, content } = matter(source);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        require('remark-autolink-headings'),
        require('remark-slug'),
        require('remark-code-titles'),
      ],
    },
  });

  console.log(mdxSource);

  return {
    mdxSource,
    frontMatter: {
      ...data,
      wordCount: content.split(/\s+/gu).length,
      readingTime: readingTime(content),
      slug: slug || null,
    },
  };
}

export function getAllFilesFrontMatter(type: string) {
  const files = getFiles(type);

  const arr = [];

  for (const post of files) {
    const source = fs.readFileSync(
      path.join(rootWithSrcFolder, 'data', type, post),
      'utf8',
    );
    const { data } = matter(source);
    arr.push({
      ...data,
      slug: post.replace('.mdx', ''),
    });
  }
  return arr;
}
