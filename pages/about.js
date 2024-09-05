import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { PrismaClient } from "@prisma/client";
import styles from "../styles/AboutPage.module.css"; // Hier bindest du deine CSS-Datei ein

const prisma = new PrismaClient();

const AboutPage = ({ aboutData }) => {
  const { t, i18n } = useTranslation("common");
  const isEnglish = i18n.language === "en";

  return (
    <div className={styles.container}>
      <h1>{t("about")}</h1>

      <div className={styles.text}>
        <p>{isEnglish ? aboutData.textField1_en : aboutData.textField1}</p>
        <p>{isEnglish ? aboutData.textField2_en : aboutData.textField2}</p>
        <p>{isEnglish ? aboutData.textField3_en : aboutData.textField3}</p>
        <p>{isEnglish ? aboutData.textField4_en : aboutData.textField4}</p>
        <p>{isEnglish ? aboutData.textField5_en : aboutData.textField5}</p>
      </div>
    </div>
  );
};

// Server-side function to fetch data from MySQL using Prisma
export const getServerSideProps = async ({ locale }) => {
  const aboutData = await prisma.about.findFirst();

  return {
    props: {
      aboutData,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};

export default AboutPage;
