import { compareDesc } from "date-fns";
import fs from "node:fs";
// import fs from 'fs';
import path from "node:path";
import readingTime from "reading-time";
import { parse } from "yaml";

import type { Post } from "@type/post";

function parseFrontmatter(fileContent: string, filename: string) {
  // Split the file content into frontmatter and content

  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);
  const frontMatterBlock = match?.[1] ?? "";
  const content = fileContent.replace(frontmatterRegex, "").trim();
  // Parse the frontmatter as YAML
  const frontmatter = parse(frontMatterBlock);
  const slug = filename;
  const stats = readingTime(content);
  const metadata = {
    ...frontmatter,
    readingTime: stats,
    slug,
  } as Post;

  return {
    metadata,
    content,
  };
}

function getMDXFiles(dir: string) {
  return fs
    .readdirSync(dir)
    .filter(file => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string, filename: string) {
  const fileContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(fileContent, filename);
}

function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const [filename] = file.split(".");

    const { metadata, content } = readMDXFile(
      path.join(dir, file),
      filename,
    );
    return {
      metadata,
      content,
    };
  });
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), "content")).sort(
    (first, second) => {
      return compareDesc(
        new Date(first.metadata.publishedAt),
        new Date(second.metadata.publishedAt),
      );
    },
  );
}

export function getBlogPostsWithLimit(max: number) {
  const blogs = getBlogPosts();
  const length = Math.min(max, blogs.length);
  const posts = Array.from({ length }).map(
    (_, index) => blogs[index],
  );
  return posts;
}

export function getBlogPostBySlug(slug: string) {
  return getBlogPosts().find(
    ({ metadata }) => metadata.slug === slug,
  );
}
