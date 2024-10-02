import React, { useState, useEffect, useMemo, useCallback } from "react";
import NextImage from "next/image"; // Import umbenannt
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import Modal from "./Modal";
import PlayDetailsList from "./PlayDetailsList";
import SecondCarousel from "./SecondCarousel";
import CustomVideoPlayer from "./CustomVideoPlayer";
import styles from "../styles/PlayPage.module.css";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 767);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
}

const PlayDetails = ({ play, setCurrentTitle }) => {
  const router = useRouter();
  const { t, i18n } = useTranslation("common");

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [modalImageIndex, setModalImageIndex] = useState(0); // Zustand für das Modal
  const [modalImages, setModalImages] = useState([]); // Bilder für das Modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isEnglish = useMemo(() => i18n.language === "en", [i18n.language]);
  const isMobile = useIsMobile();

  const title = useMemo(
    () =>
      isEnglish
        ? play?.title_en || play?.title || t("untitled")
        : play?.title || t("untitled"),
    [isEnglish, play, t]
  );

  // Auswahl der passenden Subtitles basierend auf der Sprache
  const subtitles = useMemo(() => {
    const defaultSubtitles = [
      play?.subtitle1,
      play?.subtitle2,
      play?.subtitle3,
    ].filter(Boolean);

    if (isEnglish) {
      const englishSubtitles = [
        play?.subtitle1_en,
        play?.subtitle2_en,
        play?.subtitle3_en,
      ].filter(Boolean);
      return englishSubtitles.length > 0 ? englishSubtitles : defaultSubtitles;
    }

    return defaultSubtitles;
  }, [isEnglish, play]);

  const topImages = useMemo(
    () =>
      [
        { url: play?.topImage1, credit: play?.topImageCredit1 || "" },
        { url: play?.topImage2, credit: play?.topImageCredit2 || "" },
        { url: play?.topImage3, credit: play?.topImageCredit3 || "" },
        { url: play?.topImage4, credit: play?.topImageCredit4 || "" },
        { url: play?.topImage5, credit: play?.topImageCredit5 || "" },
        { url: play?.topImage6, credit: play?.topImageCredit6 || "" },
      ].filter((image) => image.url && image.url.trim() !== ""),
    [play]
  );

  const desktopImages = useMemo(
    () =>
      [
        {
          url: play?.imageUrl1,
          credit: play?.imageCredit1 || "", // Allgemeine Credits
          credit_de: play?.imageCredit1_de || play?.imageCredit1 || "",
          credit_en: play?.imageCredit1_en || play?.imageCredit1 || "",
        },
        {
          url: play?.imageUrl2,
          credit: play?.imageCredit2 || "",
          credit_de: play?.imageCredit2_de || play?.imageCredit2 || "",
          credit_en: play?.imageCredit2_en || play?.imageCredit2 || "",
        },
        {
          url: play?.imageUrl3,
          credit: play?.imageCredit3 || "",
          credit_de: play?.imageCredit3_de || play?.imageCredit3 || "",
          credit_en: play?.imageCredit3_en || play?.imageCredit3 || "",
        },
        {
          url: play?.imageUrl4,
          credit: play?.imageCredit4 || "",
          credit_de: play?.imageCredit4_de || play?.imageCredit4 || "",
          credit_en: play?.imageCredit4_en || play?.imageCredit4 || "",
        },
        {
          url: play?.imageUrl5,
          credit: play?.imageCredit5 || "",
          credit_de: play?.imageCredit5_de || play?.imageCredit5 || "",
          credit_en: play?.imageCredit5_en || play?.imageCredit5 || "",
        },
        {
          url: play?.imageUrl6,
          credit: play?.imageCredit6 || "",
          credit_de: play?.imageCredit6_de || play?.imageCredit6 || "",
          credit_en: play?.imageCredit6_en || play?.imageCredit6 || "",
        },
        {
          url: play?.imageUrl7,
          credit: play?.imageCredit7 || "",
          credit_de: play?.imageCredit7_de || play?.imageCredit7 || "",
          credit_en: play?.imageCredit7_en || play?.imageCredit7 || "",
        },
        {
          url: play?.imageUrl8,
          credit: play?.imageCredit8 || "",
          credit_de: play?.imageCredit8_de || play?.imageCredit8 || "",
          credit_en: play?.imageCredit8_en || play?.imageCredit8 || "",
        },
        {
          url: play?.imageUrl9,
          credit: play?.imageCredit9 || "",
          credit_de: play?.imageCredit9_de || play?.imageCredit9 || "",
          credit_en: play?.imageCredit9_en || play?.imageCredit9 || "",
        },
        {
          url: play?.imageUrl10,
          credit: play?.imageCredit10 || "",
          credit_de: play?.imageCredit10_de || play?.imageCredit10 || "",
          credit_en: play?.imageCredit10_en || play?.imageCredit10 || "",
        },
      ].filter((image) => image.url),
    [play]
  );

  const mobileImages = useMemo(
    () =>
      [
        {
          url: play?.topMobileImage1 || play?.imageUrl1,
          credit: play?.imageCredit1 || "",
          credit_de: play?.imageCredit1_de || play?.imageCredit1 || "",
          credit_en: play?.imageCredit1_en || play?.imageCredit1 || "",
        },
        {
          url: play?.topMobileImage2 || play?.imageUrl2,
          credit: play?.imageCredit2 || "",
          credit_de: play?.imageCredit2_de || play?.imageCredit2 || "",
          credit_en: play?.imageCredit2_en || play?.imageCredit2 || "",
        },
        {
          url: play?.topMobileImage3 || play?.imageUrl3,
          credit: play?.imageCredit3 || "",
          credit_de: play?.imageCredit3_de || play?.imageCredit3 || "",
          credit_en: play?.imageCredit3_en || play?.imageCredit3 || "",
        },
        {
          url: play?.topMobileImage4 || play?.imageUrl4,
          credit: play?.imageCredit4 || "",
          credit_de: play?.imageCredit4_de || play?.imageCredit4 || "",
          credit_en: play?.imageCredit4_en || play?.imageCredit4 || "",
        },
        {
          url: play?.topMobileImage5 || play?.imageUrl5,
          credit: play?.imageCredit5 || "",
          credit_de: play?.imageCredit5_de || play?.imageCredit5 || "",
          credit_en: play?.imageCredit5_en || play?.imageCredit5 || "",
        },
        {
          url: play?.topMobileImage6 || play?.imageUrl6,
          credit: play?.imageCredit6 || "",
          credit_de: play?.imageCredit6_de || play?.imageCredit6 || "",
          credit_en: play?.imageCredit6_en || play?.imageCredit6 || "",
        },
      ].filter((image) => image.url),
    [play]
  );

  const allCredits = desktopImages.map((img) => img.credit); // Allgemeine Credits
  const deCredits = desktopImages.map((img) => img.credit_de); // Deutsche Credits
  const enCredits = desktopImages.map((img) => img.credit_en); // Englische Credits

  const activeImages = isMobile ? mobileImages : topImages;

  const logos = [
    play?.logo1,
    play?.logo2,
    play?.logo3,
    play?.logo4,
    play?.logo5,
    play?.logo6,
  ].filter(Boolean);

  useEffect(() => {
    if (play?.title) setCurrentTitle(title);

    if (activeImages.length > 0) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % activeImages.length;
          return nextIndex;
        });
      }, 7000);
      return () => clearInterval(interval);
    } else {
      setCurrentImageIndex(0);
    }
  }, [title, play, activeImages, setCurrentTitle]);

  // Bilder vorab laden
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Alle Bilder, die im Modal angezeigt werden können
      const preloadImages = [
        ...desktopImages.map((img) => img.url),
        ...mobileImages.map((img) => img.url),
      ];

      // Bilder vorab laden
      preloadImages.forEach((imageSrc) => {
        const img = new Image();
        img.src = imageSrc;
      });
    }
  }, [desktopImages, mobileImages]);

  const handleImageClick = useCallback((index, imagesArray) => {
    setModalImages(imagesArray); // Setze die Bilder für das Modal
    setModalImageIndex(index); // Setze den Index für das Modal
    setIsModalOpen(true);
  }, []);

  const videoUrl =
    play?.videoUrl1
      ?.replace("youtu.be/", "www.youtube.com/embed/")
      ?.split("?")[0] || "";

  useEffect(() => {
    const container = document.querySelector(`.${styles.textContainer}`);
    const strich = container?.querySelector("::before");

    if (container && strich) {
      strich.style.height = `${container.clientHeight}px`;
    }
  }, []);

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
        {isMobile && mobileImages.length > 0 && (
          <div className={`${styles.imageContainer} ${styles.mobileImages}`}>
            {mobileImages.map((image, index) =>
              image.url ? (
                <div
                  key={index}
                  className={`${styles.image} ${
                    index === currentImageIndex ? styles.show : ""
                  }`}
                  onClick={() =>
                    handleImageClick(
                      index,
                      mobileImages.map((img) => img.url)
                    )
                  }
                >
                  <NextImage
                    src={image.url}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    priority={index === 0}
                    loading={index === 0 ? "eager" : "lazy"}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    onError={(e) => (e.target.style.display = "none")}
                  />
                </div>
              ) : null
            )}
          </div>
        )}

        {/* Desktop Carousel für topImages */}
        {!isMobile && topImages.length > 0 && (
          <div className={`${styles.imageContainer} ${styles.desktopImages}`}>
            {topImages.map((image, index) =>
              image.url ? (
                <div
                  key={index}
                  className={`${styles.image} ${
                    index === currentImageIndex ? styles.show : ""
                  }`}
                >
                  <NextImage
                    src={image.url}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    priority={index === 0}
                    loading={index === 0 ? "eager" : "lazy"}
                    sizes="(max-width: 1200px) 100vw, 50vw"
                    onError={(e) => (e.target.style.display = "none")}
                  />
                </div>
              ) : null
            )}
          </div>
        )}

        <div className={styles.contentContainer}>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>{title}</h1>

            <div className={styles.subtitle}>
              {subtitles.map((subtitle, i) => (
                <p key={i}>
                  {subtitle.split(" ").map((word, index) => (
                    <span key={index}>{word} </span>
                  ))}
                </p>
              ))}
            </div>

            <div className={styles.playDesktop}>
              <PlayDetailsList play={play} />
            </div>

            <div className={styles.description}>
              {[1, 2, 3, 4].map((i, index) => {
                const description = isEnglish
                  ? play?.[`descriptionleft${i}_en`] ||
                    play?.[`descriptionleft${i}`] ||
                    ""
                  : play?.[`descriptionleft${i}`] || "";

                if (!description) return null;

                return (
                  <React.Fragment key={i}>
                    {index > 0 && <hr className={styles.horizontalLine} />}
                    <div
                      dangerouslySetInnerHTML={{
                        __html: description,
                      }}
                    />
                  </React.Fragment>
                );
              })}

              {logos.length > 0 && (
                <div className={styles.logoSection}>
                  <div className={styles.logoContainer}>
                    {logos.map((logo, index) => (
                      <div key={index} className={styles.logoWrapper}>
                        <img
                          src={logo}
                          alt={`Logo ${index + 1}`}
                          className={styles.logoImage}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
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

            {/* Desktop Carousel für desktopImages */}
            {desktopImages.length > 0 && (
              <SecondCarousel
                images={desktopImages.map((img) => img.url)}
                credits={allCredits} // Allgemeine Credits
                credits_de={deCredits} // Deutsche Credits
                credits_en={enCredits} // Englische Credits
                language={i18n.language} // Sprache basierend auf dem aktuellen i18n state
                onImageClick={(index) =>
                  handleImageClick(
                    index,
                    desktopImages.map((img) => img.url)
                  )
                }
              />
            )}

            {videoUrl && <CustomVideoPlayer videoUrl={videoUrl} />}

            {/* Video Credit unter dem Video anzeigen */}
            {play?.videoCredit1 && (
              <div className={styles.videoCredit}>
                <p>{play.videoCredit1}</p>
              </div>
            )}

            {[1, 2, 3, 4].map((i) => (
              <div key={i} className={styles.textright}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: isEnglish
                      ? play?.[`textright${i}_en`] || t(``)
                      : play?.[`textright${i}`] || t(``),
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {isModalOpen && (
          <Modal
            images={modalImages} // Verwenden Sie modalImages hier
            initialIndex={modalImageIndex}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </div>
    </>
  );
};

export default PlayDetails;
