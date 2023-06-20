import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiService from "../services/apiService";

export default function GamePage() {
  const params = useParams();
  const { slug } = params;
  const [game, setGame] = useState();
  function onMessage(e){
    console.log('asddd'+e.data);
  }
  useEffect(() => {


    window.addEventListener('message',onMessage);

    apiService.fetchGame(slug).then((resp) => {
      setGame(resp.data.data);
    });

    return () => {	
      window.removeEventListener('message',onMessage)
     }

  }, []);
  console.log(game);

  if (!game) return <div>loading...</div>;

  return (
    <div>
      <div>
        <iframe src={`http://192.168.0.111:8000/storage`+game.gamePath}></iframe>
      </div>
    </div>
  );
}

<iframe width={1000} height={500} src="../../game.html"></iframe>