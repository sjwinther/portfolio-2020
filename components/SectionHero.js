import SkillBadge from "../components/SkillBadge";

export default () => (
  <section className="px-4 py-8 md:py-16">
    <div className="max-w-5xl mx-auto">
      <h1 className="font-black text-3xl md:text-5xl mb-8">
        Hi, I'm Sebastian. 👋 I'm a freelance UX designer and frontend
        developer.
      </h1>
      <p className="text-lg md:text-2xl mb-12">
        I sketch products, think products, design products, prototype products,
        and build products – mostly in React. I'm available for freelance work
        from January. Do you want to work together? Write me an email.
      </p>
      <dl className="flex flex-wrap items-center -m-2">
        <dt className="font-medium text-lg m-2">I do</dt>
        <dd className="m-2">
          <SkillBadge skill="ux" size="lg" />
        </dd>
        <dd className="m-2">
          <SkillBadge skill="ui" size="lg" />
        </dd>
        <dd className="m-2">
          <SkillBadge skill="app" size="lg" />
        </dd>
        <dd className="m-2">
          <SkillBadge skill="code" size="lg" />
        </dd>
      </dl>
    </div>
  </section>
);
