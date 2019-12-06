import { motion, AnimatePresence } from "framer-motion";
import Peace from "../icons/peace.svg";

import InlineLink from "./InlineLink";
import SkillBadge from "./SkillBadge";

export default () => (
  <section className="px-4 py-8 md:py-16">
    <div className="max-w-5xl mx-auto">
      <h1 className="font-black text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-8">
        <span className="inline-flex items-baseline">
          Hey there, I'm Sebastian.
          <Peace
            style={{ strokeWidth: "2" }}
            className="icon text-3xl sm:text-4xl md:text-5xl text-yellow-600"
          />
        </span>
        <span className="block">
          I'm a digital designer and frontend developer.
        </span>
      </h1>
      <p className="max-w-4xl text-lg md:text-2xl mb-4">
        I think, sketch, design, prototype, and build digital products. I'm
        formally educated in UX research and UI design, and self taught in
        frontend development. I'm available for freelance work.
      </p>
      <p className="max-w-4xl text-lg md:text-2xl mb-8 md:mb-12">
        Think I’d be a good fit for your team?{" "}
        <InlineLink
          href="mailto:sebastianwinther@gmail.com?subject=Hey there!"
          type="send"
          color="text-indigo-600"
        >
          Let's talk
        </InlineLink>
      </p>
      <div className="flex flex-wrap items-center -m-2">
        <div className="text-lg sm:text-xl m-2">I work with</div>
        <SkillBadge skill="ux" size="lg" />
        <SkillBadge skill="web" size="lg" />
        <SkillBadge skill="app" size="lg" />
        <SkillBadge skill="code" size="lg" />
      </div>
    </div>
  </section>
);
