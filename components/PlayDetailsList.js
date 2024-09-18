import React from "react";
import { useTranslation } from "next-i18next";
import styles from "../styles/PlayPage.module.css";

const PlayDetailsList = ({ play }) => {
  const { t, i18n } = useTranslation("common");

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
  ];

  const getText = (key) => {
    return i18n.language === "en" && play[`${key}_en`]
      ? play[`${key}_en`]
      : play[key] || "";
  };

  return (
    <div className={styles.details}>
      {positions.map((position) => {
        const positionText = getText(position.key);
        const positionName = getText(position.nameKey);
        if (positionText || positionName) {
          return (
            <React.Fragment key={position.key}>
              <p className={styles.label}>{positionText}</p>
              <p className={styles.value}>{positionName || t("unknown")}</p>
            </React.Fragment>
          );
        }
        return null;
      })}
    </div>
  );
};

export default PlayDetailsList;
