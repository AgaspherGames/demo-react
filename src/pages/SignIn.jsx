import React, { useState } from "react";
import apiService from "../services/apiService";
import { useStore } from "../services/store";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const setToken = useStore(state=>state.setToken)

  function login() {
    apiService.login({ username, password }).then(resp=>setToken(resp.data.token));
  }
  function Register() {}

  return (
    <div class="bg-white py-6 sm:py-8 lg:py-12">
      <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
        <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">
          Login
        </h2>

        <div class="mx-auto max-w-lg rounded-lg border">
          <div class="flex flex-col gap-4 p-4 md:p-8">
            <div>
              <label
                for="username"
                class="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Username
              </label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                name="username"
                class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>

            <div>
              <label
                for="password"
                class="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                type="password"
                class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>

            <button class="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base"
            onClick={() => {	
                login()
             }}
            >
              Log in
            </button>
            <hr />
            <button class="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
