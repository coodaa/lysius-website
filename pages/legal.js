import { PrismaClient } from "@prisma/client";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import styles from "../styles/LegalPage.module.css"; // Passe den Pfad nach Bedarf an

const prisma = new PrismaClient();

const ImpressumPage = ({ legalData }) => {
  const { t, i18n } = useTranslation("common");
  const isEnglish = i18n.language === "en";

  // Den Inhalt basierend auf der Sprache auswählen
  const content = isEnglish ? legalData.content_en : legalData.content;

  // Den Text in Absätze aufteilen
  const paragraphs = content ? content.split("\n").filter(Boolean) : [];

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

// Server-side Daten holen
export const getServerSideProps = async ({ locale }) => {
  // Impressum aus der Datenbank abrufen
  const legalData = await prisma.legal.findFirst({
    where: { type: "Impressum" },
  });

  if (legalData) {
    // createdAt (und andere Date-Felder, falls nötig) in ein ISO-String-Format konvertieren
    legalData.createdAt = legalData.createdAt.toISOString();
  }

  return {
    props: {
      legalData,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};

export default ImpressumPage;
