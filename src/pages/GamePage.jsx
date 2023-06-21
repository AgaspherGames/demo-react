import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiService from "../services/apiService";
import { baseURL } from "../utils/http";

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
        <iframe src={`${baseURL}/api/v1/storagge`} width={1000} height={600}></iframe>
        <iframe src={`../../game.html`} width={1000} height={600}></iframe>
        {/* <iframe src={`${baseURL}/storage`+game.gamePath}></iframe> */}
      </div>
    </div>
  );
}

// http://192.168.0.117:8000/storagge

<iframe width={1000} height={500} src="../../game.html"></iframe>