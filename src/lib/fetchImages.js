import { supabase } from "./supabase";

export const fetchImages = async () => {
  const { data, error } = await supabase.storage
    .from("supabase")
    .list("files", {
      limit: 100,
      offset: 0,
      sortBy: { column: "name", order: "asc" },
    });

  if (error) {
    console.error("Error fetching images:", error);
    return [];
  }

  const images = data
    .filter((file) => file.name !== ".emptyFolderPlaceholder") // Exclude empty folder placeholders
    .map((file) => {
      const {
        data: { publicUrl },
        error: urlError,
      } = supabase.storage.from("supabase").getPublicUrl(`files/${file.name}`);

      if (urlError) {
        console.error(`Error getting public URL for ${file.name}:`, urlError);
        return { name: file.name, url: undefined };
      }

      console.log(`Generated URL for ${file.name}: ${publicUrl}`);
      return { name: file.name, url: publicUrl };
    });

  console.log("Fetched images:", images);
  return images;
};
