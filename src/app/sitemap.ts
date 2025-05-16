import type { MetadataRoute } from 'next';
import { getBlogPosts } from '../api/blog';
import { DOMAIN } from '@constants/domain';

const PAGES = ['/blogs', '/contact', '/resume'];
const NOW = new Date().toISOString().split('T')[0];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs: MetadataRoute.Sitemap = getBlogPosts().map((post) => ({
    url: `${DOMAIN}/blogs/${post.metadata.slug}`,
    lastModified: post.metadata.lastModified,
    priority: 0.9,
    changeFrequency: 'daily',
  }));

  const routes: MetadataRoute.Sitemap = PAGES.map((page) => ({
    url: `${DOMAIN}${page}`,
    lastModified: NOW,
    priority: 0.8,
    changeFrequency: 'daily',
  }));

  const home: MetadataRoute.Sitemap[0] = {
    url: `${DOMAIN}`,
    lastModified: NOW,
    priority: 1,
    changeFrequency: 'daily',
  };

  return [home, ...routes, ...(blogs || [])];
}
