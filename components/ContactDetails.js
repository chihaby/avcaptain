import { site } from '@/lib/site';
import styles from './ContactDetails.module.css';

export default function ContactDetails() {
  return (
    <ul className={styles.list}>
      <li>
        <span className={styles.label}>Call or text</span>
        <a href={site.phoneHref}>{site.phone}</a>
      </li>
      <li>
        <span className={styles.label}>Email</span>
        <a href={`mailto:${site.email}`}>{site.email}</a>
      </li>
      <li>
        <span className={styles.label}>Response time</span>
        {site.replyTime}
      </li>
    </ul>
  );
}
