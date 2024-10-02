import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import styles from "../styles/PlayPage.module.css";

const SecondCarousel = ({
  images,
  credits = [], // Allgemeine Credits, immer anzeigen
  credits_de = [], // Deutsche Credits
  credits_en = [], // Englische Credits
  language = "de", // Sprache, standardmäßig "de"
  onImageClick,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Bestimmen der angezeigten Credits basierend auf der aktuellen Sprache
  const currentCredits = useMemo(() => {
    switch (language) {
      case "en":
        return credits.map((credit, index) => {
          const enCredit = credits_en[index];
          // Zeigt nur zusätzliche englische Credits an, wenn sie vorhanden sind und sich vom allgemeinen Credit unterscheiden
          return enCredit && enCredit !== credit
            ? `${credit}\n${enCredit}`
            : credit;
        });
      case "de":
        return credits.map((credit, index) => {
          const deCredit = credits_de[index];
          // Zeigt nur zusätzliche deutsche Credits an, wenn sie vorhanden sind und sich vom allgemeinen Credit unterscheiden
          return deCredit && deCredit !== credit
            ? `${credit}\n${deCredit}`
            : credit;
        });
      default:
        return credits;
    }
  }, [credits, credits_de, credits_en, language]);

  // Konsolen-Logs zur Überprüfung
  useEffect(() => {
    console.log("Sprache:", language);
    console.log("All Credits:", credits);
    console.log("DE Credits:", credits_de);
    console.log("EN Credits:", credits_en);
    console.log("Aktuelle Credits:", currentCredits);
  }, [currentCredits, language, credits, credits_de, credits_en]);

  // Automatischer Wechsel des Bildes alle 7 Sekunden
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [images]);

  // Kein Rendering, wenn keine Bilder vorhanden sind
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className={styles.carouselWrapper}>
      {/* Bild-Anzeige */}
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

      {/* Navigationspunkte */}
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

      {/* Credits anzeigen, wenn sie vorhanden sind */}
      {currentCredits.length > 0 && currentCredits[currentImageIndex] && (
        <div className={styles.carouselCredits}>
          {/* Hier die Credits in separate Zeilen aufteilen */}
          {currentCredits[currentImageIndex]
            .split("\n")
            .map((credit, index) => (
              <div key={index} className={styles.creditLine}>
                {credit}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default SecondCarousel;
