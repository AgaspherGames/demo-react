import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Games from "./pages/Games";
import Header from "./components/UI/Header/Header";
import apiService from "./services/apiService";
import { useStore } from "./services/store";
import SignIn from "./pages/SignIn";
import localStorageService from "./services/localStorageService";
import GamePage from "./pages/GamePage";

function App() {

  const setGames = useStore(state=>state.setGames)
  const setToken = useStore(state=>state.setToken)

  useEffect(() => {	 
    apiService.fetchGames().then(data=>{
      setGames(data.data)
      setToken(localStorageService.loadToken())
    })
  },[])

  return (
    <div class="bg-white pb-6 sm:pb-8 lg:pb-12">
      <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
        <Header />
        <Routes>
          <Route path="/" element={<Games />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/game/:slug" element={<GamePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
