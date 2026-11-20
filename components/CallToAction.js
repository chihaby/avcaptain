import { site } from '@/lib/site';
import Section from '@/components/Section';
import Button from '@/components/Button';
import styles from './CallToAction.module.css';

export default function CallToAction() {
  return (
    <Section id="cta" title="Ready to talk about your meeting?" tone="navy">
      <p className={styles.text}>
        Schedule a short call to talk through your event. There is no obligation and no
        payment needed. {site.replyTime}
      </p>
      <div className={styles.actions}>
        <Button href="/contact#schedule">Schedule a Call</Button>
        <Button href={site.phoneHref} variant="inverse">
          Call {site.phone}
        </Button>
      </div>
    </Section>
  );
}
