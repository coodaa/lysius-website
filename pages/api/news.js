// pages/api/news.js

import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  try {
    // Abrufen der ersten Zeile aus der News-Tabelle
    const news = await prisma.news.findFirst(); // Verwende `findFirst`, um den ersten Eintrag zu erhalten
    if (!news) {
      res.status(404).json({ error: "No news found" });
      return;
    }
    console.log("Fetched news from database:", news);
    res.status(200).json(news); // Gebe das gefundene `news`-Objekt zurück
  } catch (error) {
    console.error("Failed to fetch news:", error.message);
    res.status(500).json({ error: "Failed to fetch news" });
  }
}
