import { useState } from "react";
import ArrowBig from "../icons/arrow-big.svg";
import ArrowRight from "../icons/arrow-right.svg";
import Link from "next/link";
import useBreakpoint from "../hooks/useBreakpoint";
import work from "../content/work";

import SkillBadge from "./SkillBadge";

export default () => {
  const [project, setProject] = useState(Object.keys(work)[0]);
  return (
    <section className="px-4 pt-8 md:pt-16 mb-16 md:mb-24">
      <div className="max-w-5xl flex mx-auto">
        <div className="flex-auto sm:pr-8 sm:pb-4">
          <div className="flex items-end mb-8">
            <h2 className="whitespace-no-wrap font-black text-3xl md:text-4xl">
              My work
            </h2>
            <ArrowBig
              style={{ strokeWidth: "2" }}
              className="icon text-5xl md:text-6xl text-pink-600 ml-4"
            />
          </div>
          <ul className="-mx-4">
            {Object.keys(work).map(id => (
              <ListItem
                key={id}
                id={id}
                {...work[id]}
                project={project}
                setProject={setProject}
              />
            ))}
          </ul>
        </div>
        <Link href={"/work/" + work[project].url}>
          <a className="hidden md:block w-1/2 lg:w-3/5">
            <div style={{ paddingBottom: "56.25%" }} className="relative z-10">
              <div
                className={
                  work[project].bgColor + " absolute inset-0 rounded transition"
                }
              />
            </div>
          </a>
        </Link>
      </div>
      <div className="hidden bg-indigo-700 bg-orange-700 bg-green-700 bg-teal-700 bg-purple-700" />
    </section>
  );
};

const ListItem = ({ id, short, type, url, skills, project, setProject }) => {
  const { md } = useBreakpoint();
  const isActive = project === id;
  return (
    <li className="m-2 last:mb-0">
      <Link href={"/work/" + url}>
        <a
          onMouseOver={() => setProject(id)}
          onFocus={() => setProject(id)}
          className={
            (isActive ? "opacity-100 " : "opacity-100 md:opacity-50 ") +
            "flex items-center p-3"
          }
        >
          <div className="flex-auto flex items-center font-medium text-lg">
            {short}
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