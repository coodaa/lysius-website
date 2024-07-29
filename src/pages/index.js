import { useEffect, useState } from "react";
import { fetchImages } from "../lib/fetchImages";
import styles from "../styles/Home.module.css";

const HomePage = () => {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchImages();
      setImages(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={styles.container}>
      <div className={styles.overlayContainer}>
        <div className={styles.imageWrapper}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`${styles.image} ${
                index === currentImageIndex ? styles.show : ""
              }`}
            >
              <img
                src={image.url}
                alt={image.name}
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                  objectFit: "cover",
                }}
              />
              <p>{image.url}</p> {/* Debugging output */}
            </div>
          ))}
        </div>
        <h1 className={styles.title}>Lysius</h1>
      </div>
    </div>
  );
};

export default HomePage;
