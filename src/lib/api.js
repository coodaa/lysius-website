import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_API_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export const fetchImages = async () => {
  try {
    const { data, error } = await supabase
      .from("landingpage_images")
      .select("image_url");

    if (error) {
      console.error("Error fetching images from Supabase:", error);
      return [];
    }

    return data.map((item) => item.image_url);
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
};
