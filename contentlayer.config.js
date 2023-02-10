import {
  defineDocumentType,
  makeSource,
  defineNestedType,
} from 'contentlayer/source-files';
import readingTime from 'reading-time';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

const computedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
  },
  readingTime: {
    type: 'json',
    resolve: (doc) => readingTime(doc.body.raw),
  },
};

const Author = defineNestedType(() => ({
  name: 'Author',
  fields: {
    name: { type: 'string', required: true },
    picture: { type: 'string', required: true },
  },
}));

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    excerpt: {
      type: 'string',
      description: 'The summary of the post',
      required: true,
    },
    date: {
      type: 'string',
      required: true,
    },

    image: {
      type: 'string',
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
      description: 'The Tags of the post',
      required: true,
    },
    author: {
      type: 'nested',
      of: Author,
      description: 'The title of the post',
      required: true,
    },
  },
  computedFields,
}));

const mdx = {
  remarkPlugins: [remarkGfm],
  rehypePlugins: [
    rehypeSlug,
    [
      rehypePrettyCode,
      {
        theme: {
          dark: 'slack-dark',
          light: 'github-light',
        },
        onVisitLine(node) {
          // Prevent lines from collapsing in `display: grid` mode, and allow empty
          // lines to be copy/pasted
          if (node.children.length === 0) {
            node.children = [{ type: 'text', value: ' ' }];
          }
        },
        onVisitHighlightedLine(node) {
          node.properties.className.push('line--highlighted');
        },
        onVisitHighlightedWord(node) {
          node.properties.className = ['word--highlighted'];
        },
      },
    ],
    [
      rehypeAutolinkHeadings,
      {
        properties: {
          className: ['anchor'],
        },
      },
    ],
  ],
};

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Blog],
  mdx,
});
