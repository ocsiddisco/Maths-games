import React, { useContext } from "react";
import Gru from "../Gifs/Gru.gif";
import Pig from "../Gifs/Pig.gif";
import Cat from "../Gifs/Cat.gif";
import Panda from "../Gifs/panda.gif";

import CountContext from "../AppContext";

export default function Score() {
  const { count } = useContext(CountContext);
  let image = "";

  switch (count) {
    case 5:
      image = Pig;
      break;
    case 10:
      image = Gru;
      break;
    case 15:
      image = Cat;
      break;
    case 20:
      image = Panda;
      break;
    default:
      image = "";
  }

  return (
    <div className="grid justify-items-center mt-14 mb-8">
      <div>
        <h2 className="mt-10 text-2xl tracking-widest	">Jouw score: {count}</h2>
      </div>
      {image && (
        <img
          alt="img"
          src={image}
          className="rounded mt-4"
          style={{ width: "200px", height: "auto" }}
        />
      )}
    </div>
  );
}
