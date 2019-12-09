import { useEffect, useState } from "react";

import Head from "./Head";
import Nav from "./Nav";
import Footer from "./Footer";

export default ({ children }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <>
      <Head />
      <Nav />
      {children}
      <Footer />
    </>
  );
};
