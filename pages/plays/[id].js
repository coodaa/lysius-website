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
      // Exclude binary fields like `image` to avoid serialization issues
      select: {
        id: true,
        title: true,
        title_en: true,
        subtitle: true,
        subtitle_en: true,
        productionDirector: true,
        productionDirector_en: true,
        artisticSupervision: true,
        artisticSupervision_en: true,
        musicalDirector: true,
        musicalDirector_en: true,
        regie: true,
        regie_en: true,
        produktion: true,
        produktion_en: true,
        kuenstlerischeBegleitung: true,
        kuenstlerischeBegleitung_en: true,
        musikalischeLeitung: true,
        musikalischeLeitung_en: true,
        mit: true,
        mit_en: true,
        sopranistin: true,
        sopranistin_en: true,
        sopranist: true,
        sopranist_en: true,
        bass: true,
        bass_en: true,
        chor: true,
        chor_en: true,
        orchester: true,
        orchester_en: true,
        foerderung: true,
        foerderung_en: true,
        mainDescription: true,
        mainDescription_en: true,
        additionalText1: true,
        additionalText1_en: true,
        additionalText2: true,
        additionalText2_en: true,
        additionalText3: true,
        additionalText3_en: true,
        additionalText4: true,
        additionalText4_en: true,
        imageUrl: true,
        imageUrl1: true,
        imageUrl2: true,
        imageUrl3: true,
        imageUrl4: true,
        imageUrl5: true,
        mobileImageUrl1: true,
        mobileImageUrl2: true,
        mobileImageUrl3: true,
        mobileImageUrl4: true,
        mobileImageUrl5: true,
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
        mobileImageCredit1: true,
        mobileImageCredit2: true,
        mobileImageCredit3: true,
        mobileImageCredit4: true,
        mobileImageCredit5: true,
        videoUrl: true,
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
