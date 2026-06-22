import fs from "node:fs";
import path from "node:path";

import { type Post } from "@type/post";
import type { Project } from "@type/project";
import { compareDesc } from "date-fns";
import readingTime from "reading-time";
import { parse } from "yaml";

function parseFrontmatter<E>(fileContent: string, filename: string) {
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
  } as E;

  return {
    metadata,
    content,
  };
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile<E>(filePath: string, filename: string) {
  const fileContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter<E>(fileContent, filename);
}

function getMDXData<E>(dir: string) {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const [filename] = file.split(".");

    const { metadata, content } = readMDXFile<E>(path.join(dir, file), filename);
    return {
      metadata,
      content,
    };
  });
}

export const getContentList =
  <E extends Post | Project>(where = "content") =>
  () => {
    return getMDXData<E>(path.join(process.cwd(), where)).sort((first, second) => {
      return compareDesc(new Date(first.metadata.publishedAt), new Date(second.metadata.publishedAt));
    });
  };

export const getBlogPosts = getContentList<Post>("content");
export const getProjects = getContentList<Project>("projects");

// export const getProjects = () => {
//   const getProjects = getContentList("projects");
//   const projects = getProjects();

//   const obj = { 1: [], 2: [], 3: [], 4: [], 5: [] };
//   projects.forEach(({ metadata }) => {
//     const rank = metadata.rank ?? 5;
//     obj[rank].push(metadata);
//   });
//   const arr = [...obj[1], ...obj[2], ...obj[3], ...obj[4], ...obj[5]];

//   return arr;
// };

export function getBlogPostsWithLimit(max: number) {
  const blogs = getBlogPosts();
  const length = Math.min(max, blogs.length);
  const posts = Array.from({ length }).map((_, index) => blogs[index]);
  return posts;
}

export const getProjectBySlug = (slug: string) => {
  const projects = getProjects();
  return projects.find(({ metadata }) => metadata.slug === slug);
};
export const getBlogPostBySlug = (slug: string) => {
  const posts = getBlogPosts();
  return posts.find(({ metadata }) => metadata.slug === slug);
};
