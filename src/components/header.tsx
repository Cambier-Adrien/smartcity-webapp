import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-2 z-40 w-fit bg-white custom-shadow py-3 px-6 flex items-center gap-12 rounded-xl left-1/2 -translate-x-1/2">
      <Link
        href="/"
        className="font-extrabold text-lg md:text-xl text-black tracking-tight hover:text-gray-800 transition-colors focus:outline-none"
      >
        Imagine ta ville
      </Link>
      <nav>
        <Link
          href="/about"
          className="text-gray-700 font-medium text-base md:text-lg hover:text-black transition-colors"
        >
          À propos
        </Link>
      </nav>
    </header>
  );
}
