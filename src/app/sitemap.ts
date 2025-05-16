import type { MetadataRoute } from 'next';
import { getBlogPosts } from '../api/blog';
import { DOMAIN } from '@constants/domain';

const PAGES = ['/blogs', '/contact', '/resume'];
const NOW = new Date().toISOString().split('T')[0];

type SiteMap = MetadataRoute.Sitemap[0];

export default async function sitemap(): Promise<SiteMap[]> {
  const blogs: SiteMap[] = getBlogPosts().map((post) => ({
    url: `${DOMAIN}/blogs/${post.metadata.slug}`,
    lastModified: post.metadata.lastModified,
    priority: 0.9,
    changeFrequency: 'daily',
  }));

  const routes: SiteMap[] = PAGES.map((page) => ({
    url: `${DOMAIN}${page}`,
    lastModified: NOW,
    priority: 0.8,
    changeFrequency: 'daily',
  }));

  const home: SiteMap = {
    url: `${DOMAIN}`,
    lastModified: NOW,
    priority: 1,
    changeFrequency: 'daily',
  };

  return [home, ...routes, ...(blogs || [])];
}
