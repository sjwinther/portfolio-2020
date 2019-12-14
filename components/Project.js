import ExternalLink from "../icons/external-link.svg";
import projects from "../content/projects";

import SkillBadge from "./SkillBadge";

export default ({ id, children }) => {
  const project = projects[id];
  const { title, year, publicUrl, skills, bgColor } = project;
  return (
    <main className="px-4 pt-8 md:pt-16 mb-16">
      <article className="max-w-5xl mx-auto">
        <h1 className="max-w-4xl font-black text-2xl sm:text-3xl md:text-4xl mb-4">
          {title}
        </h1>
        <dl className="-mx-2 mb-4">
          <Data content={year} />
          <Data content={publicUrl} href={publicUrl} />
        </dl>
        <div className="flex flex-wrap items-center -mx-2 mb-8">
          {skills.map(skill => (
            <SkillBadge skill={skill} size="lg" />
          ))}
        </div>
        <p className="max-w-4xl text-lg md:text-xl mb-12">
          Here's a project TL;DR. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div
          style={{ paddingBottom: "56.25%" }}
          className="relative mb-16 md:mb-24"
        >
          <div className={bgColor + " absolute inset-0 rounded"} />
        </div>
        <Section
          title="Here's a heading"
          content="Here's some actual project content. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        />
        <Section
          title="Here's a heading"
          content="Here's some more project content. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
        {children}
      </article>
    </main>
  );
};

const Data = ({ content, href }) => (
  <dd className="inline-block font-medium uppercase m-2">
    {href ? (
      <a
        href={"https://" + href}
        target="_blank"
        rel="noopener"
        className="inline-flex items-center hover:bg-gray-200 dark-hover:bg-black py-1"
      >
        {content}
        <ExternalLink
          style={{ strokeWidth: "3" }}
          className="icon text-2xl text-gray-600 ml-1"
        />
      </a>
    ) : (
      <div className="py-1">{content}</div>
    )}
  </dd>
);

const Section = ({ title, content }) => (
  <section className="flex flex-wrap items-baseline mb-16 last:mb-0">
    <h3 className="w-full md:w-1/4 font-medium text-lg md:text-xl mb-4">
      {title}
    </h3>
    <p className="w-full md:w-3/4 text-lg md:text-xl">{content}</p>
  </section>
);
