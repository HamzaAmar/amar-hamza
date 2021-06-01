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

async function generate() {
  const feed = new RSS({
    title: 'Hamza Miloud Amar',
    site_url: 'https://hello.io',
    feed_url: 'https://hello.io/feed.xml',
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
          url: `https://leerob.io/blog + ${post.replace(
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
