export default () => (
  <footer className="px-4">
    <div className="max-w-5xl border-t-2 border-gray-800 py-16 mx-auto">
      <p className="font-medium text-xl text-center mb-4">
        I'm available for work. Write me ✉️, call me ☎️, or leave your email:
      </p>
      <div className="max-w-md flex items-center mx-auto">
        <input
          type="email"
          placeholder="tim@apple.com"
          className="input flex-auto m-2"
        />
        <button className="btn btn-primary m-2">Send it along</button>
      </div>
    </div>
  </footer>
);
