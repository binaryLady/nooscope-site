'use client';

import { useState } from 'react';
import styles from '@/styles/AboutDrawer.module.css';

export default function AboutDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <button
        className={styles.trigger}
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        type="button"
      >
        About
      </button>

      <div
        className={`${styles.overlay} ${open ? styles.open : ''}`}
        aria-hidden={!open}
      >
        <div className={styles.copy}>
          <p>
            Nooscope is a research project by Matteo Pasquinelli and Vladan
            Joler exploring the history and political economy of artificial
            intelligence.
          </p>
          <p>
            Through a visual atlas, it maps the hidden labour, knowledge, and
            infrastructure that underpin machine learning systems.
          </p>
          <p>
            The project takes its name from Vladimir Vernadsky&rsquo;s concept
            of the noosphere — the domain of human thought as a geological
            force on Earth.
          </p>
        </div>
      </div>
    </div>
  );
}
