import { Image, ExternalLink } from "react-feather";
import projects from "../content/projects";

import Head from "./Head";
import Nav from "./Nav";
import SkillBadge from "./SkillBadge";
import Footer from "./Footer";

export default ({ id, children }) => {
  const project = projects[id];
  const { title, year, publicUrl, skills, bgColor } = project;
  return (
    <>
      <Head />
      <Nav />
      <main className="px-4 py-8 md:py-16">
        <article className="max-w-5xl mx-auto">
          <h1 className="font-black text-3xl md:text-4xl mb-4">{title}</h1>
          <dl className="-mx-2 mb-4">
            <Data content={year} />
            <Data content={publicUrl} href={publicUrl} />
          </dl>
          <dl className="flex flex-wrap items-center -mx-2 mb-8">
            {skills.map(skill => (
              <dd className="m-2">
                <SkillBadge skill={skill} size="lg" />
              </dd>
            ))}
          </dl>
          <p className="max-w-4xl text-lg md:text-xl mb-12">
            Here's a project TL;DR. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
          <div
            style={{ paddingBottom: "56.25%" }}
            className="relative mb-16 md:mb-24"
          >
            <div
              className={
                bgColor +
                " absolute inset-0 flex items-center justify-center rounded"
              }
            >
              <Image
                strokeWidth="1.5"
                className="text-6xl text-white opacity-50"
              />
            </div>
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
      <Footer />
    </>
  );
};

const Data = ({ content, href }) => (
  <dd
    style={{ "font-feature-settings": '"smcp" 1' }}
    className="inline-block font-bold uppercase m-2"
  >
    {href ? (
      <a
        href={"https://" + href}
        target="_blank"
        rel="noopener"
        className="inline-flex items-center"
      >
        {content}
        <ExternalLink
          style={{ transform: "translateY(-2px)" }}
          className="text-xl text-gray-600 ml-2"
        />
      </a>
    ) : (
      content
    )}
  </dd>
);

const Section = ({ title, content }) => (
  <section className="flex flex-wrap items-baseline mb-16">
    <h3 className="w-full md:w-1/4 font-bold text-lg md:text-xl mb-4">
      {title}
    </h3>
    <p className="w-full md:w-3/4 text-lg md:text-xl">{content}</p>
  </section>
);
