import { Edit, Layout, Code, Smartphone } from "react-feather";

export default ({ skill, size }) => {
  const title =
    skill === "ux"
      ? "User research"
      : skill === "web"
      ? "Web design"
      : skill === "app"
      ? "App design"
      : skill === "code"
      ? "Frontend development"
      : null;
  const icon =
    skill === "ux" ? (
      <Edit />
    ) : skill === "web" ? (
      <Layout />
    ) : skill === "app" ? (
      <Smartphone />
    ) : skill === "code" ? (
      <Code />
    ) : null;
  const color =
    skill === "ux"
      ? "text-indigo-500"
      : skill === "web"
      ? "text-blue-500"
      : skill === "app"
      ? "text-green-500"
      : skill === "code"
      ? "text-yellow-500"
      : null;
  if (size === "lg")
    return (
      <div className="inline-flex items-center text-lg sm:text-xl m-2">
        <div
          style={{ transform: "translateY(-2px)" }}
          className={color + " mr-2 sm:mr-3"}
        >
          {icon}
        </div>
        <div className="font-medium">{title}</div>
      </div>
    );
  if (size === "sm")
    return (
      <div style={{ transform: "translateY(-0.5px)" }} className={color}>
        {icon}
      </div>
    );
  return null;
};
