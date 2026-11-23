// TODO: replace every placeholder in this file with your real details.
export const site = {
  name: 'AV CAPTAIN', // TODO
  tagline: 'Corporate AV for small and mid-sized businesses in the Bay Area',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  phone: '(510) 630-9741', // TODO
  phoneHref: 'tel:+15106309741', // TODO
  email: 'info.avcaptain@gmail.com', // TODO
  baseCity: 'Oakland', // TODO: your home city
  region: 'CA',
  replyTime: 'I reply within one business day.',
};

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export const serviceAreas = [
  { region: 'San Francisco', towns: ['San Francisco'] },
  {
    region: 'Peninsula',
    towns: ['Daly City', 'Pacifica', 'San Mateo', 'Redwood City', 'Menlo Park', 'Palo Alto', 'Half Moon Bay'],
  },
  {
    region: 'South Bay',
    towns: ['San Jose', 'Santa Clara', 'Sunnyvale', 'Mountain View', 'Cupertino', 'Los Altos', 'Los Gatos', 'Saratoga'],
  },
  {
    region: 'East Bay',
    towns: ['Oakland', 'Berkeley', 'Alameda', 'Fremont', 'Hayward', 'Walnut Creek', 'Pleasanton', 'Livermore', 'Danville', 'Lafayette'],
  },
  {
    region: 'North Bay',
    towns: ['San Rafael', 'Mill Valley', 'Sausalito', 'Tiburon', 'Novato', 'Petaluma', 'Santa Rosa', 'Napa', 'Sonoma'],
  },
];
