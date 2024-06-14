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
          Die Maßnahme
        </Link>
        <Link href="/agb" className={styles.link}>
          Высшая мера / Höchstmaß{" "}
        </Link>
        <Link href="/impressum" className={styles.link}>
          Höchstmaß / Pfad des Oktober
        </Link>
        <Link href="/de-en" className={styles.link}>
          Syntax in Space
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
