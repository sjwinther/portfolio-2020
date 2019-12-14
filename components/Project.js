import ExternalLink from "../icons/external-link.svg";
import work from "../content/work";

import SkillBadge from "./SkillBadge";

export default ({ id, children }) => {
  const project = work[id];
  const { title, year, publicUrl, skills, bgColor } = project;
  return (
    <main className="px-4 pt-8 md:pt-16 mb-16">
      <article className="max-w-5xl mx-auto">
        <h1 className="max-w-3xl font-black text-2xl sm:text-3xl md:text-4xl mb-4">
          {title}
        </h1>
        <dl className="-mx-2 mb-4">
          <Definition content={year} />
          <Definition content={publicUrl} href={publicUrl} />
        </dl>
        <div className="flex flex-wrap items-center -mx-2 mb-8">
          {skills.map(skill => (
            <SkillBadge skill={skill} size="lg" />
          ))}
        </div>
        {children}
      </article>
    </main>
  );
};

const Definition = ({ content, href }) => (
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

export const ImageFullWidth = ({ bgColor }) => (
  <div style={{ paddingBottom: "56.25%" }} className="relative mb-16 md:mb-24">
    <div className={bgColor + " absolute inset-0 rounded"} />
  </div>
);

export const TextShort = ({ children }) => (
  <p className="max-w-4xl text-lg md:text-xl mb-12">{children}</p>
);

export const TextWithHeading = ({ title, content }) => (
  <section className="flex flex-wrap items-baseline mb-16 last:mb-0">
    <h3 className="w-full md:w-1/4 font-medium text-lg md:text-xl mb-4">
      {title}
    </h3>
    <p className="w-full md:w-3/4 text-lg md:text-xl">{content}</p>
  </section>
);
