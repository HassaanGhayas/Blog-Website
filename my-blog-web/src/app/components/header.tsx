import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-black fixed top-0 w-full flex align-center justify-center bg-white h-[80px] m-0 p-0 z-10 shadow-drop-bottom">
      <div className="max-w-[1200px] w-11/12 flex items-center justify-between text-black">
        <span className="text-xl sm:text-2xl font-bold text-orange-400">
          Blossom
        </span>
        <ul className="flex items-center ml-0 text-sm lg:text-base sm:ml-0 font-semibold gap-3 sm:gap-10 ">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="/contact">
            <span className="h-8 w-20 sm:w-24 sm:h-10 flex items-center justify-center rounded-full text-white bg-orange-400">
              <li>Contact</li>
            </span>
          </Link>
        </ul>
        <div className="flex items-center justify-center hidden md:block">
          <div className="flex items-center justify-center">
            <input
              type="text"
              placeholder="Search for a blog"
              className="rounded-full pl-4 text-black h-7 "
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1117.65 3a7.5 7.5 0 01-1.35 13.65z"
              />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}
