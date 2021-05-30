// const { promises: fs } = require('fs');
import { promises as fs } from 'fs';
// const path = require('path');
import path from 'path';
// const RSS = require('rss');
import RSS from 'rss';
// const matter = require('gray-matter');
import matter from 'gray-matter';

const pathFromRootToBlog = path.join(
  process.cwd(),
  'src',
  'data',
  'blog',
);

async function generate() {
  const feed = new RSS({
    title: 'Lee Robinson',
    site_url: 'https://leerob.io',
    feed_url: 'https://leerob.io/feed.xml',
  });

  const posts = await fs.readdir(pathFromRootToBlog);

  await Promise.all(
    posts.map(async (name) => {
      const content = await fs.readFile(
        path.join(pathFromRootToBlog, name),
      );
      const frontmatter = matter(content);

      feed.item({
        title: frontmatter.data.title,
        url: 'https://leerob.io/blog/' + name.replace(/\.mdx?/, ''),
        date: frontmatter.data.publishedAt,
        description: frontmatter.data.summary,
      });
    }),
  );

  await fs.writeFile('./public/feed.xml', feed.xml({ indent: true }));
}

generate();
