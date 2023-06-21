import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiService from "../services/apiService";
import { baseURL } from "../utils/http";

export default function GamePage() {
  const params = useParams();
  const { slug } = params;
  const [game, setGame] = useState();
  const [gameScores, setGameScores] = useState();
  function onMessage(e) {
    if (e.data.event_type == "game_run_end") {
      console.log("asddd", e.data.score)
    };
  }
  useEffect(() => {
    window.addEventListener("message", onMessage);

    apiService.fetchGame(slug).then((resp) => {
      setGame(resp.data.data);
    });
    apiService.fetchGameScores(slug).then((resp) => {
      setGameScores(resp.data);
    });

    return () => {
      window.removeEventListener("message", onMessage);
    };
  }, []);
  console.log(game);
  console.log(gameScores);

  if (!game) return <div>loading...</div>;

  return (
    <div>
      <div className="w-3/4 mx-auto">
        <h2 className="text-2xl font-semibold ">{game.title}</h2>
        {/* <iframe
          src={`${baseURL}/api/v1/storagge`}
          width={1000}
          height={600}
        ></iframe> */}
        {/* <iframe src={`../../game.html`} width={1000} height={600}></iframe> */}
        <iframe className="border w-full my-4" src={`${baseURL}/storage` + game.gamePath}></iframe>
        <div className="flex">
          <div className="w-full">
            <h4 className="text-lg font-semibold mb-4">Top Leaderboard</h4>
            <table className="w-1/2">
              {gameScores?.map((score, ind) => (
                <tr>
                  <td>
                    # {ind + 1} {score.user.username}{" "}
                  </td>
                  <td>{score.score}</td>
                </tr>
              ))}
            </table>
          </div>
          <div className="w-full">
            <h4 className="text-lg font-semibold mb-4">Description</h4>
            <p>{game.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// http://192.168.0.117:8000/storagge

<iframe width={1000} height={500} src="../../game.html"></iframe>;
