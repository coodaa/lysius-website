import prisma from "./prisma";

// Lightweight play list for the nav menu - only the fields it actually renders.
export async function getNavPlays() {
  try {
    const plays = await prisma.play.findMany({
      where: { slug: { not: null } },
      select: { id: true, slug: true, title: true, title_en: true },
      orderBy: { id: "asc" },
    });
    return JSON.parse(JSON.stringify(plays));
  } catch (error) {
    console.error("Error fetching nav plays:", error);
    return [];
  }
}
