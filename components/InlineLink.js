import ExternalLink from "../icons/external-link.svg";
import Airplane from "../icons/Airplane.svg";

export default ({ href, target, size, type, color, children }) => {
  const iconProps = {
    style: { strokeWidth: "3" },
    className:
      (size === "sm" ? "text-2xl ml-1 " : "text-3xl ml-2 ") +
      (color ? color + " " : "text-gray-600 ") +
      "icon"
  };
  return (
    <a
      href={href}
      target={
        target && typeof target === "string"
          ? target
          : target
          ? "_blank"
          : undefined
      }
      rel={target ? "noopener" : undefined}
      className="inline-flex items-center hover:bg-gray-200 dark-hover:bg-black"
    >
      {children}
      {type === "send" ? (
        <Airplane {...iconProps} />
      ) : (
        <ExternalLink {...iconProps} />
      )}
    </a>
  );
};
