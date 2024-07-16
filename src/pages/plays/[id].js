// src/pages/plays/[id].js
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { getPlayById } from "../../lib/api";

const PlayDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [play, setPlay] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        const data = await getPlayById(id);
        setPlay(data?.data);
      };
      fetchData();
    }
  }, [id]);

  if (!play) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{play.attributes.Beschreibung}</h1>
      {/* Weitere Details des Theaterstücks hier anzeigen */}
    </div>
  );
};

export default PlayDetails;
