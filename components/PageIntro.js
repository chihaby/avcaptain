import styles from './PageIntro.module.css';

export default function PageIntro({ title, lead }) {
  return (
    <header className={styles.intro}>
      <div className={styles.inner}>
        <h1>{title}</h1>
        {lead && <p className={styles.lead}>{lead}</p>}
      </div>
    </header>
  );
}
