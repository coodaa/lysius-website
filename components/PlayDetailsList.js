import React, { useEffect } from "react";
import { useTranslation } from "next-i18next";
import styles from "../styles/PlayPage.module.css";

const PlayDetailsList = ({ play }) => {
  const { t, i18n } = useTranslation("common");

  useEffect(() => {
    console.log("Position 21:", play.position21, "Name:", play.position21_name);
    console.log("Position 22:", play.position22, "Name:", play.position22_name);
    console.log("Position 23:", play.position23, "Name:", play.position23_name);
  }, [play]);

  const positions = [
    { key: "position1", nameKey: "position1_name" },
    { key: "position2", nameKey: "position2_name" },
    { key: "position3", nameKey: "position3_name" },
    { key: "position4", nameKey: "position4_name" },
    { key: "position5", nameKey: "position5_name" },
    { key: "position6", nameKey: "position6_name" },
    { key: "position7", nameKey: "position7_name" },
    { key: "position8", nameKey: "position8_name" },
    { key: "position9", nameKey: "position9_name" },
    { key: "position10", nameKey: "position10_name" },
    { key: "position11", nameKey: "position11_name" },
    { key: "position12", nameKey: "position12_name" },
    { key: "position13", nameKey: "position13_name" },
    { key: "position14", nameKey: "position14_name" },
    { key: "position15", nameKey: "position15_name" },
    { key: "position16", nameKey: "position16_name" },
    { key: "position17", nameKey: "position17_name" },
    { key: "position18", nameKey: "position18_name" },
    { key: "position19", nameKey: "position19_name" },
    { key: "position20", nameKey: "position20_name" },
    { key: "position21", nameKey: "position21_name" },
    { key: "position22", nameKey: "position22_name" },
    { key: "position23", nameKey: "position23_name" },
    { key: "position24", nameKey: "position24_name" },
    { key: "position25", nameKey: "position25_name" },
    { key: "position26", nameKey: "position26_name" },
    { key: "position27", nameKey: "position27_name" },
    { key: "position28", nameKey: "position28_name" },
    { key: "position29", nameKey: "position29_name" },
    { key: "position30", nameKey: "position30_name" },
  ];

  const getText = (key) => {
    if (!play) {
      console.error(`Play data is missing for key: ${key}`);
      return "";
    }

    // Gibt die englische Version zurück, falls vorhanden, ansonsten die lokale
    const text =
      i18n.language === "en" && play[`${key}_en`]
        ? play[`${key}_en`]
        : play[key] || "";

    if (!text) {
      console.warn(`Missing value for key: ${key}`);
    }

    return text;
  };

  return (
    <div className={styles.details}>
      {positions.map((position) => {
        const positionText = getText(position.key);
        const positionName = getText(position.nameKey);

        // Ausgabe in der Konsole zur Überprüfung der Inhalte
        console.log(`Position: ${positionText}, Name: ${positionName}`);

        if (positionText || positionName) {
          return (
            <React.Fragment key={position.key}>
              <p className={styles.label}>{positionText}</p>
              <p className={styles.value}>{positionName || t("unknown")}</p>
            </React.Fragment>
          );
        }
        return null; // Keine Anzeige, wenn weder Text noch Name existieren
      })}
    </div>
  );
};

export default PlayDetailsList;
