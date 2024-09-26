import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import styles from "../styles/Modal.module.css";

const Modal = ({ images, initialIndex, onClose }) => {
  const { t } = useTranslation("common");
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // Aktualisiere currentIndex, wenn initialIndex sich ändert
  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  // Bilder vorab laden
  useEffect(() => {
    images.forEach((imageSrc) => {
      const img = new window.Image();
      img.src = imageSrc;
    });
  }, [images]);

  // Swipe-Handling für Touch-Geräte
  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.changedTouches[0].screenX;
  };

  const handleTouchMove = (e) => {
    touchEndX = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      // Swipe nach links (nächstes Bild)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
    if (touchStartX - touchEndX < -50) {
      // Swipe nach rechts (vorheriges Bild)
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    }
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className={styles.modalOverlay}
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {/* Schließen-Button */}
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>

        <div className={styles.modalImageWrapper}>
          <Image
            src={images[currentIndex]}
            alt={`Bild ${currentIndex + 1}`}
            layout="fill"
            objectFit="contain" // Fest auf "contain" setzen
            className={styles.modalImage}
          />
        </div>

        {/* Navigationspunkte */}
        <div className={styles.carouselDots}>
          {images.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${
                index === currentIndex ? styles.activeDot : ""
              }`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
