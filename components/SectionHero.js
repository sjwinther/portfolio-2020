import { motion, AnimatePresence } from "framer-motion";

import InlineLink from "./InlineLink";
import SkillBadge from "./SkillBadge";

export default () => (
  <section className="px-4 py-8 md:py-16">
    <div className="max-w-5xl mx-auto">
      <h1 className="font-black text-2xl sm:text-3xl md:text-4xl mb-8">
        Hey there, I'm Sebastian.{" "}
        <motion.span
          initial={{ rotate: 15, x: 0, y: -6, scale: 1.1 }}
          animate={{ rotate: -15, x: -4, y: -4, scale: 1.1 }}
          transition={{ delay: 1, flip: 3 }}
          className="inline-block select-none"
        >
          👋
        </motion.span>
        <span className="block">
          I'm a digital designer and frontend developer.
        </span>
      </h1>
      <p className="max-w-4xl text-lg md:text-2xl mb-4">
        I think products, sketch products, design products, prototype products,
        and build products – mostly in React. I'm available for freelance work.
      </p>
      <p className="max-w-4xl text-lg md:text-2xl mb-8 md:mb-12">
        Think I’d be a good fit for your team?{" "}
        <InlineLink href="mailto:sebastianwinther@gmail.com?subject=Hey there!">
          Let's talk
        </InlineLink>
        .
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
