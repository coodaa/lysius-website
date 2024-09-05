import { PrismaClient } from "@prisma/client";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import styles from "../styles/LegalPage.module.css";

const prisma = new PrismaClient();

const LegalPage = ({ legalData }) => {
  const { t, i18n } = useTranslation("common");
  const isEnglish = i18n.language === "en";

  const content = isEnglish ? legalData.content_en : legalData.content;

  // Den Text in Absätze aufteilen
  const paragraphs = content ? content.split("\n").filter(Boolean) : [];

  return (
    <div className={styles.container}>
      {/* <h1>{legalData.type === "AGB" ? t("terms") : t("privacy_policy")}</h1> */}
      <div className={styles.text}>
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
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
