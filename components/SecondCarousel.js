import Image from "next/image";
import styles from "../styles/PlayPage.module.css";
import React, { useState, useEffect, useMemo } from "react";

const SecondCarousel = ({
  images,
  credits = [],
  credits_de = [],
  credits_en = [],
  language = "de",
  onImageClick,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Bestimmen der angezeigten Credits basierend auf der aktuellen Sprache
  const currentCredits = useMemo(() => {
    switch (language) {
      case "en":
        return credits_en;
      case "de":
        return credits_de;
      default:
        return credits;
    }
  }, [credits, credits_de, credits_en, language]);

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
              objectFit="contain"
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

      {currentCredits.length > 0 && (
        <div
          className={`${styles.carouselCredits} ${
            currentCredits[currentImageIndex] ? styles.visible : ""
          }`}
        >
          {currentCredits[currentImageIndex]}
        </div>
      )}
    </div>
  );
};

export default SecondCarousel;
