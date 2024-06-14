// src/components/Navbar.js

import { useState } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">LYSIUS</Link>
      </div>
      <div className={styles.menuButton} onClick={toggleMenu}>
        MENÜ
      </div>
      <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
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
    </header>
  );
};

export default Navbar;
