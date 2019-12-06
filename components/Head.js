import { useEffect } from "react";
import Head from "next/head";
import "../css/base.css";

export default () => {
  const title = "Sebastian Winther";
  const description =
    "I'm a digital designer and frontend developer. I think, sketch, design, prototype, and build digital products.";
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.png" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:site_name" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:image" content="/og-image.png" />
      <meta name="twitter:card" content="summary" />
      {/* <meta name="twitter:site" content="" /> */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/og-image.png" />
    </Head>
  );
};
