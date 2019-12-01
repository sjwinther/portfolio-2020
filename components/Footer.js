import { useState } from "react";

import LoadingSpinner from "../components/LoadingSpinner";

export default () => {
  const [loading, setLoading] = useState(false);
  return (
    <footer className="px-4">
      <div className="max-w-5xl border-t-2 border-gray-800 py-8 mx-auto">
        <p className="font-medium text-xl text-center mb-4">
          I'm available for work. Write me ✉️, call me ☎️, or leave your email:
        </p>
        <div className="max-w-md flex items-center mx-auto">
          <input
            type="email"
            placeholder="tim@apple.com"
            className="input flex-auto m-2"
          />
          <button
            onClick={() => setLoading(true)}
            className="btn btn-primary relative m-2"
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
