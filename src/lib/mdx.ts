import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import readingTime from 'reading-time';
import { serialize } from 'next-mdx-remote/serialize';
import mdxPrism from 'mdx-prism';

const root = process.cwd();
const rootWithSrcFolder = path.join(root, 'src');

export async function getFiles(type: string) {
  return fs.readdirSync(path.join(rootWithSrcFolder, 'data', type));
}

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
      rehypePlugins: [mdxPrism],
    },
  });
  // const tweetMatches = content.match(
  //   /<StaticTweet\sid="[0-9]+"\s\/>/g,
  // );
  // const tweetIDs = tweetMatches?.map(
  //   (tweet) => tweet.match(/[0-9]+/g)[0],
  // );

  return {
    mdxSource,
    // tweetIDs: tweetIDs || [],
    frontMatter: {
      wordCount: content.split(/\s+/gu).length,
      readingTime: readingTime(content),
      slug: slug || null,
      ...data,
    },
  };
}

export async function getAllFilesFrontMatter(type: string) {
  const files = fs.readdirSync(
    path.join(rootWithSrcFolder, 'data', type),
  );

  console.log(files, 'this is the value of files hello wolrd');

  const arr = [];

  for (let post of files) {
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
