import { site, navLinks } from '@/lib/site';

export default function sitemap() {
  return navLinks.map(({ href }) => ({
    url: `${site.url}${href === '/' ? '' : href}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: href === '/' ? 1 : 0.8,
  }));
}
