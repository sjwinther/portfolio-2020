import { useEffect, useState } from "react";
import { useForm } from "@statickit/react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, CornerRightDown } from "react-feather";

import LoadingSpinner from "./LoadingSpinner";
import InlineLink from "./InlineLink";

export default () => {
  return (
    <footer className="px-4">
      <div className="max-w-5xl flex flex-wrap md:flex-no-wrap border-t-2 border-gray-200 dark:border-gray-800 py-8 md:py-16 mx-auto">
        <div className="flex-auto flex flex-col md:pr-8">
          <div className="flex-auto max-w-md text-lg mb-8">
            <p className="mb-8">
              I design and code. I have previously worked with companies like{" "}
              <InlineLink href="https://www.pelion.app" size="sm">
                Pelion
              </InlineLink>
              ,{" "}
              <InlineLink href="https://www.initiativet.dk" size="sm">
                Initiativet
              </InlineLink>
              ,{" "}
              <InlineLink href="https://www.readwise.io" size="sm">
                Readwise
              </InlineLink>
              , &{" "}
              <InlineLink href="https://www.nord.investments" size="sm">
                NORD.investments
              </InlineLink>
              .
            </p>
            <p className="mb-4">
              I'm available for work.{" "}
              <span className="inline-block">Leave your email:</span>
            </p>
            <Form />
          </div>
          <dl>
            <dd className="mb-1">Sebastian Winther</dd>
            <dd className="mb-1">Copenhagen, Denmark</dd>
            <dd>
              <a
                href="mailto:sebastianwinther@gmail.com"
                target="_email"
                rel="noopener"
                className="hover:bg-gray-200 dark-hover:bg-black"
              >
                sebastianwinther@gmail.com
              </a>{" "}
              — Say hi!
            </dd>
          </dl>
        </div>
        <div className="flex-shrink-0 self-end order-first md:order-last mb-8 md:mb-2">
          <div className="flex items-end mb-4">
            <h3 className="font-black text-2xl">That's me!</h3>
            <CornerRightDown
              strokeWidth="3"
              className="text-xl text-gray-500 dark:text-gray-700 ml-2"
            />
          </div>
          <img
            src="/sebastian.jpg"
            alt="That's me!"
            className="h-64 w-64 rounded"
          />
        </div>
      </div>
    </footer>
  );
};

const Form = () => {
  const [email, setEmail] = useState("");
  const [state, submit] = useForm({
    site: "2b52df695624",
    form: "contact-form"
  });
  const { submitting, succeeded, errors } = state;
  useEffect(() => {
    succeeded && setEmail("");
  }, [succeeded]);
  return (
    <form onSubmit={submit} className="flex -m-2">
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        type="email"
        placeholder="tim@apple.com"
        required
        className="input w-full max-w-xs m-2"
      />
      <button
        type="submit"
        className="flex-shrink-0 btn btn-primary relative w-32 m-2"
      >
        <span className={succeeded || submitting ? "text-transparent" : ""}>
          {errors && !!errors.length ? "Try again" : "Send along"}
        </span>
        {(succeeded || submitting) && (
          <div className="absolute inset-0 flex items-center justify-center">
            <AnimatePresence exitBeforeEnter>
              {succeeded ? (
                <motion.div
                  key="succeeded"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Check strokeWidth="2.5" className="text-xl" />
                </motion.div>
              ) : submitting ? (
                <motion.div
                  key="submitting"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <LoadingSpinner />
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        )}
      </button>
    </form>
  );
};
