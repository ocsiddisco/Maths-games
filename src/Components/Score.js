import React from "react";
import Gru from "../Gifs/Gru.gif";
import Pig from "../Gifs/Pig.gif";
import Cat from "../Gifs/Cat.gif";
import Panda from "../Gifs/panda.gif";
import Baby from "../Gifs/baby.gif";
import Beer from "../Gifs/beer.gif";
import Dalmat from "../Gifs/dalmat.gif";
import Eyes from "../Gifs/eyes.gif";
import Gus from "../Gifs/gus.gif";
import Kitty from "../Gifs/kitty.gif";
import Lilo from "../Gifs/lilo.gif";
import Love from "../Gifs/love.gif";
import Minion from "../Gifs/minion.gif";
import Pika from "../Gifs/pika.gif";
import Sponge from "../Gifs/sponge.gif";
import White from "../Gifs/white.gif";
import Poke from "../Gifs/poke.gif";

export default function Score(props) {
  let image = "";

  switch (props.count) {
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
    case 25:
      image = Baby;
      break;
    case 30:
      image = Beer;
      break;
    case 35:
      image = Dalmat;
      break;
    case 40:
      image = Eyes;
      break;
    case 45:
      image = Gus;
      break;
    case 50:
      image = Kitty;
      break;
    case 55:
      image = Lilo;
      break;
    case 60:
      image = Love;
      break;
    case 65:
      image = Minion;
      break;
    case 70:
      image = Pika;
      break;
    case 75:
      image = Sponge;
      break;
    case 80:
      image = Minion;
      break;
    case 85:
      image = White;
      break;
    case 90:
      image = Poke;
      break;
    default:
      image = "";
  }

  return (
    <div className="grid justify-items-center mt-8 mb-8">
      <div>
        <h2 className="mt-10 text-2xl tracking-widest	">
          Jouw score: {props.count}
        </h2>
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
