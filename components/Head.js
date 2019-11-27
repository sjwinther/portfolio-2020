import Head from "next/head";
import "../css/base.css";

const CustomHead = () => {
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.png" />
      <title></title>
      <meta name="description" content="" />
      <meta name="og:title" content="" />
      <meta name="og:site_name" content="Pelion" />
      <meta name="og:description" content="" />
      <meta name="og:image" content="/og-image.png" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="" />
      <meta name="twitter:title" content="" />
      <meta name="twitter:description" content="" />
      <meta name="twitter:image" content="/og-image.png" />
    </Head>
  );
};

export default CustomHead;
