import { useEffect, useState } from "react";
import { getPlays } from "../lib/api";

const TestPage = () => {
  const [plays, setPlays] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPlays();
      if (data) {
        setPlays(data.data);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Plays</h1>
      {plays.length > 0 ? (
        <ul>
          {plays.map((play) => (
            <li key={play.id}>{play.attributes.Titel}</li>
          ))}
        </ul>
      ) : (
        <p>No plays found.</p>
      )}
    </div>
  );
};

export default TestPage;
