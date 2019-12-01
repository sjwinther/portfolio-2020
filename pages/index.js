import Head from "../components/Head";
import Nav from "../components/Nav";
import SectionHero from "../components/SectionHero";
import SectionProjects from "../components/SectionProjects";
import Footer from "../components/Footer";

export default () => (
  <>
    <Head />
    <Nav />
    <main className="py-8">
      <SectionHero />
      <SectionProjects />
    </main>
    <Footer />
  </>
);
