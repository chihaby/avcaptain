import styles from './LogoMark.module.css';

export default function LogoMark() {
  return (
    <svg className={styles.mark} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <rect width="64" height="64" rx="14" fill="#0b2545" />
      <rect x="14" y="30" width="6" height="12" rx="3" fill="#f5a524" />
      <rect x="25" y="20" width="6" height="32" rx="3" fill="#f5a524" />
      <rect x="36" y="14" width="6" height="44" rx="3" fill="#f5a524" />
      <rect x="47" y="24" width="6" height="24" rx="3" fill="#f5a524" />
    </svg>
  );
}