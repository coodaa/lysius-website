/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.lysius.org",
  generateRobotsTxt: false,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/admin/*", "/en/legal", "/en/terms", "/legal", "/terms"],
  alternateRefs: [
    { href: "https://www.lysius.org", hreflang: "de" },
    { href: "https://www.lysius.org/en", hreflang: "en" },
  ],
  transform: async (config, path) => {
    const base = {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };

    if (path === "/") {
      const { PrismaClient } = require("@prisma/client");
      const prisma = new PrismaClient();
      try {
        const landingImages = await prisma.landingpageimg.findMany({
          select: { url: true, name: true, description: true },
        });
        base.images = landingImages
          .filter((img) => img.url)
          .map((img) => ({
            loc: new URL(img.url),
            caption: img.description || `Lysius e.V. Theater Berlin – ${img.name}`,
            title: `Lysius e.V. Theater Berlin – ${img.name}`,
          }));
      } finally {
        await prisma.$disconnect();
      }
    }

    return base;
  },
  additionalPaths: async () => {
    const { PrismaClient } = require("@prisma/client");
    const prisma = new PrismaClient();
    try {
      const plays = await prisma.play.findMany({
        select: {
          slug: true,
          title: true,
          title_en: true,
          topImage1: true, topImage2: true, topImage3: true,
          topImage4: true, topImage5: true, topImage6: true,
          imageUrl1: true, imageUrl2: true, imageUrl3: true,
          imageUrl4: true, imageUrl5: true, imageUrl6: true,
          imageUrl7: true, imageUrl8: true, imageUrl9: true, imageUrl10: true,
          imageCredit1_de: true, imageCredit1_en: true,
          imageCredit2_de: true, imageCredit2_en: true,
          imageCredit3_de: true, imageCredit3_en: true,
          imageCredit4_de: true, imageCredit4_en: true,
          imageCredit5_de: true, imageCredit5_en: true,
          imageCredit6_de: true, imageCredit6_en: true,
          imageCredit7_de: true, imageCredit7_en: true,
          imageCredit8_de: true, imageCredit8_en: true,
          imageCredit9_de: true, imageCredit9_en: true,
          imageCredit10_de: true, imageCredit10_en: true,
        },
      });
      return plays
        .filter((play) => play.slug)
        .map((play) => {
          const title = play.title || play.title_en || "Lysius";
          const images = [];
          for (let i = 1; i <= 10; i++) {
            const url = play[`imageUrl${i}`] || play[`topImage${i}`];
            if (!url) continue;
            const caption =
              play[`imageCredit${i}_de`] || play[`imageCredit${i}_en`] ||
              `Lysius e.V. Theater Berlin – ${title}`;
            images.push({ loc: new URL(url), caption, title: `Lysius e.V. Theater Berlin – ${title}` });
          }
          return {
            loc: `/${play.slug}`,
            changefreq: "weekly",
            priority: 0.8,
            alternateRefs: [
              { href: `https://www.lysius.org/${play.slug}`, hreflang: "de" },
              { href: `https://www.lysius.org/en/${play.slug}`, hreflang: "en" },
            ],
            ...(images.length ? { images } : {}),
          };
        });
    } finally {
      await prisma.$disconnect();
    }
  },
};
