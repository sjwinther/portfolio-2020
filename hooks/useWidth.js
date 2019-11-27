import { useState, useEffect } from "react";

const useWidth = ref => {
  const [width, setWidth] = useState();
  const getWidth = () => {
    setWidth(ref.current.getBoundingClientRect().width);
  };
  useEffect(() => {
    window.addEventListener("resize", getWidth());
    return () => {
      window.removeEventListener("resize", getWidth());
    };
  });
  return width;
};
export default useWidth;
