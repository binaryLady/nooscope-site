import Background from '@/components/Background';
import Grid from '@/components/Grid';
import Logo from '@/components/Logo';
import Nav from '@/components/Nav';
import TextPanel from '@/components/TextPanel';
import styles from '@/styles/page.module.css';

export default function Home() {
  return (
    <>
      <Background />
      <Grid />

      {/* Mobile layout */}
      <header className={styles.mobileHeader}>
        <Logo />
        <Nav />
      </header>
      <main className={styles.mobileMain}>
        <TextPanel />
      </main>

      {/* Desktop layout */}
      <div className={styles.ui}>
        <Logo />
        <Nav />
        <TextPanel />
      </div>
    </>
  );
}
