import axios from "axios";

export const fetcher = (url) => axios.get(url).then((res) => res.data);

const isProd = process.env.NODE_ENV === "production";
const strapiUrl = isProd
  ? process.env.NEXT_PUBLIC_STRAPI_API_URL_PROD
  : process.env.NEXT_PUBLIC_STRAPI_API_URL_LOCAL;

export const fetchAPI = async (path) => {
  try {
    const res = await axios.get(`${strapiUrl}${path}`, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export const getPlays = async () => {
  return await fetchAPI("/api/plays");
};
