import { site } from '@/lib/site';

export function pageMeta({ title, description, path }) {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: site.name,
      locale: 'en_US',
      type: 'website',
    },
  };
}
