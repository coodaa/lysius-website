// src/pages/impressum.js
import { fetcher } from "../lib/api";
import { useEffect, useState } from "react";

const Impressum = () => {
  const [impressum, setImpressum] = useState(null);

  useEffect(() => {
    const getImpressum = async () => {
      const data = await fetcher("/impressum");
      setImpressum(data);
    };

    getImpressum();
  }, []);

  if (!impressum) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Impressum</h1>
      <p>{impressum.content}</p>
    </div>
  );
};

export default Impressum;
