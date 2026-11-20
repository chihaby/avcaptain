import { serviceAreas } from '@/lib/site';
import styles from './ServiceArea.module.css';

export default function ServiceArea() {
  return (
    <ul className={styles.grid}>
      {serviceAreas.map(({ region, towns }) => (
        <li key={region} className={styles.area}>
          <h3>{region}</h3>
          <p>{towns.join(', ')}</p>
        </li>
      ))}
    </ul>
  );
}
