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
    setMenuOpen(false); // Menü schließen, wenn Sprache gewechselt wird
  };

  // Scroll nach oben bei Seitenwechsel erzwingen
  useEffect(() => {
    const handleRouteChange = () => {
      console.log("Route changed, forcing scroll to top...");
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    // Cleanup-Funktion zum Entfernen des Event-Listeners
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

  const navigateToPlay = (id) => {
    console.log("Navigating to:", `/plays/${id}`);
    router.push(`/plays/${id}`).then(() => {
      // Scroll nach oben erzwingen, nachdem die Route gewechselt wurde
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      console.log("Navigated and scrolled to top.");
    });
  };

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
                {/* Ersetze Link-Komponente zum Testen durch router.push */}
                <span
                  className={`${styles.link} ${
                    router.pathname === `/plays/${play.id}` ? styles.active : ""
                  }`}
                  onClick={() => navigateToPlay(play.id)}
                >
                  {playTitle}
                </span>
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
            <Link href="/" legacyBehavior>
              <a
                className={`${styles.link} ${
                  router.pathname === "/" ? styles.active : ""
                }`}
              >
                Lysius
              </a>
            </Link>
          </li>

          <li onClick={handleLinkClick}>
            <Link href="/about" legacyBehavior>
              <a
                className={`${styles.link} ${
                  router.pathname === "/about" ? styles.active : ""
                }`}
              >
                {t("about")}
              </a>
            </Link>
          </li>

          <li onClick={handleLinkClick}>
            <Link href="/terms" legacyBehavior>
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
            <Link href="/legal" legacyBehavior>
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
