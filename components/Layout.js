import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import ScrollToTop from "./ScrollToTop";
import Landscape from "./LandscapeWarning";
import styles from "../styles/Layout.module.css";

const hasPlays = (list) => Array.isArray(list) && list.length > 0;

const Layout = ({ children, plays: playsProp }) => {
  const [currentTitle, setCurrentTitle] = useState("LYSIUS");
  const [fetchedPlays, setFetchedPlays] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const plays = hasPlays(playsProp) ? playsProp : fetchedPlays;

  // Fallback for pages that don't provide navPlays via getStaticProps/
  // getServerSideProps (e.g. the 404 page).
  useEffect(() => {
    if (hasPlays(playsProp)) return;

    const fetchPlays = async () => {
      try {
        const res = await fetch("/api/plays");
        if (res.ok) {
          const data = await res.json();
          setFetchedPlays(data || []);
        } else {
          console.error("Failed to fetch plays:", res.status);
        }
      } catch (error) {
        console.error("Error fetching plays:", error);
      }
    };
    fetchPlays();
  }, [playsProp]);

  const childrenWithProps = React.Children.map(children, (child) =>
    React.isValidElement(child)
      ? React.cloneElement(child, { setCurrentTitle, setIsModalOpen })
      : child
  );

  return (
    <div className={styles.pageContainer}>
      <ScrollToTop />
      {/* <Landscape /> */}
      <Navbar
        currentTitle={currentTitle}
        plays={plays}
        isModalOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
      />
      <div className={styles.rightSidebar}></div>
      <main className={styles.contentContainer}>{childrenWithProps}</main>
    </div>
  );
};

export default Layout;
