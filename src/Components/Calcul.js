import React, { useState } from "react";
import "animate.css";

export default function Calcul(props) {
  const { incrementCount, operator, numb1, numb2, pickNumbers } = props;

  const [result, setResult] = useState("");
  const [animated, setAnimated] = useState(true);

  function checkAnswer() {
    setAnimated(true);
    if (operator === "+") {
      const correctResult = numb1 + numb2;

      if (correctResult === parseInt(result)) {
        pickNumbers();
        incrementCount();
      } else {
        setAnimated(false);
      }
    } else {
      const correctResult = numb1 - numb2;
      if (correctResult === parseInt(result)) {
        pickNumbers();
        incrementCount();
      } else {
        setAnimated(false);
      }
    }
  }

  function handleClick() {
    setResult("");
  }
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      checkAnswer();
      setResult("");
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className={animated ? "" : "animate__animated animate__shakeX"}>
        <div className="flex flex-row mt-20 justify-center text-xl">
          {numb1} {operator} {numb2} =
          <input
            className=" ml-4 w-20 rounded text-center"
            type="text"
            value={result}
            onChange={(event) => setResult(event.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
      <div className="mt-6">
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 m-6 w-64 border border-gray-400 rounded shadow tracking-widest"
          onClick={(e) => {
            checkAnswer();
            handleClick();
          }}
        >
          Controleer je antwoord
        </button>
      </div>
    </div>
  );
}
