import { supabase } from "./supabase";

export const uploadImage = async (file) => {
  const filePath = `public/${file.name}`;
  const { data, error } = await supabase.storage
    .from(supabase) // Ersetzen Sie 'your_bucket_name' durch den tatsächlichen Namen des Buckets
    .upload(filePath, file);

  if (error) {
    console.error("Error uploading image:", error);
    return null;
  }

  const { publicURL, error: publicURLError } = supabase.storage
    .from(supabase)
    .getPublicUrl(filePath);

  if (publicURLError) {
    console.error("Error getting public URL:", publicURLError);
    return null;
  }

  return publicURL;
};
