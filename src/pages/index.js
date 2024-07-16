import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.overlayContainer}>
        <div className={styles.imageWrapper}>
          <Image
            src="/img/michael_donath_86.jpg"
            alt="Michael Donath"
            className={styles.image}
            fill
            priority
          />
        </div>
        <h1 className={styles.title}>Lysius</h1>
      </div>
    </div>
  );
}
