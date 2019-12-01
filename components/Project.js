import Head from "./Head";
import Nav from "./Nav";
import Footer from "./Footer";

import projects from "../content/projects";

import SkillBadge from "./SkillBadge";

export default ({ id, children }) => {
  const project = projects[id];
  const { title } = project;
  return (
    <>
      <Head />
      <Nav />
      <main className="px-4 py-8 md:py-16">
        <section className="max-w-5xl mx-auto">
          <h1 className="font-black text-3xl md:text-4xl mb-8">{title}</h1>
        </section>
        {children}
      </main>
      <Footer />
    </>
  );
};
