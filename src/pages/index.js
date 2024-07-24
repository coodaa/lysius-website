import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { fetchGalleries } from "../lib/api";

export default function Home() {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [galleries, setGalleries] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchGalleries();
      if (data) {
        setGalleries(data);
        // Extrahiere die Bild-URLs, um die vorhandene Slideshow zu unterstützen
        const allImages = data.flatMap((gallery) => gallery.images);
        setImages(allImages);
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
              objectFit="cover"
              priority={index === currentImageIndex}
            />
          ))}
        </div>
        <h1 className={styles.title}>Lysius</h1>
      </div>

      <div className={styles.galleries}>
        {galleries.map((gallery) => (
          <div key={gallery.id} className={styles.gallery}>
            <h2>{gallery.name}</h2>
            <div className={styles.imageWrapper}>
              {gallery.images.map((imageUrl, index) => (
                <Image
                  key={index}
                  src={imageUrl}
                  alt={`Bild ${index}`}
                  className={styles.image}
                  layout="fill"
                  objectFit="cover"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
