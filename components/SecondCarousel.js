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
      {/* onClick-Handler auf dem sichtbaren Bild */}
      <div
        className={styles.carousel}
        onClick={() => onImageClick(currentImageIndex)}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`${styles.carouselImage} ${
              index === currentImageIndex ? styles.show : ""
            }`}
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

      <div className={styles.carouselDots}>
        {images.map((_, index) => (
          <span
            key={index}
            className={
              index === currentImageIndex ? styles.activeDot : styles.dot
            }
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>

      {credits.length > 0 && (
        <div
          className={`${styles.carouselCredits} ${
            credits[currentImageIndex] ? styles.visible : ""
          }`}
        >
          {credits[currentImageIndex]}
        </div>
      )}
    </div>
  );
};

export default SecondCarousel;
