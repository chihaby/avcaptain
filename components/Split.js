import styles from './Split.module.css';

// Two-column layout that stacks on small screens.
export default function Split({ main, aside }) {
  return (
    <div className={styles.split}>
      <div>{main}</div>
      <aside className={styles.aside}>{aside}</aside>
    </div>
  );
}
