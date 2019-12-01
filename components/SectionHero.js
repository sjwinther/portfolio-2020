import { ExternalLink } from "react-feather";

import SkillBadge from "../components/SkillBadge";

export default () => (
  <section className="px-4 py-8 md:py-16">
    <div className="max-w-5xl mx-auto">
      <h1 className="font-black text-3xl md:text-5xl mb-8">
        Hi, I'm Sebastian. 👋 I'm a digital designer and frontend developer.
      </h1>
      <p className="max-w-4xl text-lg md:text-2xl mb-4">
        I think products, sketch products, design products, prototype products,
        and build products – mostly in React. I'm available for freelance work.
      </p>
      <p className="max-w-4xl text-lg md:text-2xl mb-8 md:mb-12">
        Do you want to work together?{" "}
        <a
          href="mailto:sebastianwinther@gmail.com?subject=Let's get coffee"
          target="_email"
          rel="noopener"
          className="inline-flex items-center hover:bg-black"
        >
          Write me an email
          <ExternalLink className="text-gray-600 ml-2" />
        </a>
        .
      </p>
      <dl className="flex flex-wrap items-center -m-2">
        <dt className="text-lg m-2">I work with</dt>
        <dd className="m-2">
          <SkillBadge skill="ux" size="lg" />
        </dd>
        <dd className="m-2">
          <SkillBadge skill="web" size="lg" />
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
