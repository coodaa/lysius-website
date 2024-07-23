import { useEffect, useState } from "react";
import Image from "next/image";
import { supabase } from "../lib/supabaseClient";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchImageUrl = async () => {
      const { data, error } = supabase.storage
        .from("public-images") // Name des Buckets
        .getPublicUrl("michael_donath_86.jpg"); // Pfad zum Bild in deinem Bucket

      if (error) {
        console.error("Error fetching image URL:", error);
      } else {
        console.log("Fetched Image URL:", data.publicUrl); // Debugging-Statement
        setImageUrl(data.publicUrl);
      }
    };

    fetchImageUrl();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.overlayContainer}>
        <div className={styles.imageWrapper}>
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt="Michael Donath"
              className={styles.image}
              layout="fill"
            />
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <h1 className={styles.title}>Lysius</h1>
      </div>
    </div>
  );
}
