import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/PlayPage.module.css";

const SecondCarousel = ({
  images,
  credits = [],
  credits_de = [],
  credits_en = [],
  language = "de",
  onImageClick,
}) => {
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

  // Wähle die richtigen Credits basierend auf der Sprache aus
  const currentCredits =
    language === "en" ? credits_en : language === "de" ? credits_de : credits;

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
