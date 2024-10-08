import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { PrismaClient } from "@prisma/client";
import Head from "next/head";
import styles from "../styles/AboutPage.module.css"; // Importiere das angepasste CSS

// Prisma Client initialisieren
const prisma = new PrismaClient();

const AboutPage = ({ aboutData, contactData, membersData, newsletterData }) => {
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
        <h1 className={styles.fixedTitle}>Lysius</h1>

        {/* Container für den restlichen Inhalt */}
        <div className={styles.pageContainer}>
          {/* Wrapper für Sidebar und Content */}
          <div className={styles.contentWrapper}>
            {/* Linke Seite: Kontakt, Mitglieder, Newsletter */}
            <div className={styles.sidebar}>
              <div className={styles.contactSection}>
                {/* Anzeige der Contact-Daten */}
                <h2>{t("contact")}</h2>
                {contactData ? (
                  contactData.map((contact, index) => (
                    <p key={index}>
                      {isEnglish ? contact.position_en : contact.position_de}:{" "}
                      {contact.name}
                    </p>
                  ))
                ) : (
                  <p>{t("no_contact_available")}</p>
                )}
                <hr className={styles.horizontalLine} />
                {/* Anzeige der Members-Daten */}
                <h2>{t("members")}</h2>
                {membersData ? (
                  membersData.map((member, index) => (
                    <p key={index}>
                      {isEnglish ? member.position_en : member.position_de}:{" "}
                      {member.name}
                    </p>
                  ))
                ) : (
                  <p>{t("no_members_available")}</p>
                )}
                <hr className={styles.horizontalLine} />
                <h2>{t("newsletter")}</h2>
                <p>
                  {isEnglish
                    ? newsletterData.details_en
                    : newsletterData.details}
                </p>
                <form
                  className={styles.newsletterForm}
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const email = e.target.elements.email.value;

                    try {
                      const response = await fetch("/api/newsletter", {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ email }),
                      });

                      if (response.ok) {
                        alert("Thank you for subscribing!");
                        e.target.reset(); // Formular zurücksetzen
                      } else {
                        alert("Failed to subscribe.");
                      }
                    } catch (error) {
                      console.error("Failed to subscribe:", error);
                      alert("Failed to subscribe.");
                    }
                  }}
                >
                  <input
                    type="email"
                    name="email"
                    placeholder={t("enter_email")}
                    required
                    className={styles.emailInput}
                  />
                  <button type="submit" className={styles.subscribeButton}>
                    {t("subscribe")}
                  </button>
                </form>
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
  try {
    // Abruf der Daten aus den entsprechenden Tabellen
    const aboutData = await prisma.about.findFirst();
    const contactData = await prisma.contact.findMany();
    const membersData = await prisma.members.findMany();
    let newsletterData = await prisma.newsletter.findFirst();

    // Falls `newsletterData` existiert, konvertiere das `created_at`-Feld zu einem String
    if (newsletterData && newsletterData.created_at) {
      newsletterData = {
        ...newsletterData,
        created_at: newsletterData.created_at.toISOString(), // Datum in einen String umwandeln
      };
    }

    return {
      props: {
        aboutData: aboutData || null,
        contactData: contactData.length > 0 ? contactData : null,
        membersData: membersData.length > 0 ? membersData : null,
        newsletterData: newsletterData || null,
        ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  } catch (error) {
    console.error("Error fetching data from database:", error);
    return {
      props: {
        error: "Error fetching data",
      },
    };
  }
};

export default AboutPage;
