import { pageMeta } from '@/lib/metadata';
import { principles } from '@/lib/content';
import PageIntro from '@/components/PageIntro';
import Section from '@/components/Section';
import AboutBio from '@/components/AboutBio';
import CardGrid from '@/components/CardGrid';
import CallToAction from '@/components/CallToAction';

export const metadata = pageMeta({
  title: 'About Your Bay Area AV Freelancer',
  description:
    'Meet the freelance AV professional behind reliable, low-stress audio for corporate meetings across the San Francisco Bay Area.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <>
      <PageIntro
        title="About"
        lead="Reliable audio from someone you can talk to directly."
      />
      <Section id="bio" title="Who you will work with">
        <AboutBio />
      </Section>
      <Section id="principles" title="How I work" tone="alt">
        <CardGrid items={principles} />
      </Section>
      <CallToAction />
    </>
  );
}
