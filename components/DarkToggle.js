import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Circle from "../icons/circle.svg";
import Bulb from "../icons/bulb.svg";
import BulbLight from "../icons/bulb-light.svg";

export default ({ showToggle }) => {
  const sessionDark = sessionStorage.getItem("dark");
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [hover, setHover] = useState(false);
  const [dark, setDark] = useState(
    sessionDark ? JSON.parse(sessionDark) : prefersDark
  );
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("mode-dark");
      sessionStorage.setItem("dark", true);
    }
    if (!dark) {
      document.documentElement.classList.remove("mode-dark");
      sessionStorage.setItem("dark", false);
    }
  }, [dark]);
  return showToggle ? (
    <button
      className="relative xl:fixed xl:right-0 xl:bottom-0 flex items-center w-12 h-8 bg-gray-400 dark:bg-gray-700 rounded-full mb-8 xl:m-4"
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => setDark(!dark)}
    >
      <motion.div
        initial={dark ? { left: 22, rotate: 180 } : { left: 7, rotate: 0 }}
        animate={dark ? { left: 22, rotate: 180 } : { left: 7, rotate: 0 }}
        transition={{ type: "tween" }}
        className="absolute w-5 h-5 flex items-center justify-center"
      >
        <Circle
          style={{ strokeWidth: "2" }}
          className="icon icon-fill text-4xl text-white dark:text-gray-900 transition"
        />
      </motion.div>
    </button>
  ) : null;
};
