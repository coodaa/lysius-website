import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import styles from "../styles/Modal.module.css";
const Modal = ({ images, initialIndex, onClose }) => {
  const { t } = useTranslation("common");
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [objectFit, setObjectFit] = useState("contain");

  // Dynamisch überprüfen, ob das Bild Querformat oder Hochformat ist
  useEffect(() => {
    const img = new window.Image();
    img.src = images[currentIndex];
    img.onload = () => {
      if (img.width > img.height) {
        setObjectFit("cover"); // Querformat
      } else {
        setObjectFit("contain"); // Hochformat
      }
    };
  }, [currentIndex, images]);

  // Wischen nach links oder rechts, um das Bild zu wechseln
  const handleTouchStart = (e) => {
    const touchStartX = e.changedTouches[0].screenX;
    const touchEndX = e.changedTouches[0].screenX;

    e.currentTarget.addEventListener("touchend", () => {
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
    });
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className={styles.modalOverlay}
      onClick={onClose}
      onTouchStart={handleTouchStart}
    >
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalImageWrapper}>
          <Image
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            layout="fill"
            objectFit={objectFit}
            className={styles.modalImage}
          />
        </div>

        {/* Dots */}
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
