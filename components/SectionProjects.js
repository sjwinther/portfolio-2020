import { useState } from "react";
import ArrowBig from "../icons/arrow-big.svg";
import ArrowRight from "../icons/arrow-right.svg";
import Link from "next/link";
import useBreakpoint from "../hooks/useBreakpoint";
import projects from "../content/projects";

import SkillBadge from "./SkillBadge";

export default () => {
  const [project, setProject] = useState(Object.keys(projects)[0]);
  return (
    <section className="px-4 py-8 pb-16 md:py-16 md:pb-24">
      <div className="max-w-5xl flex mx-auto">
        <div className="flex-auto sm:pr-8 sm:pb-4">
          <div className="flex items-end mb-8">
            <h2 className="font-black text-4xl">My projects</h2>
            <ArrowBig
              style={{ strokeWidth: "2" }}
              className="icon text-6xl text-pink-600 ml-4"
            />
          </div>
          <ul className="-mx-4">
            {Object.keys(projects).map(id => (
              <ListItem
                key={id}
                id={id}
                {...projects[id]}
                project={project}
                setProject={setProject}
              />
            ))}
          </ul>
        </div>
        <Link href={projects[project].url}>
          <a
            className={
              projects[project].bgColor +
              " hidden md:block w-1/2 lg:w-3/5 rounded transition"
            }
          />
        </Link>
      </div>
      <div className="hidden bg-indigo-700 bg-orange-700 bg-green-700 bg-teal-700 bg-purple-700" />
    </section>
  );
};

const ListItem = ({ id, title, type, url, skills, project, setProject }) => {
  const { md } = useBreakpoint();
  const isActive = project === id;
  return (
    <li className="m-2 last:mb-0">
      <Link href={url}>
        <a
          onMouseOver={() => setProject(id)}
          onFocus={() => setProject(id)}
          className={
            (isActive ? "opacity-100 " : "opacity-100 md:opacity-50 ") +
            "flex items-center p-3"
          }
        >
          <div className="flex-auto flex items-center font-medium text-lg">
            {title}
            {skills.map(skill => {
              return (
                <div key={skill} className="ml-4">
                  <SkillBadge skill={skill} size="sm" />
                </div>
              );
            })}
          </div>
          <ArrowRight
            style={{ strokeWidth: "4" }}
            className={
              (isActive
                ? " opacity-25 md:opacity-100"
                : " opacity-25 md:opacity-0") +
              " icon text-2xl text-gray-800 dark:text-gray-400 transition"
            }
          />
        </a>
      </Link>
    </li>
  );
};
