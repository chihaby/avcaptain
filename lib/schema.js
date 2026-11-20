import { site, serviceAreas } from '@/lib/site';

// LocalBusiness structured data so search engines understand where you work.
export function buildSchema() {
  const cities = serviceAreas.flatMap((area) => area.towns);
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: site.name,
    description: site.tagline,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.baseCity,
      addressRegion: site.region,
      addressCountry: 'US',
    },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'San Francisco Bay Area, California' },
      ...cities.map((name) => ({ '@type': 'City', name })),
    ],
    serviceType: [
      'Corporate AV services',
      'Meeting audio setup',
      'Conference sound',
      'Hybrid event audio',
    ],
  };
}
