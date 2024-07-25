import { useEffect, useState } from "react";
import { checkSupabaseConnection } from "../lib/api";

export default function TestConnection() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await checkSupabaseConnection();
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Supabase Connection Test</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>No data found or error occurred.</p>
      )}
    </div>
  );
}
