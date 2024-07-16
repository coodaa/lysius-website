// src/pages/test-fetch.js
import { useEffect, useState } from "react";
import { getPlays } from "../lib/api";

const TestFetch = () => {
  const [plays, setPlays] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPlays();
      setPlays(data?.data || []);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Test Fetch</h1>
      <ul>
        {plays.map((play) => (
          <li key={play.id}>{play.attributes.Beschreibung}</li>
        ))}
      </ul>
    </div>
  );
};

export default TestFetch;
