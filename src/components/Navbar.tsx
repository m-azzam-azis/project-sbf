import React from "react";
import Link from "next/link";
import Kelas from "../app/kelas/page";

export default function Navbar() {
  return (
    <div className="sticky top-0 w-full bg-white">
      <nav className="t-0 bg-white px-12 py-6">
        <div className="flex items-center justify-between">
          <div className="text-black font-extrabold text-3xl ml-10">
            <a href="/">Syllogism</a>
          </div>
          <div className="border-r-2 border-white h-8 min-[320px]:hidden"></div>
          <ul className="flex sm:space-x-4 space-x-2 md:space-x-8 lg:space-x-12">
            <li>
              <Link
                href="/about"
                className="text-black hover:text-light-purple text-xs sm:text-lg"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/kelas"
                className="text-black hover:text-light-purple text-xs sm:text-lg"
              >
                Kelas
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="text-black hover:text-light-purple text-xs sm:text-lg"
              >
                Login/Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
