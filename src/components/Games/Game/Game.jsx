import React from "react";

export default function Game({ game }) {
  return (
    <div className="border p-8">
      <div className="flex gap-4 items-center">
        <h3 className="text-lg font-bold">{game.title}</h3>
        <p>by {game.author}</p>
      </div>
      <div className="flex gap-4">
        <img className="w-1/3" src={'http://127.0.0.1:8000/storage'+game.thumbnail} alt="" />
        <p className="w-2/3">{game.description}</p>
      </div>
    </div>
  );
}
