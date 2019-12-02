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
      <div className="inline-flex items-center bg-gray-200 dark:bg-gray-800 rounded px-3 md:px-4 py-2 md:py-3">
        <div className={color + " md:text-xl mr-3 md:mr-4"}>{icon}</div>
        <div className="font-bold text-sm md:text-base">{title}</div>
      </div>
    );
  if (size === "sm") return <div className={color}>{icon}</div>;
  return null;
};
