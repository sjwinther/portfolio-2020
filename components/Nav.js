import Link from "next/link";

export default () => (
  <nav className="px-4">
    <div className="max-w-5xl flex items-center py-4 md:py-8 mx-auto">
      <Link href="/">
        <a className="font-flexa font-bold text-2xl hover:bg-gray-200 dark-hover:bg-black py-1">
          SW
        </a>
      </Link>
    </div>
  </nav>
);
