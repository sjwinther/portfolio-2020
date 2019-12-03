import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
  return (
    <button
      className="hidden lg:flex items-center fixed right-0 bottom-0 z-10 w-12 h-8 bg-gray-800 dark:bg-gray-300 rounded-full mr-4 mb-4"
      onClick={() => setDark(!dark)}
    >
      <motion.div
        initial={dark ? { left: 22 } : { left: 6 }}
        animate={dark ? { left: 22 } : { left: 6 }}
        transition={{ type: "tween" }}
        className="absolute w-5 h-5"
      >
        <div className="w-full h-full bg-white dark:bg-black rounded-full shadow transition" />
      </motion.div>
    </button>
  );
};
