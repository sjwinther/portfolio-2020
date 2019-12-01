import Head from "./Head";
import Nav from "./Nav";
import Footer from "./Footer";

export default ({ title, children }) => (
  <>
    <Head />
    <Nav />
    <main className="px-4 py-8">
      <section className="max-w-5xl mx-auto">
        <h1 className="font-black text-3xl md:text-4xl mb-8">{title}</h1>
      </section>
      {children}
    </main>
    <Footer />
  </>
);
