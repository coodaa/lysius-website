import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const isProd = process.env.NODE_ENV === "production";
const strapiUrl = isProd
  ? process.env.NEXT_PUBLIC_STRAPI_API_URL_PROD
  : process.env.NEXT_PUBLIC_STRAPI_API_URL_LOCAL;

export async function getServerSideProps() {
  const apiUrl = `${strapiUrl}/api/galleries?populate=images`;

  try {
    const response = await fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("API Response:", data); // Überprüfe die API-Antwort in der Konsole

    const images = data.data.flatMap((item) =>
      item.attributes.images.data.map((image) => image.attributes.url)
    );

    return {
      props: {
        images: images.length > 0 ? images : ["/default-image.jpg"],
      },
    };
  } catch (error) {
    console.error("Fehler beim Abrufen der Bilder:", error);

    return {
      props: {
        images: ["/default-image.jpg"],
      },
    };
  }
}

export default function Home({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Ändert das Bild alle 3 Sekunden

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={styles.container}>
      <div className={styles.overlayContainer}>
        <div className={styles.imageWrapper}>
          {images.map((imageUrl, index) => (
            <Image
              key={index}
              src={`${strapiUrl}${imageUrl}`}
              alt={`Bild ${index}`}
              className={`${styles.image} ${
                index === currentImageIndex ? styles.show : ""
              }`}
              layout="fill"
              objectFit="cover"
              priority={index === currentImageIndex}
            />
          ))}
        </div>
        <h1 className={styles.title}>Lysius</h1>
      </div>
    </div>
  );
}
