import { pageMeta } from '@/lib/metadata';
import PageIntro from '@/components/PageIntro';
import Section from '@/components/Section';
import Split from '@/components/Split';
import ContactForm from '@/components/ContactForm';
import ContactDetails from '@/components/ContactDetails';

export const metadata = pageMeta({
  title: 'Contact and Schedule a Call',
  description:
    'Request a call to talk about audio for your corporate meeting or event anywhere in the San Francisco Bay Area.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <PageIntro
        title="Contact"
        lead="Tell me about your event and I will set up a short call."
      />
      <Section id="schedule" title="Request a call">
        <Split
          main={<ContactForm />}
          aside={
            <>
              <h3>Prefer to reach out directly?</h3>
              <ContactDetails />
            </>
          }
        />
      </Section>
    </>
  );
}
