import Layout from "../components/Layout";
import SectionHero from "../components/SectionHero";
import SectionProjects from "../components/SectionProjects";

export default () => (
  <Layout>
    <main className="py-8">
      <SectionHero />
      <SectionProjects />
    </main>
  </Layout>
);
