import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { fetchGalleries } from "../lib/api";

export default function Home() {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchGalleries();
      if (data) {
        setImages(data);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Ändert das Bild alle 3 Sekunden

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={styles.container}>
      <div className={styles.overlayContainer}>
        <div className={styles.imageWrapper}>
          {images.map((imageUrl, index) => (
            <Image
              key={index}
              src={imageUrl}
              alt={`Bild ${index}`}
              className={`${styles.image} ${
                index === currentImageIndex ? styles.show : ""
              }`}
              layout="fill"
              style={{ objectFit: "cover" }}
              priority={index === currentImageIndex}
              fetchpriority={index === currentImageIndex ? "high" : "low"}
            />
          ))}
        </div>
        <h1 className={styles.title}>Lysius</h1>
      </div>
    </div>
  );
}
