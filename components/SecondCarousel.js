import Image from "next/image";
import styles from "../styles/PlayPage.module.css";
import React, { useState, useEffect } from "react";

const SecondCarousel = ({ images, credits = [], onImageClick }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0) {
    return null; // Kein Rendering, wenn keine Bilder vorhanden sind
  }

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.carousel}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${styles.carouselImage} ${
              index === currentImageIndex ? styles.show : ""
            }`}
            onClick={() => onImageClick(index)}
          >
            <Image
              src={image}
              alt={`Carousel image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Credits nur anzeigen, wenn sie existieren */}
      {credits.length > 0 && credits[currentImageIndex] && (
        <div className={styles.carouselCredits}>
          {credits[currentImageIndex]}
        </div>
      )}

      <div className={styles.carouselDots}>
        {images.map((_, index) => (
          <span
            key={index}
            className={
              index === currentImageIndex
                ? styles.activeDot
                : styles.dot
            }
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default SecondCarousel;
