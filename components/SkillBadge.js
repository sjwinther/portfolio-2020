import { BookOpen, Layout, Code, Smartphone } from "react-feather";

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
      <BookOpen />
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
        <div className={color + " mr-2 sm:mr-3"}>{icon}</div>
        <div className="font-bold">{title}</div>
      </div>
    );
  if (size === "sm") return <div className={color}>{icon}</div>;
  return null;
};
