import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="description"
            content="Der gemeinnützige Verein Lysius e.V. verbindet seit 2019 eine Initiative von Kulturschaffenden, die an der Schnittstelle von Musik, Theater, Gesellschaft, Politik und insbesondere am Lehrstück arbeitet und forscht."
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
          <meta
            property="og:title"
            content="Lysius e.V. - Förderung von Kunst, Kultur und Wissenschaft"
          />
          <meta
            property="og:description"
            content="Lysius e.V. verbindet eine Initiative von Kulturschaffenden, die an der Schnittstelle von Musik, Theater und Gesellschaft forscht."
          />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/dmpiogwyy/image/upload/v1722353263/Landingpage/egbmhvzu33mdjswom7iq.jpg"
          />
          <meta property="og:url" content="https://www.lysius.org/" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Lysius e.V." />

          {/* Twitter Card Tags for Rich Preview */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Lysius e.V." />
          <meta
            name="twitter:description"
            content="Förderung von Kunst, Kultur und Wissenschaft im Sinne der Völkerverständigung."
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
