import "./App.css";
import React, { useState } from "react";
import Calcul from "./Components/Calcul";
import Score from "./Components/Score";
import Choose from "./Components/Choose";
import Hartjes from "./Components/Hartjes";
import Header from "./Components/Header";

function App() {
  const [state, setState] = useState("");
  const [count, setCount] = useState(0);
  const [operator, setOperator] = useState("+");
  const [numb1, setNumb1] = useState(0);
  const [numb2, setNumb2] = useState(0);

  const handlePickedPlus = () => {
    setState("plussommen");
    setOperator("+");
    pickNumbers();
  };

  const handlePickedMins = () => {
    setState("minssommen");
    setOperator("-");
    pickNumbers();
  };

  const handlePickedHartjes = () => {
    setState("hartjes");
  };

  const handleTerugNaarMenu = () => {
    setState("");
  };
  const incrementCount = () => {
    setCount(count + 1);
  };

  const pickNumbers = () => {
    const a = Math.floor(Math.random() * 15);
    const b = Math.floor(Math.random() * 15);
    const sort = [a, b];
    sort.sort(function (a, b) {
      return a - b;
    });
    setNumb1(sort[1]);
    setNumb2(sort[0]);
  };

  return (
    <div className="app rounded shadow-2xl flex flex-col text-center h-full">
      <Header handleTerugNaarMenu={handleTerugNaarMenu} state={state} />

      {state === "" && (
        <Choose
          handlePickedPlus={handlePickedPlus}
          handlePickedMins={handlePickedMins}
          handlePickedHartjes={handlePickedHartjes}
        />
      )}
      {state === "plussommen" && (
        <div>
          <Calcul
            incrementCount={incrementCount}
            operator={operator}
            numb1={numb1}
            numb2={numb2}
            pickNumbers={pickNumbers}
          />
          <Score count={count} />
        </div>
      )}
      {state === "minssommen" && (
        <div>
          <Calcul
            incrementCount={incrementCount}
            operator={operator}
            numb1={numb1}
            numb2={numb2}
            pickNumbers={pickNumbers}
          />
          <Score count={count} />
        </div>
      )}
      {state === "hartjes" && (
        <div>
          <Hartjes incrementCount={incrementCount} />
          <Score count={count} />
        </div>
      )}
    </div>
  );
}

export default App;
