import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/PlayPage.module.css";

const SecondCarousel = ({
  images,
  credits,
  initialIndex = 0,
  onImageClick,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(initialIndex);

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

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
              objectFit="contain"
              priority
            />
          </div>
        ))}
      </div>
      {/* Credits and dots are now outside the carousel */}
      <div className={styles.carouselDots}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              index === currentImageIndex ? styles.activeDot : ""
            }`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
      {credits[currentImageIndex] && (
        <div className={styles.carouselCredits}>
          {credits[currentImageIndex]}
        </div>
      )}
    </div>
  );
};

export default SecondCarousel;
