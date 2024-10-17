// components/Landscape.js
import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next"; // Importiere die Übersetzungsfunktion
import styles from "../styles/LandscapeWarning.module.css"; // Styling für Landscape-Komponente

const Landscape = () => {
  const [isLandscape, setIsLandscape] = useState(false);
  const { t } = useTranslation("common"); // Benutze die Übersetzungs-Bibliothek

  useEffect(() => {
    const checkOrientation = () => {
      setIsLandscape(window.innerWidth > window.innerHeight);
    };

    checkOrientation(); // Initial überprüfen

    window.addEventListener("resize", checkOrientation);
    return () => {
      window.removeEventListener("resize", checkOrientation);
    };
  }, []);

  if (isLandscape && window.innerWidth <= 1024) {
    // Nur für mobile Geräte und Tablets
    return (
      <div className={styles.landscapeOverlay}>
        <p className={styles.message}>
          {t("landscape_warning")}{" "}
        </p>
      </div>
    );
  }

  return null;
};

export default Landscape;
