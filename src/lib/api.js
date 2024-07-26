export const fetchImages = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;
  const apiToken = process.env.NEXT_PUBLIC_API_TOKEN;

  console.log("API URL:", apiUrl);
  console.log("API Token:", apiToken);

  try {
    const res = await fetch(`${apiUrl}/api/landingpage-images?populate=*`, {
      headers: {
        Authorization: `Bearer ${apiToken}`,
      },
    });

    if (!res.ok) {
      throw new Error(`An error occurred: ${res.status}`);
    }

    const data = await res.json();
    console.log("Fetched data:", data);
    return data.data.map((item) => ({
      url: item.attributes.Bilder.data.attributes.url,
      formats: item.attributes.Bilder.data.attributes.formats,
    }));
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
};
// sdfsdf
