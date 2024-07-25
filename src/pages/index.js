import { useState, useEffect } from "react";
import { fetchImages } from "../lib/api";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const HomePage = () => {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchImages();
      setImages(data);
    };
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
          {images.map((image, index) => (
            <Image
              key={index}
              src={image.url}
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
    </div>
  );
};

export default HomePage;
