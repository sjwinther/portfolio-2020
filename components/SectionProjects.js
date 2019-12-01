import { useState } from "react";
import Link from "next/link";

const projects = {
  1: {
    title: "Pelion",
    skills: ["bg-pink-500", "bg-green-500"]
  },
  2: {
    title: "Tales from Odysïa",
    skills: ["bg-blue-500", "bg-pink-500", "bg-yellow-500"]
  },
  3: {
    title: "Initiativet",
    skills: ["bg-green-500", "bg-yellow-500"]
  },
  4: {
    title: "NORD.investments",
    skills: ["bg-blue-500", "bg-pink-500", "bg-green-500"]
  },
  5: {
    title: "Klaus Riskær Pedersen",
    skills: ["bg-blue-500", "bg-pink-500"]
  }
};

export default () => {
  const [project, setProject] = useState(1);
  return (
    <section className="px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="flex">
          <div className="flex-auto sm:pr-8">
            <h2 className="font-black text-4xl mb-8">My projects ☟</h2>
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

const ListItem = ({ id, title, skills, project, setProject }) => {
  const isActive = project === id;
  return (
    <li>
      <Link href="/">
        <a
          onMouseOver={() => setProject(id)}
          className={
            (isActive ? "bg-gray-800 " : "") +
            "flex items-center rounded p-2 m-2"
          }
        >
          {title}
          {skills.map(skill => (
            <div
              key={skill}
              style={{ transform: "translateY(1px)" }}
              className={
                skill +
                (isActive ? " opacity-100" : " opacity-25") +
                " h-2 w-2 rounded-full ml-2"
              }
            />
          ))}
        </a>
      </Link>
    </li>
  );
};
