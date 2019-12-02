import { useEffect } from "react";
import Head from "next/head";
import "../css/base.css";

const CustomHead = () => {
  useEffect(() => {
    document.documentElement.classList.add("mode-dark");
  });
  const title = "Sebastian Winther";
  const description = "Portfolio site of Sebastian Winther";
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.png" />
      <link
        href="https://fonts.googleapis.com/css?family=Public+Sans:400,700,900&display=swap"
        rel="stylesheet"
      />
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

export default CustomHead;
