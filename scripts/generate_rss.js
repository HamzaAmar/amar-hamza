const { promises: fs } = require('fs');
const path = require('path');
const RSS = require('rss');
const matter = require('gray-matter');

const pathFromRootToBlog = path.join(
  process.cwd(),
  'src',
  'data',
  'blog',
);
const { NEXT_PUBLIC_DOMAIN_NAME } = process.env;

async function generate() {
  const feed = new RSS({
    title: 'Hamza Miloud Amar',
    site_url: 'https://www.miloudamar.com',
    feed_url: 'https://www.miloudamar.com/feed.xml',
  });
  try {
    const posts = await fs.readdir(pathFromRootToBlog);

    await Promise.all(
      posts.map(async (post) => {
        const content = await fs.readFile(
          path.join(pathFromRootToBlog, post),
        );
        const frontmatter = matter(content);

        feed.item({
          title: frontmatter.data.title,
          url: `https://www.miloudamar.com/blog + ${post.replace(
            /\.mdx?/,
            '',
          )}`,
          date: frontmatter.data.publishedAt,
          description: frontmatter.data.summary,
        });
      }),
    );

    await fs.writeFile(
      './public/feed.xml',
      feed.xml({ indent: true }),
    );
  } catch (err) {
    console.log(err);
  }
}

generate();
