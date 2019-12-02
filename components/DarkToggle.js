import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default () => {
  const [dark, setDark] = useState(
    typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  useEffect(() => {
    dark && document.documentElement.classList.add("mode-dark");
    !dark && document.documentElement.classList.remove("mode-dark");
  }, [dark]);
  return (
    <button
      className="fixed right-0 bottom-0 z-10 w-10 h-6 flex items-center bg-gray-900 dark:bg-gray-300 rounded-full mr-4 mb-4"
      onClick={() => setDark(!dark)}
    >
      <motion.div
        animate={dark ? { left: 20 } : { left: 4 }}
        transition={{ type: "tween" }}
        className="absolute w-4 h-4"
      >
        <div className="w-full h-full bg-gray-300 dark:bg-gray-900 rounded-full transition" />
      </motion.div>
    </button>
  );
};
