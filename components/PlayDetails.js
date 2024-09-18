import React, { useState, useEffect, useMemo, useCallback } from "react";
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

  const isEnglish = useMemo(() => i18n.language === "en", [i18n.language]);

  const title = useMemo(
    () =>
      isEnglish
        ? play?.title_en || play?.title || t("untitled")
        : play?.title || t("untitled"),
    [isEnglish, play, t]
  );

  const subtitles = useMemo(
    () => [play?.subtitle1, play?.subtitle2, play?.subtitle3].filter(Boolean),
    [play]
  );

  const desktopImages = useMemo(
    () =>
      [
        { url: play?.imageUrl, credit: play?.imageCredit1 || "" },
        { url: play?.imageUrl1, credit: play?.imageCredit2 || "" },
        { url: play?.imageUrl2, credit: play?.imageCredit3 || "" },
        { url: play?.imageUrl3, credit: play?.imageCredit4 || "" },
        { url: play?.imageUrl4, credit: play?.imageCredit5 || "" },
        { url: play?.imageUrl5, credit: play?.imageCredit6 || "" },
        { url: play?.imageUrl6, credit: play?.imageCredit7 || "" },
        { url: play?.imageUrl7, credit: play?.imageCredit8 || "" },
        { url: play?.imageUrl8, credit: play?.imageCredit9 || "" },
        { url: play?.imageUrl9, credit: play?.imageCredit10 || "" },
      ].filter((image) => image.url),
    [play]
  );

  const mobileImages = useMemo(
    () =>
      [
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
      ].filter((image) => image.url),
    [play]
  );

  const activeImages = mobileImages.length > 0 ? mobileImages : desktopImages;

  useEffect(() => {
    if (play?.title) setCurrentTitle(title);

    if (activeImages.length > 0) {
      const interval = setInterval(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % activeImages.length
        );
      }, 7000);
      return () => clearInterval(interval);
    }
  }, [title, play, activeImages, setCurrentTitle]);

  const handleImageClick = useCallback((index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  }, []);

  const videoUrl =
    play?.videoUrl1
      ?.replace("youtu.be/", "www.youtube.com/embed/")
      ?.split("?")[0] || "";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={subtitles[0]} />
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
                  priority={index === 0} // Erstes Bild priorisieren
                  loading={index === 0 ? "eager" : "lazy"} // Rest lazy laden
                  sizes="(max-width: 768px) 100vw, 50vw"
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
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
                sizes="(max-width: 1200px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>

        <div className={styles.contentContainer}>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>{title}</h1>

            <p className={styles.subtitle}>
              {subtitles.map((subtitle, i) => (
                <p key={i}>
                  {subtitle.split(" ").map((word, index) => (
                    <span key={index}>{word} </span>
                  ))}
                </p>
              ))}
            </p>

            <div className={styles.playDesktop}>
              <PlayDetailsList play={play} />
            </div>

            <div className={styles.description}>
              {[1, 2, 3, 4].map((i, index) => (
                <React.Fragment key={i}>
                  {index < 4 && <hr className={styles.horizontalLine} />}

                  <div
                    dangerouslySetInnerHTML={{
                      __html: isEnglish
                        ? play?.[`descriptionleft${i}_en`] ||
                          play?.[`descriptionleft${i}`] ||
                          t("No description available.")
                        : play?.[`descriptionleft${i}`] ||
                          t("No description available."),
                    }}
                  />
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className={styles.carouselVideoContainer}>
            <h1 className={styles.titleDesktop}>{title}</h1>

            {subtitles.map((subtitle, i) => (
              <p key={i} className={styles.subtitleDesktop}>
                {subtitle.split(" ").map((word, index) => (
                  <span key={index}>{word} </span>
                ))}
              </p>
            ))}

            <SecondCarousel
              images={desktopImages.map((img) => img.url)}
              credits={desktopImages.map((img) => img.credit)}
              onImageClick={handleImageClick}
            />

            {videoUrl && <CustomVideoPlayer videoUrl={videoUrl} />}

            {[1, 2, 3, 4].map((i) => (
              <div key={i} className={styles.additionalTexts}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: isEnglish
                      ? play?.[`textright${i}_en`] || t(`extra_text_${i}`)
                      : play?.[`textright${i}`] || t(`extra_text_${i}`),
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Modal für Desktop-Bilder */}
        {isModalOpen && (
          <Modal
            images={desktopImages.map((img) => img.url)}
            credits={desktopImages.map((img) => img.credit)}
            initialIndex={currentImageIndex}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </div>
    </>
  );
};

export default PlayDetails;
