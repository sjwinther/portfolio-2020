import { useState } from "react";
import { Image, CornerRightDown, ArrowRight } from "react-feather";
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
            <CornerRightDown
              strokeWidth="3"
              className="text-2xl text-gray-500 dark:text-gray-700 ml-6"
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
              " hidden md:flex items-center justify-center w-1/2 lg:w-3/5 rounded transition"
            }
          >
            <Image
              strokeWidth="1.5"
              className="text-6xl text-white opacity-50"
            />
          </a>
        </Link>
      </div>
      <div className="hidden bg-indigo-700 bg-orange-700 bg-green-700 bg-teal-700 bg-purple-700" />
    </section>
  );
};

const ListItem = ({ id, title, url, skills, project, setProject }) => {
  const { md } = useBreakpoint();
  const isActive = project === id;
  return (
    <li className="m-2 last:mb-0">
      <Link href={url}>
        <a
          onMouseOver={() => setProject(id)}
          onFocus={() => setProject(id)}
          className={
            (isActive && md
              ? "bg-gray-200 dark:bg-black "
              : isActive
              ? "opacity-100 "
              : "opacity-100 md:opacity-50 ") + "flex items-center rounded p-3"
          }
        >
          <div className="flex-auto flex items-center text-lg">
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
            strokeWidth="2.5"
            className={
              (isActive
                ? " opacity-50 md:opacity-100"
                : " opacity-50 md:opacity-0") + " text-lg transition"
            }
          />
        </a>
      </Link>
    </li>
  );
};
