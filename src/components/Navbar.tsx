import React from "react";
import Link from "next/link";
import Kelas from "../app/kelas/page";

export default function Navbar() {
  return (
    <div className="sticky top-0 bg-white z-50 min-w-[1200px]">
      <nav className="t-0 bg-white px-12 py-4">
        <div className="flex items-center justify-between">
          <div className="text-black font-extrabold text-3xl ml-10 transition-all hover:bg-black hover:text-white hover:rounded-lg p-2">
            <a href="/">Syllogism</a>
          </div>
          <ul className="flex sm:space-x-4 space-x-2 md:space-x-8 lg:space-x-12">
            <li>
              <Link
                href="/"
                className="text-black hover:text-our-orange text-md sm:text-lg transition-all"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/kelas"
                className="text-black hover:text-our-orange text-md sm:text-lg transition-all"
              >
                Kelas
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="text-black hover:text-our-orange text-md sm:text-lg transition-all"
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
