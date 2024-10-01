import { useEffect, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import NextImage from "next/image"; // Verwende Next.js Image-Komponente
import Head from "next/head"; // Für SEO Meta-Tags
import styles from "../styles/Home.module.css";

export async function getServerSideProps({ locale }) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
  let images = [];

  try {
    const res = await fetch(`${apiUrl}/api/landingpageimg`);
    if (res.ok) {
      images = await res.json();
    } else {
      console.error("Failed to fetch images:", res.status);
    }
  } catch (error) {
    console.error("Error fetching images:", error);
  }

  return {
    props: {
      images,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

const HomePage = ({ images }) => {
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
      </Head>

      <div className={styles.container}>
        <div className={styles.constructionOverlay}>
          Diese Seite befindet sich im Bau.
        </div>

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
