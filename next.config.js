module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [
      { source: "/plays", destination: "/", permanent: true },
      { source: "/plays/:slug", destination: "/:slug", permanent: true },
    ];
  },
  i18n: {
    locales: ["en", "de"],
    defaultLocale: "de",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
    ],
  },
  experimental: {
    scrollRestoration: true,
  },
};
