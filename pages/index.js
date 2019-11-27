import React from "react";

import Head from "../components/Head";
import LoadingSpinner from "../components/LoadingSpinner";

const Home = () => (
  <>
    <Head />
    <div class="h-screen flex items-center text-5xl text-gray-300 bg-gray-900">
      <LoadingSpinner />
    </div>
  </>
);
export default Home;
