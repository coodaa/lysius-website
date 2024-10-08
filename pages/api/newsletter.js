// pages/api/newsletter.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    try {
      // Überprüfen, ob die E-Mail bereits existiert
      const existingSubscription = await prisma.newsletter.findFirst({
        where: { email },
      });

      if (existingSubscription) {
        return res.status(409).json({ error: "Email already subscribed" });
      }

      // E-Mail in der Datenbank speichern
      await prisma.newsletter.create({
        data: { email },
      });

      return res.status(201).json({ message: "Successfully subscribed" });
    } catch (error) {
      console.error("Failed to subscribe:", error);
      return res.status(500).json({ error: "Failed to subscribe" });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
}
