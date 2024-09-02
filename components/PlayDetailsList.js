import React from "react";
import { useTranslation } from "next-i18next";
import styles from "../styles/PlayPage.module.css";

const PlayDetailsList = ({ play }) => {
  const { t, i18n } = useTranslation("common");

  console.log("i18n:", i18n); // Überprüfe, ob i18n korrekt geladen wurde
  console.log("Current language:", i18n?.language); // Überprüfe die aktuelle Sprache
  console.log("Play data:", play); // Überprüfe die Daten, die übergeben werden

  const details = [
    { key: "productionDirector", label: "production_director" },
    { key: "artisticSupervision", label: "artistic_supervision" },
    { key: "musicalDirector", label: "musical_director" },
    { key: "regie", label: "regie" },
    { key: "produktion", label: "produktion" },
    { key: "kuenstlerischeBegleitung", label: "kuenstlerische_begleitung" },
    { key: "musikalischeLeitung", label: "musikalische_leitung" },
    { key: "mit", label: "mit" },
    { key: "sopranistin", label: "sopranistin" },
    { key: "sopranist", label: "sopranist" },
    { key: "bass", label: "bass" },
    { key: "chor", label: "chor" },
    { key: "orchester", label: "orchester" },
    { key: "foerderung", label: "foerderung" },
  ];

  return (
    <div className={styles.details}>
      {details.map((detail) => {
        // Hole den Text basierend auf der aktuellen Sprache
        const key = detail.key + (i18n?.language === "en" ? "_en" : "");
        const text = t(detail.label);
        console.log(`Text for ${detail.key}: ${text}`);

        return (
          play[detail.key] && (
            <React.Fragment key={detail.key}>
              <p className={styles.label}>{text}</p>
              <p className={styles.value}>{play[detail.key]}</p>
            </React.Fragment>
          )
        );
      })}
    </div>
  );
};

export default PlayDetailsList;
