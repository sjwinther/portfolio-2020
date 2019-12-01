import { useState } from "react";
import { Check } from "react-feather";

import LoadingSpinner from "../components/LoadingSpinner";

export default () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  return (
    <footer className="px-4">
      <div className="max-w-5xl border-t-2 border-gray-800 py-8 md:py-16 mx-auto">
        <p className="text-xl md:text-center mb-4">
          I'm available for work.{" "}
          <span className="inline-block">Leave your email:</span>
        </p>
        <form
          onSubmit={e => {
            e.preventDefault();
            setLoading(true);
            setTimeout(() => {
              setSubmitted(true);
            }, 2000);
          }}
          className="flex items-center md:justify-center -m-2"
        >
          <input
            type="email"
            placeholder="tim@apple.com"
            required
            className="input w-80 min-w-0 m-2"
          />
          <button
            type="submit"
            className="flex-shrink-0 btn btn-primary relative m-2"
          >
            <span className={loading ? "text-transparent " : ""}>
              Send along
            </span>
            {(submitted || loading) && (
              <div className="absolute inset-0 flex items-center justify-center">
                {submitted ? (
                  <Check strokeWidth="2.5" className="text-xl" />
                ) : loading ? (
                  <LoadingSpinner />
                ) : null}
              </div>
            )}
          </button>
        </form>
      </div>
    </footer>
  );
};
