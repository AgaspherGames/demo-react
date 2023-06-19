import React from "react";

export default function Header() {
  return (
    <header class="mb-8 flex items-center justify-between py-4 md:mb-12 md:py-8 xl:mb-16">
      <a
        href="/"
        class="text-black-800 inline-flex items-center gap-2.5 text-2xl font-bold md:text-3xl"
        aria-label="logo"
      >
        WORLDSKILLS GAMES
      </a>

      <div className="flex gap-4">
        <a
          href="#"
          class=" rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:inline-block"
        >
          SignIn
        </a>
        <a
          href="#"
          class=" rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:inline-block"
        >
          SignUp
        </a>
      </div>
    </header>
  );
}
