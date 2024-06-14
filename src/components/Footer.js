// src/components/Footer.js

import Link from "next/link";
import styles from "../styles/Footer.module.css"; // Korrigierter Pfad

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <Link href="/mitglieder" className={styles.link}>
          MITGLIEDER
        </Link>
        <Link href="/agb" className={styles.link}>
          AGB
        </Link>
        <Link href="/impressum" className={styles.link}>
          IMPRESSUM
        </Link>
        <Link href="/de-en" className={styles.link}>
          DE/EN
        </Link>
      </nav>
      <p className={styles.copy}>&copy; 2024 Lysius. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
