import styles from '@/styles/Nav.module.css';

export default function Nav() {
  return (
    <ul className={styles.nav}>
      <li><a href="#">Work</a></li>
      <li><a href="#">Press</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  );
}
