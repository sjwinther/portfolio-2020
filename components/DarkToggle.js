import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default class ToggleWrapper extends React.Component {
  state = {
    localDark: undefined,
    prefersDark: undefined
  };
  componentDidMount() {
    this.setState({
      localDark: JSON.parse(localStorage.getItem("dark")),
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
      localStorage.setItem("dark", true);
    }
    if (!dark) {
      document.documentElement.classList.remove("mode-dark");
      localStorage.setItem("dark", false);
    }
  }, [dark]);
  return (
    <button
      className="hidden lg:flex items-center fixed right-0 bottom-0 z-10 w-10 h-6 bg-gray-800 dark:bg-gray-300 rounded-full mr-4 mb-4"
      onClick={() => setDark(!dark)}
    >
      <motion.div
        initial={dark ? { left: 20 } : { left: 4 }}
        animate={dark ? { left: 20 } : { left: 4 }}
        transition={{ type: "tween" }}
        className="absolute w-4 h-4"
      >
        <div className="w-full h-full bg-white dark:bg-black rounded-full transition" />
      </motion.div>
    </button>
  );
};
