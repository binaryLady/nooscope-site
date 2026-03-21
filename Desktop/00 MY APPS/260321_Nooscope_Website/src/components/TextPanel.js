import styles from '@/styles/TextPanel.module.css';

export default function TextPanel() {
  return (
    <div className={styles.panel}>
      <div className={styles.copy}>
        <p>
          Nooscope is a visual instrument for collective intelligence.
        </p>
        <p>
          It explores the architecture of machine learning through the lens
          of critical cartography and media archaeology.
        </p>
      </div>
    </div>
  );
}
