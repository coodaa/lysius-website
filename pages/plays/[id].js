import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import PlayDetails from "../../components/PlayDetails";
import prisma from "../../lib/prisma";

const PlayPage = ({ play, setCurrentTitle }) => {
  return <PlayDetails play={play} setCurrentTitle={setCurrentTitle} />;
};

export async function getServerSideProps(context) {
  const { id } = context.params;

  try {
    const play = await prisma.play.findUnique({
      where: { id: parseInt(id) },
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
        descriptionleft1: true,
        descriptionleft1_en: true,
        descriptionleft2: true,
        descriptionleft2_en: true,
        descriptionleft3: true,
        descriptionleft3_en: true,
        descriptionleft4: true,
        descriptionleft4_en: true,
        textright1: true,
        textright1_en: true,
        textright2: true,
        textright2_en: true,
        textright3: true,
        textright3_en: true,
        textright4: true,
        textright4_en: true,
        topImage1: true,
        topImage2: true,
        topImage3: true,
        topImage4: true,
        topImage5: true,
        topImage6: true,
        imageUrl1: true,
        imageUrl2: true,
        imageUrl3: true,
        imageUrl4: true,
        imageUrl5: true,
        imageUrl6: true,
        imageUrl7: true,
        imageUrl8: true,
        imageUrl9: true,
        imageUrl10: true,
        imageCredit1_de: true,
        imageCredit1_en: true,
        imageCredit2_de: true,
        imageCredit2_en: true,
        imageCredit3_de: true,
        imageCredit3_en: true,
        imageCredit4_de: true,
        imageCredit4_en: true,
        imageCredit5_de: true,
        imageCredit5_en: true,
        imageCredit6_de: true,
        imageCredit6_en: true,
        imageCredit7_de: true,
        imageCredit7_en: true,
        imageCredit8_de: true,
        imageCredit8_en: true,
        imageCredit9_de: true,
        imageCredit9_en: true,
        imageCredit10_de: true,
        imageCredit10_en: true,
        topMobileImage1: true,
        topMobileImage2: true,
        topMobileImage3: true,
        topMobileImage4: true,
        topMobileImage5: true,
        topMobileImage6: true,
        videoUrl1: true,
        videoCredit1: true,
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
    console.error("Error fetching play:", error);
    return {
      props: {
        error: "Error fetching play",
      },
    };
  }
}

export default PlayPage;
