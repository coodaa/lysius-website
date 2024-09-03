import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import Modal from "./Modal";
import PlayDetailsList from "./PlayDetailsList";
import SecondCarousel from "./SecondCarousel";
import styles from "../styles/PlayPage.module.css";

const PlayDetails = ({ play, setCurrentTitle }) => {
  const router = useRouter();
  const { t, i18n } = useTranslation("common");

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isEnglish = i18n.language === "en";

  // Desktop images
  const desktopImages = [
    {
      url: play?.imageUrl,
      credit: play?.imageCredit1 || "",
    },
    {
      url: play?.imageUrl1,
      credit: play?.imageCredit2 || "",
    },
    {
      url: play?.imageUrl2,
      credit: play?.imageCredit3 || "",
    },
    {
      url: play?.imageUrl3,
      credit: play?.imageCredit4 || "",
    },
    {
      url: play?.imageUrl4,
      credit: play?.imageCredit5 || "",
    },
  ].filter((image) => image.url);

  // Mobile images
  const mobileImages = [
    {
      url: play?.mobileImageUrl1,
      credit: play?.mobileImageCredit1 || "No credit available",
    },
    {
      url: play?.mobileImageUrl2,
      credit: play?.mobileImageCredit2 || "No credit available",
    },
    {
      url: play?.mobileImageUrl3,
      credit: play?.mobileImageCredit3 || "No credit available",
    },
    {
      url: play?.mobileImageUrl4,
      credit: play?.mobileImageCredit4 || "No credit available",
    },
    {
      url: play?.mobileImageUrl5,
      credit: play?.mobileImageCredit5 || "No credit available",
    },
  ].filter((image) => image.url);

  const title = isEnglish
    ? play?.title_en || play?.title || t("untitled")
    : play?.title || t("untitled");

  const subtitle = isEnglish
    ? play?.subtitle_en || play?.subtitle || ""
    : play?.subtitle || "";

  const activeImages = mobileImages.length > 0 ? mobileImages : desktopImages;

  useEffect(() => {
    if (play?.title) {
      setCurrentTitle(title);
    }

    if (activeImages.length > 0) {
      const interval = setInterval(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % activeImages.length
        );
      }, 7000);
      return () => clearInterval(interval);
    }
  }, [title, play, activeImages, setCurrentTitle]);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const videoUrl =
    play?.videoUrl
      ?.replace("youtu.be/", "www.youtube.com/embed/")
      .split("?")[0] || "";

  // Debugging
  console.log(
    "Current Image Credits:",
    desktopImages[currentImageIndex]?.credit
  );
  console.log("Desktop Images Data:", desktopImages);
  console.log("Play Object Data:", play);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={subtitle} />
        {activeImages.map((image, index) => (
          <meta key={index} property="og:image" content={image.url} />
        ))}
        {activeImages.map((image, index) => (
          <meta
            key={index}
            name={`image-credit-${index + 1}`}
            content={image.credit}
          />
        ))}
      </Head>

      <div className={styles.pageContainer}>
        {mobileImages.length > 0 && (
          <div className={`${styles.imageContainer} ${styles.mobileImages}`}>
            {mobileImages.map((image, index) => (
              <div
                key={index}
                className={`${styles.image} ${
                  index === currentImageIndex ? styles.show : ""
                }`}
                onClick={() => handleImageClick(index)}
              >
                <Image
                  src={image.url}
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
              onClick={() => handleImageClick(index)}
            >
              <Image
                src={image.url}
                alt={title}
                layout="fill"
                objectFit="cover"
                priority
              />

              {image.credit && (
                <p className={styles.imageCredit}>{image.credit}</p>
              )}
            </div>
          ))}
        </div>

        <div className={styles.contentContainer}>
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
                    t("No description available.")
                  : play?.mainDescription || t("No description available.")}
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
              images={desktopImages.map((img) => img.url)}
              onImageClick={handleImageClick}
            />

            {/* Image credits directly below the carousel points */}
            {desktopImages[currentImageIndex]?.credit && (
              <div className={styles.carouselCredits}>
                {desktopImages[currentImageIndex]?.credit}
              </div>
            )}

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

            {(isEnglish ? play?.additionalText1_en : play?.additionalText1) && (
              <div className={styles.additionalTexts}>
                <h3>{t("reviews")}</h3>
                <p>
                  {isEnglish
                    ? play?.additionalText1_en || t("additional_text_1")
                    : play?.additionalText1 || t("additional_text_1")}
                </p>
              </div>
            )}

            {(isEnglish ? play?.additionalText2_en : play?.additionalText2) && (
              <div className={styles.additionalTexts}>
                <p>
                  {isEnglish
                    ? play?.additionalText2_en || t("additional_text_2")
                    : play?.additionalText2 || t("additional_text_2")}
                </p>
              </div>
            )}

            {(isEnglish ? play?.additionalText3_en : play?.additionalText3) && (
              <div className={styles.additionalTexts}>
                <p>
                  {isEnglish
                    ? play?.additionalText3_en || t("additional_text_3")
                    : play?.additionalText3 || t("additional_text_3")}
                </p>
              </div>
            )}

            {(isEnglish ? play?.additionalText4_en : play?.additionalText4) && (
              <div className={styles.additionalTexts}>
                <p>
                  {isEnglish
                    ? play?.additionalText4_en || t("additional_text_4")
                    : play?.additionalText4 || t("additional_text_4")}
                </p>
              </div>
            )}
          </div>
        </div>
        {isModalOpen && (
          <Modal
            images={activeImages.map((img) => img.url)}
            initialIndex={currentImageIndex}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </div>
    </>
  );
};

export default PlayDetails;
