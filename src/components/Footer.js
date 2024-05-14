import Link from "next/link";

export default function Footer() {
  return (
    <footer className="fixed -bottom-4 w-full bg-black-400 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] text-white flex flex-col justify-center items-center p-2 md:p-7 h-16">
      <nav className="flex flex-wrap justify-center items-center space-x-4 md:space-x-15">
        <ul className="flex gap-4">
          <li>
            <Link legacyBehavior href="/page1">
              <a className="text-white hover:text-gray-200 text-sm md:text-xl font-semibold transition duration-300 ease-in-out">
                Page 1 🔥
              </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/page2">
              <a className="text-white hover:text-gray-200 text-sm md:text-xl font-semibold transition duration-300 ease-in-out">
                Page 2 🏃
              </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/page3">
              <a className="text-white hover:text-gray-200 text-sm md:text-xl font-semibold transition duration-300 ease-in-out">
                Page 3️ 🏋️‍♂️
              </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/page4">
              <a className="text-white hover:text-gray-200 text-sm md:text-xl font-semibold transition duration-300 ease-in-out">
                Page 4 ⚽
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
