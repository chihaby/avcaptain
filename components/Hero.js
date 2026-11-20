import Button from '@/components/Button';
import styles from './Hero.module.css';

const bars = [40, 75, 55, 90, 65];

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.inner}>
        <div>
          <h1 id="hero-title">
            Clear, reliable audio and video for your corporate meetings across the Bay Area
          </h1>
          <p className={styles.lead}>
            Freelance AV for boardrooms, all-hands, conferences, and hybrid events in San
            Francisco, Oakland, San Jose, and nearby towns.
          </p>
          <div className={styles.actions}>
            <Button href="/contact#schedule">Schedule a Call</Button>
            <Button href="/services" variant="inverse">See Services</Button>
          </div>
        </div>
        <div className={styles.bars} aria-hidden="true">
          {bars.map((h, i) => (
            <span key={h} style={{ '--h': `${h}%`, '--d': `${i * 0.2}s` }} />
          ))}
        </div>
      </div>
    </section>
  );
}
