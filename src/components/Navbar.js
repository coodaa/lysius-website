// src/components/Navbar.js
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { getPlays } from "../lib/api";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [plays, setPlays] = useState([]);
  const [loading, setLoading] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = (e) => {
    if (
      !e.target.closest(`.${styles.nav}`) &&
      !e.target.closest(`.${styles.menuButton}`)
    ) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("mousedown", closeMenu);
    } else {
      document.removeEventListener("mousedown", closeMenu);
    }

    return () => {
      document.removeEventListener("mousedown", closeMenu);
    };
  }, [menuOpen]);

  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching plays...");
      const data = await getPlays();
      console.log("Fetched data:", data);
      setPlays(data?.data || []);
      setLoading(false);
    };
    fetchData();
  }, []);

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
          {loading ? (
            <li>Loading...</li>
          ) : (
            plays.map((play) => (
              <li key={play.id}>
                <Link href={`/plays/${play.id}`} className={styles.link}>
                  {play.attributes.Titel}
                </Link>
              </li>
            ))
          )}
        </ul>
        <ul
          className={`${styles.footerList} ${
            menuOpen ? styles.footerOpen : ""
          }`}
        >
          <li className={styles.footerItem}>
            <Link href="/mitglieder" className={styles.link}>
              MITGLIEDER
            </Link>
          </li>
          <li>
            <Link href="/agb" className={styles.link}>
              AGB
            </Link>
          </li>
          <li>
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
