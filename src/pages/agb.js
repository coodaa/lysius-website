// src/pages/agb.js
import { fetcher } from "../lib/api";
import { useEffect, useState } from "react";

const AGB = () => {
  const [terms, setTerms] = useState(null);

  useEffect(() => {
    const getTerms = async () => {
      const data = await fetcher("/terms");
      setTerms(data);
    };

    getTerms();
  }, []);

  if (!terms) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>AGB</h1>
      <p>{terms.content}</p>
    </div>
  );
};

export default AGB;
