'use client';

import { usePathname } from 'next/navigation';
import Background from './Background';
import Grid from './Grid';
import Logo from './Logo';
import Nav from './Nav';
import AboutDrawer from './AboutDrawer';
import styles from '@/styles/page.module.css';

export default function LayoutShell({ children }) {
  const pathname = usePathname();
  const isBooks = pathname.startsWith('/books');

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <Background white={isBooks} />
      <Grid />

      {/* Mobile layout */}
      <header className={styles.mobileHeader}>
        <Logo />
        <Nav />
      </header>
      <main id="main-content" className={styles.mobileMain}>
        {children}
      </main>

      {/* Desktop layout */}
      <div className={styles.ui} aria-label="Desktop layout">
        <header>
          <Logo />
          <Nav />
        </header>
        <AboutDrawer hidden={isBooks} />
        {children}
      </div>
    </>
  );
}
