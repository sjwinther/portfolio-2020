import Edit from "../icons/edit.svg";
import Web from "../icons/web.svg";
import Product from "../icons/product.svg";
import Code from "../icons/code.svg";

export default ({ skill, size }) => {
  const color =
    skill === "ux"
      ? "text-indigo-600"
      : skill === "web"
      ? "text-blue-600"
      : skill === "product"
      ? "text-green-600"
      : skill === "code"
      ? "text-orange-600"
      : null;
  const iconProps = {
    style: { strokeWidth: "2.5" },
    className: color + " icon text-3xl"
  };
  const title =
    skill === "ux"
      ? "User research"
      : skill === "web"
      ? "Web design"
      : skill === "product"
      ? "Product design"
      : skill === "code"
      ? "Frontend development"
      : null;
  const icon =
    skill === "ux" ? (
      <Edit {...iconProps} />
    ) : skill === "web" ? (
      <Web {...iconProps} />
    ) : skill === "product" ? (
      <Product {...iconProps} />
    ) : skill === "code" ? (
      <Code {...iconProps} />
    ) : null;
  if (size === "lg")
    return (
      <div className="inline-flex items-center font-flexa text-base sm:text-lg md:text-xl m-1 md:m-2">
        <div className="mr-2">{icon}</div>
        <div className="font-medium">{title}</div>
      </div>
    );
  if (size === "sm") return icon;
  return null;
};
