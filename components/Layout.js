import { useEffect, useState } from "react";

import Head from "./Head";
import Nav from "./Nav";
import Footer from "./Footer";

export default ({ children }) => (
  <>
    <Head />
    <Nav />
    {children}
    <Footer />
  </>
);
