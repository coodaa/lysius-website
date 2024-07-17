import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import { getPlayById } from "../../lib/api";
import styles from "../../styles/Play.module.css";

const Play = () => {
  const router = useRouter();
  const { id } = router.query;
  const [play, setPlay] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const data = await getPlayById(id);
          console.log("Fetched play data:", JSON.stringify(data, null, 2)); // Detaillierte Debugging-Ausgabe
          setPlay(data?.data);
        } catch (error) {
          console.error("Error fetching play data:", error);
        }
      };
      fetchData();
    }
  }, [id]);

  if (!play) {
    return <div>Loading...</div>;
  }

  const firstImage = play.attributes?.Bilder?.data?.[0]?.attributes?.url;
  const imageUrl = firstImage
    ? `${process.env.NEXT_PUBLIC_API_URL.replace("/api", "")}${firstImage}`
    : null;
  console.log("Image URL:", imageUrl); // Überprüfen Sie die URL in der Konsole

  return (
    <div className={styles.container}>
      {imageUrl ? (
        <div className={styles.imageWrapper}>
          <Image
            src={imageUrl}
            alt="Play Image"
            layout="fill"
            className={styles.image}
          />
        </div>
      ) : (
        <div>No Image Available</div>
      )}
    </div>
  );
};

export default Play;
