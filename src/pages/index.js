import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.overlayContainer}>
        <img
          src="/img/michael_donath_86.jpg"
          alt="Michael Donath"
          className={styles.image}
        />
        <h1 className={styles.title}>Lysius</h1>
      </div>
    </div>
  );
}
