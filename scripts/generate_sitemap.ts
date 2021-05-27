const fs = require('fs');
const globby = require('globby');

(async () => {
  //   const pages = await globby([
  //     // 'pages/**/*{.tsx,.mdx}',
  //     // '../pages/**/*{.*}',
  //     // '!pages/_*.tsx',
  //     // '!pages/api',
  //   ]);
  const pages = await globby([
    'src/pages/**/*{.ts,.tsx,.mdx}',
    '!src/pages/_*.tsx',
    '!src/pages/api',
  ]);
  const sitemap = `
          <?xml version="1.0" encoding="UTF-8"?>
          <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
              ${pages
                .map((page) => {
                  const path = page
                    .replace('pages', '')
                    .replace('src/', '')
                    .replace('.tsx', '')
                    .replace('.mdx', '');
                  const route = path === '/index' ? '' : path;

                  return `
                          <url>
                              <loc>${`https://yoursitehere.com${route}`}</loc>
                          </url>
                      `;
                })
                .join('')}
          </urlset>
      `;

  fs.writeFileSync('public/sitemap.xml', sitemap);
})();
