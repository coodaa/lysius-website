import React from "react";
import { useTranslation } from "next-i18next";
import styles from "../styles/PlayPage.module.css";

const PlayDetailsList = ({ play }) => {
  const { t, i18n } = useTranslation("common");

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

  const getText = (key) => {
    // Default to German text if no English text is available
    return i18n.language === "en" && play[`${key}_en`]
      ? play[`${key}_en`]
      : play[key];
  };

  return (
    <div className={styles.details}>
      {details.map(
        (detail) =>
          play[detail.key] && (
            <React.Fragment key={detail.key}>
              <p className={styles.label}>{t(detail.label)}</p>
              <p className={styles.value}>{getText(detail.key)}</p>
            </React.Fragment>
          )
      )}
    </div>
  );
};

export default PlayDetailsList;
