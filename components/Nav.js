import Link from "next/link";

export default () => (
  <nav className="px-4 py-8">
    <div className="max-w-5xl flex items-center mx-auto">
      <div className="flex-auto">
        <div className="h-10 w-10 bg-gray-300 rounded-full" />
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
