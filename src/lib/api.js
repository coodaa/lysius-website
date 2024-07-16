import axios from "axios";

export const fetcher = (url) => axios.get(url).then((res) => res.data);

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

export const fetchAPI = async (path) => {
  try {
    const res = await axios.get(`${API_URL}${path}`, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export const getPlays = async () => {
  return await fetchAPI("/plays");
};

export const getPlayById = async (id) => {
  return await fetchAPI(`/plays/${id}?populate=Bilder`);
};
