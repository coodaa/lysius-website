import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  const imageUrl = 'https://bohupjvskzxpapqonxbc.supabase.co/storage/v1/object/public/public-images/michael_donath_86.jpg';

  return (
    <div className={styles.container}>
      <div className={styles.overlayContainer}>
        <div className={styles.imageWrapper}>
          <Image
            src={imageUrl}
            alt="Michael Donath"
            className={styles.image}
            layout="fill"
          />
        </div>
        <h1 className={styles.title}>Lysius</h1>
      </div>
    </div>
  );
}
