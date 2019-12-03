import { ExternalLink } from "react-feather";

export default ({ href, target, size, children }) => (
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
    <ExternalLink
      style={size === "sm" ? { transform: "translateY(-1px)" } : undefined}
      className={(size === "sm" ? "ml-1 " : "ml-2 ") + "text-gray-600"}
    />
  </a>
);
