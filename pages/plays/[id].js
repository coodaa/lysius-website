import React, { useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import PlayDetails from "../../components/PlayDetails";
import prisma from "../../lib/prisma";

const PlayPage = ({ play }) => {
  const [currentTitle, setCurrentTitle] = useState("");
  return <PlayDetails play={play} setCurrentTitle={setCurrentTitle} />;
};

export async function getServerSideProps(context) {
  const { id } = context.params;

  if (isNaN(parseInt(id, 10))) {
    return {
      notFound: true,
    };
  }

  try {
    const play = await prisma.play.findUnique({
      where: { id: parseInt(id, 10) },
      select: {
        id: true,
        title: true,
        title_en: true,
        subtitle1: true,
        subtitle1_en: true,
        subtitle2: true,
        subtitle2_en: true,
        subtitle3: true,
        subtitle3_en: true,
        position1: true,
        position1_name: true,
        position1_en: true,
        position1_name_en: true,
        position2: true,
        position2_name: true,
        position2_en: true,
        position2_name_en: true,
        position3: true,
        position3_name: true,
        position3_en: true,
        position3_name_en: true,
        position4: true,
        position4_name: true,
        position4_en: true,
        position4_name_en: true,
        position5: true,
        position5_name: true,
        position5_en: true,
        position5_name_en: true,
        position6: true,
        position6_name: true,
        position6_en: true,
        position6_name_en: true,
        position7: true,
        position7_name: true,
        position7_en: true,
        position7_name_en: true,
        position8: true,
        position8_name: true,
        position8_en: true,
        position8_name_en: true,
        position9: true,
        position9_name: true,
        position9_en: true,
        position9_name_en: true,
        position10: true,
        position10_name: true,
        position10_en: true,
        position10_name_en: true,
        position11: true,
        position11_name: true,
        position11_en: true,
        position11_name_en: true,
        position12: true,
        position12_name: true,
        position12_en: true,
        position12_name_en: true,
        position13: true,
        position13_name: true,
        position13_en: true,
        position13_name_en: true,
        position14: true,
        position14_name: true,
        position14_en: true,
        position14_name_en: true,
        position15: true,
        position15_name: true,
        position15_en: true,
        position15_name_en: true,
        position16: true,
        position16_name: true,
        position16_en: true,
        position16_name_en: true,
        position17: true,
        position17_name: true,
        position17_en: true,
        position17_name_en: true,
        position18: true,
        position18_name: true,
        position18_en: true,
        position18_name_en: true,
        position19: true,
        position19_name: true,
        position19_en: true,
        position19_name_en: true,
        position20: true,
        position20_name: true,
        position20_en: true,
        position20_name_en: true,
        position21: true,
        position21_name: true,
        position21_en: true,
        position21_name_en: true,
        position22: true,
        position22_name: true,
        position22_en: true,
        position22_name_en: true,
        position23: true,
        position23_name: true,
        position23_en: true,
        position23_name_en: true,
        position24: true,
        position24_name: true,
        position24_en: true,
        position24_name_en: true,
        position25: true,
        position25_name: true,
        position25_en: true,
        position25_name_en: true,
        position26: true,
        position26_name: true,
        position26_en: true,
        position26_name_en: true,
        position27: true,
        position27_name: true,
        position27_en: true,
        position27_name_en: true,
        position28: true,
        position28_name: true,
        position28_en: true,
        position28_name_en: true,
        position29: true,
        position29_name: true,
        position29_en: true,
        position29_name_en: true,
        position30: true,
        position30_name: true,
        position30_en: true,
        position30_name_en: true,
        videoCredit1_de: true,
        videoCredit1_en: true,
        logo1: true,
        logo2: true,
        logo3: true,
        logo4: true,
        logo5: true,
        logo6: true,
      },
    });

    if (!play) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        play,
        ...(await serverSideTranslations(context.locale, ["common"])),
      },
    };
  } catch (error) {
    console.error("Error fetching play data:", error.message);
    return {
      props: {
        error: "Error fetching play data",
      },
    };
  }
}

export default PlayPage;
