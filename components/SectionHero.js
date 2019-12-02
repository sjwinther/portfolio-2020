import { ExternalLink } from "react-feather";

import SkillBadge from "../components/SkillBadge";

export default () => (
  <section className="px-4 py-8 md:py-16">
    <div className="max-w-5xl mx-auto">
      <h1 className="font-black text-3xl md:text-4xl mb-8">
        Hi, I'm Sebastian. 👋
        <span className="block">
          I'm a digital designer and frontend developer.
        </span>
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
          className="inline-flex items-center hover:bg-gray-200 dark-hover:bg-black"
        >
          Write me an email
          <ExternalLink className="text-gray-600 ml-2" />
        </a>
        .
      </p>
      <dl className="flex flex-wrap items-center -m-2">
        <div className="text-lg sm:text-xl m-2">I work with</div>
        <SkillBadge skill="ux" size="lg" />
        <SkillBadge skill="web" size="lg" />
        <SkillBadge skill="app" size="lg" />
        <SkillBadge skill="code" size="lg" />
      </dl>
    </div>
  </section>
);
