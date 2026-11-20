import { site } from '@/lib/site';
import { pageMeta } from '@/lib/metadata';
import { highlights, steps } from '@/lib/content';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import CardGrid from '@/components/CardGrid';
import HowItWorks from '@/components/HowItWorks';
import Button from '@/components/Button';
import CallToAction from '@/components/CallToAction';

export const metadata = pageMeta({
  title: `Corporate AV and Audio for Meetings in the Bay Area | ${site.name}`,
  description:
    'Freelance AV and audio for corporate meetings, all-hands, conferences, and hybrid events in San Francisco, Oakland, San Jose, and across the Bay Area.',
  path: '/',
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Section id="services" title="AV for the meetings that matter" tone="alt">
        <CardGrid items={highlights} />
      </Section>
      <Section id="how" title="How it works">
        <HowItWorks steps={steps} />
      </Section>
      <Section id="area" title="Serving the whole Bay Area" tone="alt">
        <p>
          From San Francisco to San Jose, Oakland to Santa Rosa, and the smaller towns in
          between, I travel to your office, hotel, or venue.
        </p>
        <Button href="/services#area" variant="outline">See where I work</Button>
      </Section>
      <CallToAction />
    </>
  );
}
