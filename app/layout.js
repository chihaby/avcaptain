import '@fontsource-variable/lexend';
import './globals.css';
import { site } from '@/lib/site';
import { buildSchema } from '@/lib/schema';
import SkipLink from '@/components/SkipLink';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `Corporate AV and Audio Services in the Bay Area | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description:
  'Corporate AV and audio for small and mid-sized businesses. Meetings, all-hands, conferences, and hybrid events in Oakland, San Francisco, San Jose, and across the Bay Area.',
};

export const viewport = { themeColor: '#0b2545' };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SkipLink />
        <Header />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSchema()) }}
        />
      </body>
    </html>
  );
}
