import type { MetadataRoute } from 'next';
import { getBlogPosts } from '../api/blog';
import { DOMAIN } from '@constants/domain';

const PAGES = ['/blogs', '/contact', '/resume'];
const NOW = new Date().toISOString().split('T')[0];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let blogs = getBlogPosts().map((post) => ({
    url: `${DOMAIN}/blogs/${post.metadata.slug}`,
    lastModified: post.metadata.lastModified,
    priority: 0.9,
    changefreq: 'daily',
  }));

  let routes = PAGES.map((page) => ({
    url: `${DOMAIN}${page}`,
    lastModified: NOW,
    priority: 0.8,
    changefreq: 'monthly',
  }));

  const home = {
    url: `${DOMAIN}`,
    lastModified: NOW,
    priority: 1,
    changefreq: 'monthly',
  };

  return [home, ...routes, ...(blogs || [])];
}
