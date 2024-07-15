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
        {menuOpen ? "CLOSE" : "MENU"}
      </div>
      <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
        <ul className={styles.navList}>
          <li>
            <Link href="/mitglieder" className={styles.link}>
              Die Maßnahme
            </Link>
          </li>
          <li>
            <Link href="/agb" className={styles.link}>
              Высшая мера / Höchstmaß
            </Link>
          </li>
          <li>
            <Link href="/impressum" className={styles.link}>
              Höchstmaß / Pfad des Oktober
            </Link>
          </li>
          <li>
            <Link href="/de-en" className={styles.link}>
              Syntax in Space
            </Link>
          </li>
        </ul>
        <ul className={`${styles.footerList} ${menuOpen ? styles.footerOpen : ""}`}>
          <li className={styles.footerItem}>
            <Link href="/mitglieder" className={styles.link}>
              MITGLIEDER
            </Link>
          </li>
          <li className={styles.footerItem}>
            <Link href="/agb" className={styles.link}>
              AGB
            </Link>
          </li>
          <li className={styles.footerItem}>
            <Link href="/impressum" className={styles.link}>
              IMPRESSUM
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
