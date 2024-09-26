import { PrismaClient } from "@prisma/client";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head"; // Meta-Tags hinzufügen
import styles from "../styles/LegalPage.module.css";

const prisma = new PrismaClient();

const LegalPage = ({ legalData }) => {
  const { t, i18n } = useTranslation("common");
  const isEnglish = i18n.language === "en";

  const content = isEnglish ? legalData.content_en : legalData.content;

  // Den Text in Absätze aufteilen
  const paragraphs = content ? content.split("\n").filter(Boolean) : [];

  const pageTitle = legalData.type === "AGB" ? t("terms") : t("privacy_policy");
  const pageDescription = isEnglish
    ? `Read our ${pageTitle} in English.`
    : `Lesen Sie unsere ${pageTitle} auf Deutsch.`;

  return (
    <>
      <Head>
        <title>{pageTitle} | Lysius</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={`${pageTitle} | Lysius`} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content="https://www.lysius.org/legal" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dmpiogwyy/image/upload/v1722353263/Landingpage/egbmhvzu33mdjswom7iq.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${pageTitle} | Lysius`} />
        <meta name="twitter:description" content={pageDescription} />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dmpiogwyy/image/upload/v1722353263/Landingpage/egbmhvzu33mdjswom7iq.jpg"
        />
      </Head>

      <div className={styles.container}>
        <h1>{pageTitle}</h1>
        <div className={styles.text}>
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </>
  );
};

// Server-side Daten holen
export const getServerSideProps = async ({ locale, query }) => {
  const { type } = query;

  // AGB oder Datenschutz basierend auf dem `type`-Parameter abfragen
  const legalData = await prisma.legal.findFirst({
    where: { type },
  });

  if (legalData) {
    // Konvertiere createdAt (und andere Date-Felder, falls nötig) in ein ISO-String-Format
    legalData.createdAt = legalData.createdAt.toISOString();
  }

  return {
    props: {
      legalData,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};

export default LegalPage;
