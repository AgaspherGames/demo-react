import React from "react";
import { useStore } from "../../../services/store";
import apiService from "../../../services/apiService";
import localStorageService from "../../../services/localStorageService";

export default function Header() {
  const {token, setToken, username, setUsername} = useStore((state) => state);

  function signout() {
    apiService.signout(token).then(()=>{
      setToken(null),
      setUsername(''),
      localStorageService.deleteData()
    })
  }

  return (
    <header class="mb-8 flex items-center justify-between py-4 md:mb-12 md:py-8 xl:mb-16">
      <a
        href="/"
        class="text-black-800 inline-flex items-center gap-2.5 text-2xl font-bold md:text-3xl"
        aria-label="logo"
      >
        WORLDSKILLS GAMES
      </a>

      <div className="flex gap-4 items-center">
        {token ? (
          <>
          
          <p className="text-2xl ">{username}</p>
          <button onClick={() => {	signout() }} class=" rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:inline-block">
            LogOut
          </button>
          </>
        ) : (
          <>
            <a
              href="/signin"
              class=" rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:inline-block"
            >
              SignIn/SignUp
            </a>
          </>
        )}
      </div>
    </header>
  );
}
