// utils/api.js

export const fetchPlayDetails = async (playId, lang) => {
  try {
    const response = await fetch(`/api/play-details?id=${playId}&lang=${lang}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch play details:", error);
    throw error;
  }
};
