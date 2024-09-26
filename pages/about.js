import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { PrismaClient } from "@prisma/client";
import Head from "next/head"; // Für SEO-Meta-Tags
import styles from "../styles/AboutPage.module.css"; // Hier bindest du deine CSS-Datei ein

const prisma = new PrismaClient();

const AboutPage = ({ aboutData }) => {
  const { t, i18n } = useTranslation("common");
  const isEnglish = i18n.language === "en";

  return (
    <>
      <Head>
        <title>Über Lysius e.V.</title>
        <meta
          name="description"
          content="Der gemeinnützige Verein Lysius e.V. fördert Kunst, Kultur und Wissenschaft im Sinne der Völkerverständigung."
        />
        <meta
          name="keywords"
          content="Lysius, Kultur, Kunst, Theater, Musik, Völkerverständigung, Wissenschaft"
        />
        <meta property="og:title" content="Über Lysius e.V." />
        <meta
          property="og:description"
          content="Der Verein Lysius e.V. fördert interdisziplinär Kunst und Kultur."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dmpiogwyy/image/upload/v1722353263/Landingpage/egbmhvzu33mdjswom7iq.jpg"
        />
      </Head>

      <div className={styles.container}>
        <div className={styles.text}>
          <p>{isEnglish ? aboutData.textField1_en : aboutData.textField1}</p>
          <p>{isEnglish ? aboutData.textField2_en : aboutData.textField2}</p>
          <p>{isEnglish ? aboutData.textField3_en : aboutData.textField3}</p>
          <p>{isEnglish ? aboutData.textField4_en : aboutData.textField4}</p>
          <p>{isEnglish ? aboutData.textField5_en : aboutData.textField5}</p>
        </div>
      </div>
    </>
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
