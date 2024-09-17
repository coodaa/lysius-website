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

    // Neue Begriffe
    { key: "conductorFemale", label: "conductor_female" },
    { key: "conductorMale", label: "conductor_male" },
    { key: "choirDirection", label: "choir_direction" },
    { key: "choirRehearsal", label: "choir_rehearsal" },
    { key: "piano", label: "piano" },
    { key: "soloists", label: "soloists" },
    { key: "soloistFemale", label: "soloist_female" },
    { key: "soloistMale", label: "soloist_male" },
    { key: "photography", label: "photography" },
    { key: "translation", label: "translation" },
    { key: "postproduction", label: "postproduction" },
    { key: "graphics", label: "graphics" },
    { key: "dramaturgy", label: "dramaturgy" },
    { key: "choreography", label: "choreography" },
    { key: "setDesign", label: "set_design" },
    { key: "costume", label: "costume" },
    { key: "assistance", label: "assistance" },
    { key: "mask", label: "mask" },
    { key: "additionalSupport", label: "additional_support" },
    { key: "trailer", label: "trailer" },
    { key: "designDirection", label: "design_direction" },
    { key: "coding", label: "coding" },
    { key: "logo", label: "logo" },
    {
      key: "productionManagementFinances",
      label: "production_management_finances",
    },
    {
      key: "productionManagementLogistics",
      label: "production_management_logistics",
    },
    {
      key: "artisticProductionManagement",
      label: "artistic_production_management",
    },
    { key: "patronage", label: "patronage" },
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
