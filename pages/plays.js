import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { PrismaClient } from "@prisma/client";

let prisma;

if (!global.prisma) {
  prisma = new PrismaClient();
  if (process.env.NODE_ENV === "development") {
    global.prisma = prisma;
  }
} else {
  prisma = global.prisma;
}

export async function handler(req, res) {
  try {
    console.log("API /api/plays hit");
    const plays = await prisma.play.findMany();
    console.log("Fetched plays from database:", plays);
    res.status(200).json(plays);
  } catch (error) {
    console.error("Error fetching plays:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export async function getServerSideProps({ locale }) {
  console.log("getServerSideProps called");

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
  console.log("API URL:", apiUrl);
  let plays = [];

  try {
    const res = await fetch(`${apiUrl}/api/plays`);
    console.log("Fetch response status:", res.status);

    if (res.ok) {
      plays = await res.json();
      console.log("Plays fetched successfully:", plays);
      plays = plays.map((play) => ({
        ...play,
        videoUrl: play.videoUrl
          .replace("youtu.be/", "youtube.com/embed/")
          .replace("watch?v=", "embed/"),
      }));
    } else {
      console.error("Failed to fetch plays:", res.status);
    }
  } catch (error) {
    console.error("Error fetching plays:", error);
  }

  return {
    props: {
      plays,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default function Home({ plays }) {
  const { t } = useTranslation("common");

  console.log("Rendering Home component");

  return (
    <div>
      <h1>{t("theater_pieces")}</h1>
      <ul>
        {plays.map((play) => (
          <li key={play.id}>
            <h2>{play.title}</h2>
            <p>{play.description}</p>
            {play.imageUrl && <img src={play.imageUrl} alt={play.title} />}
            {play.videoUrl && (
              <div>
                <iframe
                  width="560"
                  height="315"
                  src={play.videoUrl}
                  title={play.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
