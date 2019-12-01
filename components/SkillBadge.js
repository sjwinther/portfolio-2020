import { BookOpen, Layout, Code, Smartphone } from "react-feather";

export default ({ skill, size }) => {
  const title =
    skill === "ux"
      ? "UX research"
      : skill === "ui"
      ? "UI design"
      : skill === "app"
      ? "App design"
      : skill === "code"
      ? "Frontend development"
      : null;
  const icon =
    skill === "ux" ? (
      <BookOpen />
    ) : skill === "ui" ? (
      <Layout />
    ) : skill === "app" ? (
      <Smartphone />
    ) : skill === "code" ? (
      <Code />
    ) : null;
  const color =
    skill === "ux"
      ? "text-indigo-500"
      : skill === "ui"
      ? "text-blue-500"
      : skill === "app"
      ? "text-green-500"
      : skill === "code"
      ? "text-yellow-500"
      : null;
  if (size === "lg")
    return (
      <div className="inline-flex items-center bg-gray-800 rounded px-4 py-3">
        <div className={color + " text-xl mr-4"}>{icon}</div>
        <div className="font-medium">{title}</div>
      </div>
    );
  if (size === "sm") return <div className={color}>{icon}</div>;
  return null;
};
