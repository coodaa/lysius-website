import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Meta-Informationen */}
          <meta
            name="description"
            content="Lysius - Interweaving performance cultures"
          />
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />

          {/* Open Graph Meta Tags for Rich Preview */}
          <meta property="og:title" content="Lysius" />
          <meta
            property="og:description"
            content="Interweaving performance cultures"
          />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/dmpiogwyy/image/upload/v1722353263/Landingpage/egbmhvzu33mdjswom7iq.jpg"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="627" />
          <meta property="og:url" content="https://www.lysius.org" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Lysius" />

          {/* Twitter Card Tags for Rich Preview */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Lysius" />
          <meta
            name="twitter:description"
            content="Interweaving performance cultures"
          />
          <meta
            name="twitter:image"
            content="https://res.cloudinary.com/dmpiogwyy/image/upload/v1722353263/Landingpage/egbmhvzu33mdjswom7iq.jpg"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
