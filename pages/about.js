import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { PrismaClient } from "@prisma/client";
import Head from "next/head";
import styles from "../styles/AboutPage.module.css"; // Importiere das angepasste CSS

const prisma = new PrismaClient();

const AboutPage = ({ aboutData }) => {
  const { t, i18n } = useTranslation("common");
  const isEnglish = i18n.language === "en";

  return (
    <>
      <Head>
        <title>{t("about_title")}</title>
        <meta name="description" content={t("about_description")} />
        <meta
          name="keywords"
          content="Lysius, Kultur, Kunst, Theater, Musik, Völkerverständigung, Wissenschaft"
        />
        <meta property="og:title" content={t("about_title")} />
        <meta property="og:description" content={t("about_og_description")} />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dmpiogwyy/image/upload/v1722353263/Landingpage/egbmhvzu33mdjswom7iq.jpg"
        />
      </Head>

      {/* Hauptcontainer für die gesamte Seite */}
      <div className={styles.mainContainer}>
        {/* Titel Lysius */}
        <h1 className={styles.fixedTitle}>Lysius</h1>

        {/* Container für den restlichen Inhalt */}
        <div className={styles.pageContainer}>
          {/* Wrapper für Sidebar und Content */}
          <div className={styles.contentWrapper}>
            {/* Linke Seite: Kontakt, Mitglieder, Newsletter */}
            <div className={styles.sidebar}>
              <div className={styles.contactSection}>
                <h2>{t("contact")}</h2>
                <p>{t("contact_details")}</p>
                <hr className={styles.horizontalLine} />

                <h2>{t("members")}</h2>
                <p>{t("members_description")}</p>
                <hr className={styles.horizontalLine} />

                <h2>{t("newsletter")}</h2>
                <p>{t("newsletter_details")}</p>
              </div>
            </div>

            {/* Rechte Seite: About Text */}
            <div className={styles.contentContainer}>
              <div className={styles.aboutTextContainer}>
                <div className={styles.text}>
                  <p>
                    {isEnglish ? aboutData.textField1_en : aboutData.textField1}
                  </p>
                  <p>
                    {isEnglish ? aboutData.textField2_en : aboutData.textField2}
                  </p>
                  <p>
                    {isEnglish ? aboutData.textField3_en : aboutData.textField3}
                  </p>
                  <p>
                    {isEnglish ? aboutData.textField4_en : aboutData.textField4}
                  </p>
                  <p>
                    {isEnglish ? aboutData.textField5_en : aboutData.textField5}
                  </p>
                </div>
              </div>
            </div>
          </div>
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
