import { useState } from "react";
import Link from "next/link";
import SkillBage from "../components/SkillBadge";

const projects = {
  1: {
    title: "Pelion",
    href: "/project/pelion",
    skills: ["ux", "ui", "code"]
  },
  2: {
    title: "Tales from Odysïa",
    href: "/project/odysia",
    skills: ["ui", "code"]
  },
  3: {
    title: "Initiativet",
    href: "/project/initiativet",
    skills: ["ux", "ui", "code"]
  },
  4: {
    title: "NORD.investments",
    href: "/project/nord",
    skills: ["ui", "app"]
  },
  5: {
    title: "Klaus Riskær Pedersen",
    href: "/project/krp",
    skills: ["ui", "code"]
  }
};

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
          <div className="hidden sm:block w-1/2 md:w-3/5">
            <div className="h-full bg-gray-800 rounded" />
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
