import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  try {
    const result = await db.query("SELECT * FROM News");
    console.log("Fetched news from database:", result); // Logge das Ergebnis
    const news = result[0];
    console.log("News content to return:", news); // Logge den genauen Wert, der zurückgegeben wird
    res.status(200).json(news);
  } catch (error) {
    console.error("Failed to fetch news:", error.message);
    res.status(500).json({ error: "Failed to fetch news" });
  }
}
