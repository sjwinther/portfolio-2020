import { useState } from "react";
import { Image, ArrowRight } from "react-feather";
import Link from "next/link";
import projects from "../content/projects";

import SkillBadge from "../components/SkillBadge";

export default () => {
  const [project, setProject] = useState("pelion");
  return (
    <section className="px-4 py-8 pb-16 md:py-16 md:pb-24">
      <div className="max-w-5xl flex mx-auto">
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
    </section>
  );
};

const ListItem = ({ id, title, url, skills, project, setProject }) => {
  const isActive = project === id;
  return (
    <li className="m-2 last:mb-0">
      <Link href={url}>
        <a
          onMouseOver={() => setProject(id)}
          className={
            (isActive ? "md:bg-gray-800 " : "") +
            "flex items-center rounded p-3"
          }
        >
          <div className="flex-auto flex items-center">
            {title}
            {skills.map(skill => {
              return (
                <div
                  key={skill}
                  className={
                    (isActive ? " opacity-100" : " opacity-25") + " ml-4"
                  }
                >
                  <SkillBadge skill={skill} size="sm" />
                </div>
              );
            })}
          </div>
          <ArrowRight
            className={
              (isActive ? " opacity-0 md:opacity-100" : " opacity-0") +
              " flex-shrink-0 text-lg"
            }
          />
        </a>
      </Link>
    </li>
  );
};
