import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Circle from "../icons/circle.svg";
import Bulb from "../icons/bulb.svg";
import BulbLight from "../icons/bulb-light.svg";

export default class ToggleWrapper extends React.Component {
  state = {
    localDark: undefined,
    prefersDark: undefined
  };
  componentDidMount() {
    this.setState({
      localDark: JSON.parse(sessionStorage.getItem("dark")),
      prefersDark:
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    });
  }
  render() {
    const { localDark, prefersDark } = this.state;
    if (localDark !== undefined && prefersDark !== undefined)
      return <Toggle localDark={localDark} prefersDark={prefersDark} />;
    return null;
  }
}

const Toggle = ({ localDark, prefersDark }) => {
  const [hover, setHover] = useState(false);
  const [dark, setDark] = useState(
    localDark === null ? prefersDark : localDark
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
  const bulbProps = {
    style: { strokeWidth: "1.5" },
    className: "icon text-6xl text-yellow-600 xl:mb-4"
  };
  return (
    <div className="xl:fixed xl:right-0 xl:bottom-0 z-10 flex xl:flex-col-reverse items-end xl:items-center pb-6 xl:p-6">
      <div className="flex-auto">
        <button
          className="relative flex items-center w-12 h-8 bg-gray-800 dark:bg-gray-300 rounded-full"
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
              className="icon icon-fill text-4xl text-white dark:text-black transition"
            />
          </motion.div>
        </button>
      </div>
      {hover ? <BulbLight {...bulbProps} /> : <Bulb {...bulbProps} />}
    </div>
  );
};
