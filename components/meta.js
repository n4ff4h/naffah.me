import Head from "next/head";
import { FULL_NAME, USERNAME, DESCRIPTION } from "../lib/constants";

export default function Meta() {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={DESCRIPTION} />
      <meta name="author" content={FULL_NAME} />
      <meta name="author" content={USERNAME} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicons/site.webmanifest" />
      <link rel="shortcut icon" href="/favicons/favicon.ico" />
      <meta name="twitter:title" content={FULL_NAME} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={`@${USERNAME}`} />
      <meta property="og:site_name" content={FULL_NAME} />
      <meta name="og:title" content={FULL_NAME} />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://www.naffah.me/social_card.jpg"
      />
      <title>{FULL_NAME}</title>
    </Head>
  );
}
