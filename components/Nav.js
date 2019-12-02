import Link from "next/link";

export default () => (
  <nav className="px-4">
    <div className="max-w-5xl flex items-center border-b-2 border-gray-200 dark:border-gray-800 py-8 mx-auto">
      <div className="flex-auto">
        <Link href="/">
          <a className="font-black text-2xl hover:bg-gray-200 dark-hover:bg-black py-1">
            SW
          </a>
        </Link>
      </div>
      <div className="-m-2">
        <Link href="/">
          <a className="btn btn-tertiary inline-flex items-center m-2">
            <span className="hidden sm:inline">Download my resume</span>
            <span className="inline sm:hidden">Resume</span>
          </a>
        </Link>
        <Link href="/">
          <a className="btn btn-primary inline-flex items-center m-2">
            <span className="hidden sm:inline">Copy my email</span>
            <span className="inline sm:hidden">Email</span>
          </a>
        </Link>
      </div>
    </div>
  </nav>
);
