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
        position1_name: true, // Hinzufügen der Namensfelder
        position1_en: true,
        position1_name_en: true, // Hinzufügen der Namensfelder
        position2: true,
        position2_name: true, // Hinzufügen der Namensfelder
        position2_en: true,
        position2_name_en: true, // Hinzufügen der Namensfelder
        position3: true,
        position3_name: true, // Hinzufügen der Namensfelder
        position3_en: true,
        position3_name_en: true, // Hinzufügen der Namensfelder
        position4: true,
        position4_name: true, // Hinzufügen der Namensfelder
        position4_en: true,
        position4_name_en: true, // Hinzufügen der Namensfelder
        position5: true,
        position5_name: true, // Hinzufügen der Namensfelder
        position5_en: true,
        position5_name_en: true, // Hinzufügen der Namensfelder
        position6: true,
        position6_name: true, // Hinzufügen der Namensfelder
        position6_en: true,
        position6_name_en: true, // Hinzufügen der Namensfelder
        position7: true,
        position7_name: true, // Hinzufügen der Namensfelder
        position7_en: true,
        position7_name_en: true, // Hinzufügen der Namensfelder
        position8: true,
        position8_name: true, // Hinzufügen der Namensfelder
        position8_en: true,
        position8_name_en: true, // Hinzufügen der Namensfelder
        position9: true,
        position9_name: true, // Hinzufügen der Namensfelder
        position9_en: true,
        position9_name_en: true, // Hinzufügen der Namensfelder
        position10: true,
        position10_name: true, // Hinzufügen der Namensfelder
        position10_en: true,
        position10_name_en: true, // Hinzufügen der Namensfelder
        position11: true,
        position11_name: true, // Hinzufügen der Namensfelder
        position11_en: true,
        position11_name_en: true, // Hinzufügen der Namensfelder
        position12: true,
        position12_name: true, // Hinzufügen der Namensfelder
        position12_en: true,
        position12_name_en: true, // Hinzufügen der Namensfelder
        position13: true,
        position13_name: true, // Hinzufügen der Namensfelder
        position13_en: true,
        position13_name_en: true, // Hinzufügen der Namensfelder
        position14: true,
        position14_name: true, // Hinzufügen der Namensfelder
        position14_en: true,
        position14_name_en: true, // Hinzufügen der Namensfelder
        position15: true,
        position15_name: true, // Hinzufügen der Namensfelder
        position15_en: true,
        position15_name_en: true, // Hinzufügen der Namensfelder
        position16: true,
        position16_name: true, // Hinzufügen der Namensfelder
        position16_en: true,
        position16_name_en: true, // Hinzufügen der Namensfelder
        position17: true,
        position17_name: true, // Hinzufügen der Namensfelder
        position17_en: true,
        position17_name_en: true, // Hinzufügen der Namensfelder
        position18: true,
        position18_name: true, // Hinzufügen der Namensfelder
        position18_en: true,
        position18_name_en: true, // Hinzufügen der Namensfelder
        position19: true,
        position19_name: true, // Hinzufügen der Namensfelder
        position19_en: true,
        position19_name_en: true, // Hinzufügen der Namensfelder
        position20: true,
        position20_name: true, // Hinzufügen der Namensfelder
        position20_en: true,
        position20_name_en: true, // Hinzufügen der Namensfelder
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
        imageUrl: true,
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
        imageCredit1: true,
        imageCredit2: true,
        imageCredit3: true,
        imageCredit4: true,
        imageCredit5: true,
        imageCredit6: true,
        imageCredit7: true,
        imageCredit8: true,
        imageCredit9: true,
        imageCredit10: true,
        mobileImageUrl1: true,
        mobileImageUrl2: true,
        mobileImageUrl3: true,
        mobileImageUrl4: true,
        mobileImageUrl5: true,
        mobileImageCredit1: true,
        mobileImageCredit2: true,
        mobileImageCredit3: true,
        mobileImageCredit4: true,
        mobileImageCredit5: true,
        videoUrl1: true,
        videoCredit1: true,
        logo1: true,
        logo2: true,
        logo3: true,
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
