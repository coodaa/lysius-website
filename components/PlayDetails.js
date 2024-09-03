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
  const { t, i18n } = useTranslation("common");

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isEnglish = i18n.language === "en"; // Überprüfen, ob die Sprache Englisch ist

  const desktopImages = [
    play?.imageUrl,
    play?.imageUrl1,
    play?.imageUrl2,
    play?.imageUrl3,
    play?.imageUrl4,
    play?.imageUrl5,
    play?.imageUrl6,
    play?.imageUrl7,
    play?.imageUrl8,
    play?.imageUrl9,
    play?.imageUrl10,
  ].filter(Boolean);

  const mobileImages = [
    play?.mobileImageUrl1,
    play?.mobileImageUrl2,
    play?.mobileImageUrl3,
    play?.mobileImageUrl4,
    play?.mobileImageUrl5,
  ].filter(Boolean);

  useEffect(() => {
    if (play?.title) {
      setCurrentTitle(play.title);
    }

    const activeImages = mobileImages.length > 0 ? mobileImages : desktopImages;

    if (activeImages.length > 0) {
      const interval = setInterval(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % activeImages.length
        );
      }, 7000);
      return () => clearInterval(interval);
    }
  }, [play, desktopImages, mobileImages, setCurrentTitle]);

  const videoUrl =
    play?.videoUrl
      ?.replace("youtu.be/", "www.youtube.com/embed/")
      .split("?")[0] || "";

  const title = isEnglish
    ? play?.title_en || play?.title || t("untitled")
    : play?.title || t("untitled");
  const subtitle = isEnglish
    ? play?.subtitle_en || play?.subtitle || ""
    : play?.subtitle || "";

  return (
    <div className={styles.pageContainer}>
      {mobileImages.length > 0 && (
        <div className={`${styles.imageContainer} ${styles.mobileImages}`}>
          {mobileImages.map((image, index) => (
            <div
              key={index}
              className={`${styles.image} ${
                index === currentImageIndex ? styles.show : ""
              }`}
            >
              <Image
                src={image}
                alt={title}
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          ))}
        </div>
      )}

      <div className={`${styles.imageContainer} ${styles.desktopImages}`}>
        {desktopImages.map((image, index) => (
          <div
            key={index}
            className={`${styles.image} ${
              index === currentImageIndex ? styles.show : ""
            }`}
          >
            <Image
              src={image}
              alt={title}
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        ))}
      </div>

      <div className={styles.contentContainer}>
        {/* Rest des Inhalts */}
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>
            {subtitle.split(" ").map((word, index) => (
              <span key={index}>{word} </span>
            ))}
          </p>
          <div className={styles.playDesktop}>
            <PlayDetailsList play={play} />
          </div>
          <div className={styles.description}>
            <p>
              {isEnglish
                ? play?.mainDescription_en ||
                  play?.mainDescription ||
                  t("no_description_available")
                : play?.mainDescription || t("no_description_available")}
            </p>
          </div>
        </div>

        <div className={styles.carouselVideoContainer}>
          <h1 className={styles.titleDesktop}>{title}</h1>
          <p className={styles.subtitleDesktop}>
            {subtitle.split(" ").map((word, index) => (
              <span key={index}>{word} </span>
            ))}
          </p>

          <SecondCarousel
            images={desktopImages}
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

          <div className={styles.additionalTexts}>
            <h3>{t("additional_text_1")}</h3>
            <p>
              {isEnglish
                ? play?.additionalText1_en ||
                  play?.additionalText1 ||
                  t("additional_text_1")
                : play?.additionalText1 || t("additional_text_1")}
            </p>
            <p>
              {isEnglish
                ? play?.additionalText2_en ||
                  play?.additionalText2 ||
                  t("additional_text_2")
                : play?.additionalText2 || t("additional_text_2")}
            </p>
            <p>
              {isEnglish
                ? play?.additionalText3_en ||
                  play?.additionalText3 ||
                  t("additional_text_3")
                : play?.additionalText3 || t("additional_text_3")}
            </p>
            <p>
              {isEnglish
                ? play?.additionalText4_en ||
                  play?.additionalText4 ||
                  t("additional_text_4")
                : play?.additionalText4 || t("additional_text_4")}
            </p>
          </div>
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
