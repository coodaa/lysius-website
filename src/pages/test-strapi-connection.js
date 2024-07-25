import { useEffect, useState } from "react";
import { checkStrapiConnection } from "../lib/api";

export default function TestStrapiConnection() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await checkStrapiConnection();
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Strapi Connection Test</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>No data found or error occurred.</p>
      )}
    </div>
  );
}
