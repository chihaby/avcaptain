'use client';

import { useState } from 'react';
import Link from 'next/link';
import { site } from '@/lib/site';
import Nav from '@/components/Nav';
import Button from '@/components/Button';
import MenuButton from '@/components/MenuButton';
import LogoMark from '@/components/LogoMark';
import styles from './Header.module.css';

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} onClick={close}>
        <LogoMark />
          {site.name}
        </Link>
        <MenuButton open={open} onToggle={() => setOpen(!open)} controls="site-menu" />
        <div id="site-menu" className={styles.menu} data-open={open}>
          <Nav onNavigate={close} />
          <Button href="/contact#schedule" onClick={close}>
            Schedule a Call
          </Button>
        </div>
      </div>
    </header>
  );
}
