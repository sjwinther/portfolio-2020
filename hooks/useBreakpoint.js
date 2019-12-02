import { useState, useEffect } from "react";

export default () => {
  const [width, setWidth] = useState();
  const getWidth = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", getWidth());
    return () => {
      window.removeEventListener("resize", getWidth());
    };
  });
  let breakpoint = {};
  if (width >= 1280) {
    breakpoint.xl = true;
  }
  if (width >= 1024) {
    breakpoint.lg = true;
  }
  if (width >= 768) {
    breakpoint.md = true;
  }
  if (width >= 640) {
    breakpoint.sm = true;
  }
  return breakpoint;
};
