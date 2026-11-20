import styles from './MenuButton.module.css';

export default function MenuButton({ open, onToggle, controls }) {
  return (
    <button
      type="button"
      className={styles.button}
      aria-expanded={open}
      aria-controls={controls}
      onClick={onToggle}
    >
      <span className={styles.icon} aria-hidden="true" />
      {open ? 'Close' : 'Menu'}
    </button>
  );
}
