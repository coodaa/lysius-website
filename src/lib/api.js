import { supabase } from './supabase';

// Funktion zum Abrufen der Galerien und ihrer Bilder
export const fetchGalleries = async () => {
  try {
    const { data, error } = await supabase
      .from('galleries')
      .select(`
        id,
        name,
        images (
          url
        )
      `);

    if (error) {
      throw error;
    }

    console.log("Fetched data:", data); // Debug-Ausgabe

    // Verarbeiten der Daten, um sie für die Anzeige vorzubereiten
    const galleries = data.map(gallery => ({
      id: gallery.id,
      name: gallery.name,
      images: gallery.images ? gallery.images.map(image => image.url).filter(url => url) : [],
    }));

    return galleries;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

// Exportieren der fetcher Funktion
export const fetcher = (url) => fetch(url).then((res) => res.json());

// Funktion zum Abrufen eines bestimmten Plays nach ID
export const getPlayById = async (id) => {
  try {
    const { data, error } = await supabase
      .from('plays')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error("Error fetching play by ID:", error);
    return null;
  }
};

// Funktion zum Abrufen der Plays
export const getPlays = async () => {
  try {
    const { data, error } = await supabase
      .from("plays") // Ersetze 'plays' durch den Namen deiner Tabelle
      .select("*");

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
