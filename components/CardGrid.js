import Card from '@/components/Card';
import styles from './CardGrid.module.css';

export default function CardGrid({ items }) {
  return (
    <ul className={styles.grid}>
      {items.map((item) => (
        <li key={item.title}>
          <Card title={item.title} text={item.text} />
        </li>
      ))}
    </ul>
  );
}
