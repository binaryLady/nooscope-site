'use client';

import { useState } from 'react';
import Background from './Background';
import Grid from './Grid';
import Logo from './Logo';
import Nav from './Nav';
import AboutDrawer from './AboutDrawer';
import TextPanel from './TextPanel';
import BooksPanel from './BooksPanel';
import styles from '@/styles/page.module.css';

export default function AppShell() {
  const [booksOpen, setBooksOpen] = useState(false);

  function toggleBooks() {
    setBooksOpen(o => !o);
  }

  return (
    <>
      <Background white={booksOpen} />
      <Grid />

      {/* Mobile layout */}
      <header className={styles.mobileHeader}>
        <Logo />
        <Nav onBooksClick={toggleBooks} booksOpen={booksOpen} />
      </header>
      <main className={styles.mobileMain}>
        {!booksOpen && <AboutDrawer />}
        {booksOpen ? <BooksPanel open /> : <TextPanel />}
      </main>

      {/* Desktop layout */}
      <div className={styles.ui}>
        <Logo />
        <Nav onBooksClick={toggleBooks} booksOpen={booksOpen} />
        <AboutDrawer hidden={booksOpen} />
        <TextPanel hidden={booksOpen} />
        <BooksPanel open={booksOpen} />
      </div>
    </>
  );
}
