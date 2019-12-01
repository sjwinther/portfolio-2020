import Head from "../components/Head";
import Nav from "../components/Nav";
import SectionHero from "../components/SectionHero";
import SectionProjects from "../components/SectionProjects";
import SectionFooter from "../components/SectionFooter";

export default () => (
  <>
    <Head />
    <Nav />
    <main>
      <SectionHero />
      <SectionProjects />
    </main>
    <SectionFooter />
  </>
);
