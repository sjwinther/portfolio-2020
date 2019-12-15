import { useState } from "react";
import Airplane from "../icons/airplane.svg";
import AirplaneFly from "../icons/airplane-fly.svg";
import ExternalLink from "../icons/external-link.svg";

export default ({ href, target, download, size, type, color, children }) => {
  const [hover, setHover] = useState(false);
  const iconProps = {
    style: {
      strokeWidth: "3",
      transform: type === "send" && hover ? "scale(1.1)" : "scale(1)"
    },
    className:
      (size === "sm" ? "text-2xl ml-1 " : "text-3xl ml-2 ") +
      (color ? color + " " : "text-gray-600 ") +
      "icon"
  };
  return (
    <a
      href={href}
      target={
        typeof target === "string" ? target : target ? "_blank" : undefined
      }
      rel={target ? "noopener" : undefined}
      download={download || undefined}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="inline-flex items-center hover:bg-gray-200 dark-hover:bg-black"
    >
      {children}
      {type === "send" && hover ? (
        <AirplaneFly {...iconProps} />
      ) : type === "send" ? (
        <Airplane {...iconProps} />
      ) : (
        <ExternalLink {...iconProps} />
      )}
    </a>
  );
};
