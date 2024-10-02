import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import styles from "../styles/Navbar.module.css";

const Navbar = ({ currentTitle, plays }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const { t, i18n } = useTranslation("common");

  // Menü öffnen oder schließen
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Menü schließen, wenn außerhalb des Menüs geklickt wird
  const closeMenu = (e) => {
    if (
      !e.target.closest(`.${styles.nav}`) &&
      !e.target.closest(`.${styles.menuButton}`)
    ) {
      setMenuOpen(false);
    }
  };

  // Link-Klick-Handler, der das Menü schließt und nach oben scrollt
  const handleLinkClick = () => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  // Sprachwechsel zwischen Deutsch und Englisch
  const switchLanguage = (lang) => {
    router.push(router.pathname, router.asPath, { locale: lang });
  };

  // Fügt Event-Listener zum Schließen des Menüs hinzu/entfernt sie
  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("mousedown", closeMenu);
    } else {
      document.removeEventListener("mousedown", closeMenu);
    }
    return () => {
      document.removeEventListener("mousedown", closeMenu);
    };
  }, [menuOpen]);

  // Scroll nach oben bei Seitenwechsel
  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  // Anzeige des aktuellen Titels basierend auf der Route
  const getDisplayTitle = () => {
    if (router.pathname.startsWith("/plays/")) {
      return currentTitle;
    } else if (router.pathname === "/about") {
      return t("about");
    } else if (router.pathname === "/legal") {
      return t("legal");
    } else if (router.pathname === "/terms") {
      return t("terms");
    } else {
      return "LYSIUS";
    }
  };

  const displayTitle = getDisplayTitle();

  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        {/* Der Titel ist nur ein Text und keine Navigation */}
        <span className={styles.title}>{displayTitle}</span>
      </div>
      <div className={styles.menuButton} onClick={toggleMenu}>
        {menuOpen ? t("close") : t("menu")}
      </div>
      <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
        <ul className={styles.navList}>
          {plays.map((play) => {
            const playTitle =
              i18n.language === "en" ? play.title_en || play.title : play.title;

            return (
              <li key={play.id} onClick={handleLinkClick}>
                <Link href={`/plays/${play.id}`} scroll={false} legacyBehavior>
                  <a
                    className={`${styles.link} ${
                      router.pathname === `/plays/${play.id}`
                        ? styles.active
                        : ""
                    }`}
                  >
                    {playTitle}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
        <ul
          className={`${styles.footerList} ${
            menuOpen ? styles.footerOpen : ""
          }`}
        >
          {/* Lysius Link */}
          <li className={styles.footerItem} onClick={handleLinkClick}>
            <Link href="/" scroll={false} legacyBehavior>
              <a
                className={`${styles.link} ${
                  router.pathname === "/" ? styles.active : ""
                }`}
              >
                Lysius
              </a>
            </Link>
          </li>

          {/* About Link */}
          <li className={styles.footerItem} onClick={handleLinkClick}>
            <Link href="/about" scroll={false} legacyBehavior>
              <a
                className={`${styles.link} ${
                  router.pathname === "/about" ? styles.active : ""
                }`}
              >
                {t("about")}
              </a>
            </Link>
          </li>

          {/* Terms Link */}
          <li onClick={handleLinkClick}>
            <Link href="/terms" scroll={false} legacyBehavior>
              <a
                className={`${styles.link} ${
                  router.pathname === "/terms" ? styles.active : ""
                }`}
              >
                {t("terms")}
              </a>
            </Link>
          </li>

          {/* Legal Link */}
          <li onClick={handleLinkClick}>
            <Link href="/legal" scroll={false} legacyBehavior>
              <a
                className={`${styles.link} ${
                  router.pathname === "/legal" ? styles.active : ""
                }`}
              >
                {t("legal")}
              </a>
            </Link>
          </li>

          {/* Language Switch */}
          <li className={styles.languageSwitch}>
            <span
              onClick={() => switchLanguage("de")}
              className={`${styles.languageLink} ${
                i18n.language === "de" ? styles.active : ""
              }`}
            >
              DE
            </span>
            /
            <span
              onClick={() => switchLanguage("en")}
              className={`${styles.languageLink} ${
                i18n.language === "en" ? styles.active : ""
              }`}
            >
              EN
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
