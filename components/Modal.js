import React, { useState, useEffect } from "react";
import Image from "next/image"; // Das ist die Next.js-Komponente
import { useTranslation } from "next-i18next";
import styles from "../styles/Modal.module.css";

const Modal = ({ images, credits = [], initialIndex, onClose }) => {
  const { t } = useTranslation("common");
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [objectFit, setObjectFit] = useState("contain");

  // Dynamisch überprüfen, ob das Bild Querformat oder Hochformat ist
  useEffect(() => {
    const img = new window.Image(); // Verwende das native JavaScript-Image-Objekt, nicht das Next.js Image
    img.src = images[currentIndex];
    img.onload = () => {
      if (img.width > img.height) {
        setObjectFit("cover"); // Querformat
      } else {
        setObjectFit("contain"); // Hochformat
      }
    };
  }, [currentIndex, images]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.whiteBar}></div>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.closeButtonContainer}>
          <button className={styles.closeButton} onClick={onClose}>
            {t("close")}
          </button>
        </div>
        <button className={styles.prevButton} onClick={handlePrev}>
          {"<"}
        </button>
        <div className={styles.modalImageWrapper}>
          <Image
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            layout="fill"
            objectFit={objectFit} // Dynamisches objectFit je nach Bildformat
            className={styles.modalImage}
          />
        </div>
        <button className={styles.nextButton} onClick={handleNext}>
          {">"}
        </button>

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

        {/* Bild-Credits */}
        {credits[currentIndex] && (
          <div className={styles.imageCredit}>{credits[currentIndex]}</div>
        )}
      </div>
    </div>
  );
};

export default Modal;
