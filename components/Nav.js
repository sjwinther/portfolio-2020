import Link from "next/link";

export default () => (
  <nav className="px-4">
    <div className="max-w-5xl flex items-center border-b-2 border-gray-800 py-8 mx-auto">
      <div className="flex-auto">
        <div className="h-10 w-10 bg-indigo-500 rounded-full" />
      </div>
      <div className="-m-2">
        <Link href="/">
          <a className="btn btn-tertiary m-2">Download my resume</a>
        </Link>
        <Link href="/">
          <a className="btn btn-primary m-2">Copy my email</a>
        </Link>
      </div>
    </div>
  </nav>
);
