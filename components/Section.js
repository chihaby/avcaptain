import styles from './Section.module.css';

// tone: 'default' | 'alt' (white) | 'navy' (dark band)
export default function Section({ id, title, tone = 'default', children }) {
  return (
    <section
      id={id}
      className={`${styles.section} ${styles[tone]}`}
      aria-labelledby={title ? `${id}-title` : undefined}
    >
      <div className={styles.inner}>
        {title && <h2 id={`${id}-title`}>{title}</h2>}
        {children}
      </div>
    </section>
  );
}
