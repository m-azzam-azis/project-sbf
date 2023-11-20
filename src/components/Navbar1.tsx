import React from "react";
import Link from "next/link";
import Kelas from "../app/kelas/page";

export default function Navbar1() {

  return (
    <div className="sticky top-0 z-50 min-w-[1200px] ]">
      <nav className="t-0 bg-transparent px-12 py-4 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <div className="text-white font-extrabold text-3xl ml-10 transition-all hover:bg-white hover:text-black hover:rounded-lg p-2">
            <a href="/">Syllogism</a>
          </div>
          <ul className="flex font-md sm:space-x-4 space-x-2 md:space-x-8 lg:space-x-12">
            <li>
              <Link
                href="/about"
                className="text-white hover:text-our-orange text-md sm:text-lg transition-all"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/kelas"
                className="text-white hover:text-our-orange text-md sm:text-lg transition-all"
              >
                Kelas
              </Link>
            </li>
            <li>
              <Link
                href="/join"
                className="text-white hover:text-our-orange text-md sm:text-lg transition-all"
              >
                Join Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
