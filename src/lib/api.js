export const fetchImages = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/landingpage-images?populate=*`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
      }
    );

    if (!res.ok) {
      throw new Error(`An error occurred: ${res.status}`);
    }

    const data = await res.json();
    return data.data.map((item) => ({
      url: item.attributes.Bilder.data.attributes.url,
      formats: item.attributes.Bilder.data.attributes.formats,
    }));
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
};
