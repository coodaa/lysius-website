import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Modal from "./Modal";
import PlayDetailsList from "./PlayDetailsList";
import SecondCarousel from "./SecondCarousel";
import styles from "../styles/PlayPage.module.css";

const PlayDetails = ({ play, setCurrentTitle }) => {
  const router = useRouter();
  const { t } = useTranslation("common");

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = [
    play.imageUrl,
    play.imageUrl1,
    play.imageUrl2,
    play.imageUrl3,
    play.imageUrl4,
    play.imageUrl5,
    play.imageUrl6,
    play.imageUrl7,
    play.imageUrl8,
    play.imageUrl9,
    play.imageUrl10,
  ].filter(Boolean);

  const secondCarouselImages = [
    play.imageUrl,
    play.imageUrl1,
    play.imageUrl2,
    play.imageUrl3,
    play.imageUrl4,
    play.imageUrl5,
    play.imageUrl6,
    play.imageUrl7,
    play.imageUrl8,
    play.imageUrl9,
    play.imageUrl10,
  ].filter(Boolean);

  useEffect(() => {
    setCurrentTitle(play.title);

    if (images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [play, setCurrentTitle]);

  const goBack = () => {
    router.push("/");
  };

  const handleCarouselImageClick = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const videoUrl =
    play.videoUrl
      ?.replace("youtu.be/", "www.youtube.com/embed/")
      .split("?")[0] || "";

  return (
    <div className={styles.pageContainer}>
      <div className={styles.imageContainer}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${styles.image} ${
              index === currentImageIndex ? styles.show : ""
            }`}
          >
            <Image
              src={image}
              alt={play.title}
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        ))}
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{play.title}</h1>
          <p className={styles.subtitle}>
            {play.subtitle
              ? play.subtitle
                  .split(" ")
                  .map((word, index) => <span key={index}>{word} </span>)
              : ""}
          </p>
          <div className={styles.playDesktop}>
            <PlayDetailsList play={play} />
          </div>
          <div className={styles.description}>
            <p>{play.description}</p>
          </div>
        </div>

        <div className={styles.carouselVideoContainer}>
          <h1 className={styles.titleDesktop}>{play.title}</h1>
          <p className={styles.subtitleDesktop}>
            {play.subtitle
              ? play.subtitle
                  .split(" ")
                  .map((word, index) => <span key={index}>{word} </span>)
              : ""}
          </p>

          <SecondCarousel
            images={secondCarouselImages}
            onImageClick={(index) => handleCarouselImageClick(index)}
          />
          {videoUrl && (
            <div className={styles.videoContainer}>
              <iframe
                src={videoUrl}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </div>
      {isModalOpen && (
        <Modal
          images={images}
          initialIndex={currentImageIndex}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default PlayDetails;
