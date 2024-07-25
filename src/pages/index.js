// pages/index.js

import { useState, useEffect } from "react";
import { fetchImages } from "../lib/api";

const HomePage = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchImages();
      setImages(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Landing Page Images</h1>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {images.map((image, index) => (
          <div key={index} style={{ margin: "10px" }}>
            <img src={image.formats.small.url} alt={`Image ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
