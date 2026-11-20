import { pageMeta } from '@/lib/metadata';
import { gear } from '@/lib/content';
import { serviceDetails } from '@/lib/services';
import PageIntro from '@/components/PageIntro';
import Section from '@/components/Section';
import CardGrid from '@/components/CardGrid';
import ServiceArea from '@/components/ServiceArea';
import CallToAction from '@/components/CallToAction';

export const metadata = pageMeta({
  title: 'Corporate AV Services and Service Area',
  description:
    'Audio for boardroom meetings, all-hands, conferences, and hybrid events. Serving San Francisco, the Peninsula, South Bay, East Bay, and North Bay.',
  path: '/services',
});

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        title="Services"
        lead="Clear sound for corporate meetings and events, set up and run for you."
      />
      <Section id="cover" title="What I cover">
        <CardGrid items={serviceDetails} />
      </Section>
      <Section id="gear" title="Gear I bring" tone="alt">
        <CardGrid items={gear} />
      </Section>
      <Section id="area" title="Where I work">
        <p>I serve the whole San Francisco Bay Area, including smaller nearby towns.</p>
        <ServiceArea />
      </Section>
      <CallToAction />
    </>
  );
}
