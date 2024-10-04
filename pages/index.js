import { useEffect, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import NextImage from "next/image"; // Verwende Next.js Image-Komponente
import Head from "next/head"; // Für SEO Meta-Tags
import styles from "../styles/Home.module.css";

export async function getServerSideProps({ locale }) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
  let images = [];
  let news = ""; // Hinzufügen einer news-Variable

  try {
    const res = await fetch(`${apiUrl}/api/landingpageimg`);
    if (res.ok) {
      images = await res.json();
    } else {
      console.error("Failed to fetch images:", res.status);
    }
  } catch (error) {
    console.error("Error fetching images:", error.message);
  }

  try {
    const newsRes = await fetch(`${apiUrl}/api/news`);
    if (newsRes.ok) {
      const newsData = await newsRes.json();
      news = newsData?.[`${locale === "en" ? "news_en" : "news_de"}`] || "";
      console.log("Fetched news data:", news); // Konsolenlog für News-Daten
    } else {
      console.error("Failed to fetch news:", newsRes.status);
    }
  } catch (error) {
    console.error("Error fetching news:", error.message);
  }

  console.log("News content in component:", news);

  return {
    props: {
      images,
      news, // News in die Props aufnehmen
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

const HomePage = ({ images, news }) => {
  const { t } = useTranslation("common");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Überwache die Bildschirmbreite und setze den Zustand für mobile Geräte
  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Setze einen Schwellenwert für mobile Geräte
    };

    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);

    return () => {
      window.removeEventListener("resize", updateIsMobile);
    };
  }, []);

  // Image rotation logic
  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    console.log("Rendered HomePage component with images:", images);
    console.log("Rendered HomePage component with news:", news);
  }, [images, news]);

  return (
    <>
      <Head>
        <title>Lysius</title>
        <meta
          name="description"
          content="Der gemeinnützige Verein Lysius e.V. verbindet seit 2019 eine Initiative von Kulturschaffenden."
        />
        <meta name="keywords" content="Lysius, Kultur, Kunst, Theater, Musik" />
        <meta property="og:title" content="Lysius e.V." />
        <meta
          property="og:description"
          content="Eine Initiative von Kulturschaffenden in Musik, Theater und Gesellschaft."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dmpiogwyy/image/upload/v1722353263/Landingpage/egbmhvzu33mdjswom7iq.jpg"
        />

        {/* Preload-Links für Bilder */}
        {images.map((image, index) => (
          <link
            key={index}
            rel="preload"
            href={
              isMobile && image.mobileImageUrl
                ? image.mobileImageUrl
                : image.url
            }
            as="image"
          />
        ))}
      </Head>

      <div className={styles.container}>
        {/* Durchlaufendes Banner nur anzeigen, wenn news nicht leer ist */}

        {news && (
          <div className={styles.marquee} style={{ backgroundColor: "yellow" }}>
            <p>{news}</p>
          </div>
        )}

        <div className={styles.overlayContainer}>
          <div className={styles.imageWrapper}>
            {images.map((image, index) => (
              <div
                key={index}
                className={`${styles.image} ${
                  index === currentImageIndex ? styles.show : ""
                }`}
              >
                <NextImage
                  src={
                    isMobile && image.mobileImageUrl
                      ? image.mobileImageUrl
                      : image.url
                  }
                  alt={image.name}
                  layout="fill"
                  objectFit="cover"
                  priority={index === 0} // Erstes Bild wird priorisiert geladen
                />
              </div>
            ))}
          </div>
          <h1 className={styles.title}>Lysius</h1>
        </div>
      </div>
    </>
  );
};

export default HomePage;
