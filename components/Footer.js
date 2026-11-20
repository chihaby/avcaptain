import Link from 'next/link';
import { site, navLinks, serviceAreas } from '@/lib/site';
import ContactDetails from '@/components/ContactDetails';
import styles from './Footer.module.css';

export default function Footer() {
  const regions = serviceAreas.map((a) => a.region).join(', ');

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div>
          <p className={styles.brand}>{site.name}</p>
          <p>Serving the Bay Area: {regions}.</p>
        </div>
        <nav aria-label="Footer">
          <ul className={styles.links}>
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <ContactDetails />
      </div>
      <p className={styles.legal}>
        &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
      </p>
    </footer>
  );
}
