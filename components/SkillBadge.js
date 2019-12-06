import Edit from "../icons/edit.svg";
import Layout from "../icons/layout.svg";
import Code from "../icons/code.svg";
import Phone from "../icons/phone.svg";

export default ({ skill, size }) => {
  const color =
    skill === "ux"
      ? "text-indigo-600"
      : skill === "web"
      ? "text-blue-600"
      : skill === "app"
      ? "text-green-600"
      : skill === "code"
      ? "text-yellow-600"
      : null;
  const iconProps = {
    style: { strokeWidth: "2.5" },
    className: color + " icon text-2xl sm:text-3xl"
  };
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
      <Edit {...iconProps} />
    ) : skill === "web" ? (
      <Layout {...iconProps} />
    ) : skill === "app" ? (
      <Phone {...iconProps} />
    ) : skill === "code" ? (
      <Code {...iconProps} />
    ) : null;
  if (size === "lg")
    return (
      <div className="inline-flex items-center text-lg sm:text-xl m-2">
        <div className="mr-1 sm:mr-2">{icon}</div>
        <div className="font-medium">{title}</div>
      </div>
    );
  if (size === "sm") return icon;
  return null;
};
