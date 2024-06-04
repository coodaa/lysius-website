// src/pages/index.js
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.menuItem}>A</div>
        <div className={styles.menuItem}>B</div>
        <div className={styles.menuItem}>C</div>
        <div className={styles.menuItem}>D</div>
        <div className={styles.menuItem}>E</div>
        <div className={styles.menuItem}>F</div>
      </nav>
      <div className={styles.content}>
        <img src="/static/chor.jpg" alt="Background" className={styles.image} />
        <h1 className={styles.title}>Lysius</h1>
      </div>
    </div>
  );
}
