import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import Modal from "./Modal";
import PlayDetailsList from "./PlayDetailsList";
import SecondCarousel from "./SecondCarousel";
import CustomVideoPlayer from "./CustomVideoPlayer";
import styles from "../styles/PlayPage.module.css";

const PlayDetails = ({ play, setCurrentTitle }) => {
  const router = useRouter();
  const { t, i18n } = useTranslation("common");

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isEnglish = i18n.language === "en";

  // Desktop-Bilder (für Carousel und Modal)
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
    {
      url: play?.imageUrl5,
      credit: play?.imageCredit6 || "",
    },
    {
      url: play?.imageUrl6,
      credit: play?.imageCredit7 || "",
    },
    {
      url: play?.imageUrl7,
      credit: play?.imageCredit8 || "",
    },
    {
      url: play?.imageUrl8,
      credit: play?.imageCredit9 || "",
    },
    {
      url: play?.imageUrl9,
      credit: play?.imageCredit10 || "",
    },
  ].filter((image) => image.url);

  // Mobile-Bilder (wenn keine mobilen Bilder vorhanden sind, Desktop-Bilder verwenden)
  const mobileImages = [
    {
      url: play?.mobileImageUrl1 || play?.imageUrl,
      credit: play?.mobileImageCredit1 || play?.imageCredit1 || "",
    },
    {
      url: play?.mobileImageUrl2 || play?.imageUrl1,
      credit: play?.mobileImageCredit2 || play?.imageCredit2 || "",
    },
    {
      url: play?.mobileImageUrl3 || play?.imageUrl2,
      credit: play?.mobileImageCredit3 || play?.imageCredit3 || "",
    },
    {
      url: play?.mobileImageUrl4 || play?.imageUrl3,
      credit: play?.mobileImageCredit4 || play?.imageCredit4 || "",
    },
    {
      url: play?.mobileImageUrl5 || play?.imageUrl4,
      credit: play?.mobileImageCredit5 || play?.imageCredit5 || "",
    },
  ].filter((image) => image.url);

  const title = isEnglish
    ? play?.title_en || play?.title || t("untitled")
    : play?.title || t("untitled");

  const subtitle = isEnglish
    ? play?.subtitle_en || play?.subtitle || ""
    : play?.subtitle || "";

  // Im mobilen Modus mobileImages, sonst desktopImages
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
        {/* Mobiles Carousel */}
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

        {/* Desktop Carousel */}
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

            {/* Zusätzliche Texte (extraText1, extraText2, extraText3) */}
            {(isEnglish ? play?.extraText1_en : play?.extraText1) && (
              <div className={styles.additionalTexts}>
                <p>
                  {isEnglish
                    ? play?.extraText1_en || t("extra_text_1")
                    : play?.extraText1 || t("extra_text_1")}
                </p>
              </div>
            )}

            {(isEnglish ? play?.extraText2_en : play?.extraText2) && (
              <div className={styles.additionalTexts}>
                <p>
                  {isEnglish
                    ? play?.extraText2_en || t("extra_text_2")
                    : play?.extraText2 || t("extra_text_2")}
                </p>
              </div>
            )}

            {(isEnglish ? play?.extraText3_en : play?.extraText3) && (
              <div className={styles.additionalTexts}>
                <p>
                  {isEnglish
                    ? play?.extraText3_en || t("extra_text_3")
                    : play?.extraText3 || t("extra_text_3")}
                </p>
              </div>
            )}
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
              credits={desktopImages.map((img) => img.credit)}
              onImageClick={handleImageClick}
            />

            {/* CustomVideoPlayer für Video */}
            {videoUrl && <CustomVideoPlayer videoUrl={videoUrl} />}

            {/* Zusätzliche Texte */}
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

        {/* Modal für Desktop-Bilder */}
        {isModalOpen && (
          <Modal
            images={desktopImages.map((img) => img.url)} // Desktop-Bilder
            credits={desktopImages.map((img) => img.credit)} // Desktop-Bild-Credits
            initialIndex={currentImageIndex}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </div>
    </>
  );
};

export default PlayDetails;
