import { useState } from "react";
import Link from "next/link";
import { Image } from "react-feather";

import projects from "../content/projects";

import SkillBage from "../components/SkillBadge";

export default () => {
  const [project, setProject] = useState("1");
  return (
    <section className="px-4 py-8 md:py-16">
      <div className="max-w-5xl mx-auto">
        <div className="flex">
          <div className="flex-auto sm:pr-8">
            <h2 className="font-black text-4xl mb-8">My projects</h2>
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
          <div className="hidden sm:flex items-center justify-center w-1/2 md:w-3/5 bg-gray-800 rounded">
            <Image strokeWidth="1.5" className="text-6xl text-gray-700" />
          </div>
        </div>
      </div>
    </section>
  );
};

const ListItem = ({ id, title, href, skills, project, setProject }) => {
  const isActive = project === id;
  return (
    <li className="m-2 last:mb-0">
      <Link href={href}>
        <a
          onMouseOver={() => setProject(id)}
          className={
            (isActive ? "md:bg-gray-800 " : "") +
            "flex items-center rounded p-3"
          }
        >
          <div>{title}</div>
          {skills.map(skill => {
            return (
              <div
                key={skill}
                className={
                  (isActive ? " opacity-100" : " opacity-25") + " ml-4"
                }
              >
                <SkillBage skill={skill} size="sm" />
              </div>
            );
          })}
        </a>
      </Link>
    </li>
  );
};
