import React, { useEffect, useState } from "react";
import Game from "../components/Games/Game/Game";
import instance from "../utils/http";
import { useStore } from "../services/store";
import apiService from "../services/apiService";

export default function Games() {
  const games = useStore((state) => state.games);
  const setGames = useStore((state) => state.setGames);

  const pages =Math.ceil
  (games.totalElements / games.size) || 1;
  const [page, setPage] = useState(1);

  const [sortBy, setSortBy] = useState("title");
  const [sortDir, setSortDir] = useState("asc");

  useEffect(() => {
    apiService
      .fetchGames({
        sortBy,
        sortDir,
        page,
      })
      .then((data) => {
        setGames(data.data);
      });
  }, [page, sortBy, sortDir]);

  return (
    <div>
      <div className="flex justify-center gap-16 mb-12">
        <p className="text-3xl font-semibold">Total Games: {games.totalElements}</p>
        <div className="flex">
          <button
            href="#"
            class={`rounded-lg rounded-r-none  ${
              sortBy == "title" ? "bg-gray-300" : "bg-gray-200"
            } px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:inline-block`}
            onClick={() => {
              setSortBy("title");
            }}
          >
            Title
          </button>
          <button
            href="#"
            class={`${
              sortBy == "popular" ? "bg-gray-300" : "bg-gray-200"
            } border-x border-gray-300 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:inline-block`}
            onClick={() => {
              setSortBy("popular");
            }}
          >
            Popular
          </button>
          <button
            href="#"
            class={`rounded-lg rounded-l-none ${
              sortBy == "uploaddate" ? "bg-gray-300" : "bg-gray-200"
            } px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:inline-block`}
            onClick={() => {
              setSortBy("uploaddate");
            }}
          >
            Upload Date
          </button>
        </div>
        <div className="flex">
          <button
            href="#"
            class={`rounded-lg rounded-r-none ${
              sortDir == "asc" ? "bg-gray-300" : "bg-gray-200"
            } px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:inline-block`}
            onClick={() => {
              setSortDir("asc");
            }}
          >
            Asc
          </button>
          <button
            href="#"
            class={`rounded-lg rounded-l-none border-l border-gray-300 ${
              sortDir == "desc" ? "bg-gray-300" : "bg-gray-200"
            } px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:inline-block`}
            onClick={() => {
              setSortDir("desc");
            }}
          >
            Desc
          </button>
        </div>
      </div>
      <div className="w-1/2 mx-auto flex flex-col gap-6">
        {games.content &&
          games.content.map((game) => <Game key={game.slug} game={game} />)}
      </div>

      <nav className="w-fit mx-auto mt-6 ">
        <ul class="inline-flex -space-x-px">
          {Array(pages)
            .fill("")
            .map((_, ind) => {
              const page = ind + 1;
              return (
                <li>
                  <button
                    href="#"
                    class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                    onClick={() => {
                      setPage(page);
                    }}
                  >
                    {page}
                  </button>
                </li>
              );
            })}
        </ul>
      </nav>
    </div>
  );
}
