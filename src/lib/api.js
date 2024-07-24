import { supabase } from './supabase';

export const fetchGalleries = async () => {
  try {
    const { data, error } = await supabase
      .from('galleries')
      .select(`
        id,
        images (
          url
        )
      `);

    if (error) {
      throw error;
    }

    console.log("Fetched data:", data); // Debug-Ausgabe

    // Extrahiere die Bild-URLs und filtere leere Arrays
    const images = data.flatMap(item => item.images.map(image => image.url)).filter(url => url);

    return images;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};


// Funktion zum Abrufen der Plays
export const getPlays = async () => {
  try {
    const { data, error } = await supabase
      .from('plays') // Ersetze 'plays' durch den Namen deiner Tabelle
      .select('*');

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
