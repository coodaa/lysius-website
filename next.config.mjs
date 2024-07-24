const nextConfig = {
  images: {
    unoptimized: true,
  },
  compiler: {
    styledComponents: true,
  },
  env: {
    NEXT_PUBLIC_STRAPI_API_URL: process.env.NEXT_PUBLIC_STRAPI_API_URL,
    NEXT_PUBLIC_STRAPI_API_URL_LOCAL:
      process.env.NEXT_PUBLIC_STRAPI_API_URL_LOCAL,
    NEXT_PUBLIC_API_TOKEN: process.env.NEXT_PUBLIC_API_TOKEN,
  },
};

export default nextConfig;
