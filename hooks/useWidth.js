import { useState, useEffect } from "react";

export default ref => {
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
