import React, { useEffect, useState } from "react";
import apiService from "../services/apiService";
import { useParams } from "react-router-dom";

export default function USerPage() {
  const [user, setUser] = useState();

  const { username } = useParams();

  useEffect(() => {
    apiService.fetchUser(username).then((resp) => setUser(resp.data.data));
  }, []);
  console.log(user);
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-8 ">{user?.username}</h2>
      <div>
        <p className="mb-4">Authored Games</p>
        <div>
          {user?.authoredGames.map((game) => (
            <div className="border p-4">
              <div className="flex justify-between mb-2">
                <h3>{game.title}</h3>
                <p>asdads</p>
              </div>
              <div className="flex">
                <img className="w-1/2" src="" alt="" />
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
                  excepturi voluptatibus nobis dolorem voluptates accusantium
                  corrupti dolore sunt, quo accusamus laudantium a perspiciatis
                  nesciunt sint earum repudiandae incidunt ex saepe.
                </p>
              </div>
            </div>
          ))}
          <div className="border p-4">
            <div className="flex justify-between mb-2">
              <h3>Game Title</h3>
              <p>asdads</p>
            </div>
            <div className="flex">
              <img className="w-1/2" src="" alt="" />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
                excepturi voluptatibus nobis dolorem voluptates accusantium
                corrupti dolore sunt, quo accusamus laudantium a perspiciatis
                nesciunt sint earum repudiandae incidunt ex saepe.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <p className="mb-4 text-xl">Hight scores</p>
        <table className="w-1/2">
          <tr>
            <td>Game1</td>
            <td>102</td>
          </tr>
          <tr>
            <td>Game2</td>
            <td>102</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
