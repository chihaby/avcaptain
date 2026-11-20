'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/lib/site';
import styles from './Nav.module.css';

export default function Nav({ onNavigate }) {
  const pathname = usePathname();

  return (
    <nav aria-label="Main">
      <ul className={styles.list}>
        {navLinks.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={styles.link}
              aria-current={pathname === href ? 'page' : undefined}
              onClick={onNavigate}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
