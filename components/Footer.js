import { useState } from "react";

import LoadingSpinner from "../components/LoadingSpinner";

export default () => {
  const [loading, setLoading] = useState(false);
  return (
    <footer className="px-4">
      <div className="max-w-5xl border-t-2 border-gray-800 py-8 md:py-16 mx-auto">
        <p className="text-xl md:text-center mb-4">
          I'm available for work. Leave your email:
        </p>
        <div className="flex items-center md:justify-center -m-2">
          <input
            type="email"
            placeholder="tim@apple.com"
            className="input w-64 m-2"
          />
          <button
            onClick={() => setLoading(true)}
            className="flex-shrink-0 btn btn-primary relative m-2"
          >
            <span className={loading ? "text-transparent" : ""}>
              Send it along
            </span>
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <LoadingSpinner />
              </div>
            )}
          </button>
        </div>
      </div>
    </footer>
  );
};
