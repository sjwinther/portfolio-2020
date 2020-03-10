import Peace from "../icons/peace.svg";

import InlineLink from "./InlineLink";
import SkillBadge from "./SkillBadge";

export default () => (
  <section className="px-4 pt-8 md:pt-16 mb-16 md:mb-24">
    <div className="max-w-5xl mx-auto">
      <h1 className="font-black text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-8">
        <span className="relative">
          Hey, I'm Sebastian.
          <Peace
            style={{ strokeWidth: "2" }}
            className="absolute right-0 bottom-0 icon text-3xl sm:text-4xl md:text-5xl text-yellow-600 -mr-8 sm:-mr-10 md:-mr-12 mb-1 sm:mb-2"
          />
        </span>
        <span className="block">
          I'm a digital designer and frontend developer.
        </span>
      </h1>
      <p className="max-w-3xl text-lg md:text-2xl mb-8 md:mb-12">
        I'm formally educated in UX research and UI design, and self taught in
        frontend development. I currently work at the Danish digital newspaper <InlineLink
          href="https://www.zetland.dk/"
          target="_zetland"
          color="text-red-600"
        >
          Zetland
        </InlineLink>.
      </p>
      <div className="flex flex-wrap items-center -m-1 md:-m-2">
        <div className="text-base sm:text-lg md:text-xl m-1 md:m-2">
          I work with
        </div>
        <SkillBadge skill="ux" size="lg" />
        <SkillBadge skill="web" size="lg" />
        <SkillBadge skill="product" size="lg" />
        <SkillBadge skill="code" size="lg" />
      </div>
    </div>
  </section>
);
