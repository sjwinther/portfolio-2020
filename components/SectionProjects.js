import { useState } from "react";
import Link from "next/link";

const projects = {
  1: { title: "Pelion" },
  2: { title: "Tales from Odysïa" },
  3: { title: "Initiativet" },
  4: { title: "NORD.investments" },
  5: { title: "Klaus Riskaer Pedersen" }
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
                  title={projects[id].title}
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

const ListItem = ({ id, title, project, setProject }) => {
  const isActive = project === id;
  return (
    <li>
      <Link href="/">
        <a
          onMouseOver={() => setProject(id)}
          className={(isActive ? "bg-gray-800 " : "") + "block rounded p-2 m-2"}
        >
          {title}
        </a>
      </Link>
    </li>
  );
};
