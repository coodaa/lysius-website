import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">LYSIUS</Link>
      </div>
      <nav className={styles.nav}>
        <Link href="/mitglieder">MITGLIEDER</Link>
        <Link href="/agb">AGB</Link>
        <Link href="/impressum">IMPRESSUM</Link>
        <Link href="/de-en">DE/EN</Link>
      </nav>
    </header>
  );
};

export default Navbar;
