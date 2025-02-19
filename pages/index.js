import { useEffect, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import NextImage from "next/image";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getServerSideProps({ locale }) {
  let images = [];
  let news = null;

  try {
    // Fetch images from the landingpageimg table
    images = await prisma.landingpageimg.findMany();

    // Fetch the first news entry from the News table
    news = await prisma.News.findFirst();
    console.log("Fetched news:", news);
  } catch (error) {
    console.error("Error fetching data from database:", error);
  }

  return {
    props: {
      images,
      news,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

const HomePage = ({ images, news }) => {
  const { t, i18n } = useTranslation("common"); // Füge i18n hinzu
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Überwache die Bildschirmbreite und setze den Zustand für mobile Geräte
  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
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
        {news ? (
          <div className={styles.newsBanner}>
            <div className={styles.marqueeWrapper}>
              <div className={styles.marqueeContent}>
                {i18n.language === "de" ? news.news_de : news.news_en}{" "}
                {i18n.language === "de" ? news.news_de : news.news_en}{" "}
                {i18n.language === "de" ? news.news_de : news.news_en}
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.newsBanner}>
            <div className={styles.marqueeWrapper}>
              <div className={styles.marqueeContent}>
                {t("noNewsAvailable")} {t("noNewsAvailable")}{" "}
                {t("noNewsAvailable")}
              </div>
            </div>
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
                  alt={image.alt || `Image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top" // Hier wird der obere Bildbereich fixiert
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
