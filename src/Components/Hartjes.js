import React, { useEffect, useState } from "react";
import "animate.css";

export default function Hartjes(props) {
  const [animated, setAnimated] = useState(true);
  const [a, setA] = useState(0); // Initialize a

  const [b, setB] = useState("");

  useEffect(() => {
    pickNumbers();
  }, []);

  const pickNumbers = () => {
    const a = Math.floor(Math.random() * 10);
    setA(a);
  };

  const checkAnswer = () => {
    if (a + parseInt(b) === 10) {
      pickNumbers();
      props.incrementCount();
    } else {
      setAnimated(false);
    }
  };

  function handleClick() {
    setB("");
  }

  const handleInputChange = (event) => {
    setB(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      checkAnswer();
      setB("");
    }
  };
  return (
    <div className="flex flex-col items-center">
      <div className=" relative ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="300"
          height="300"
          viewBox="0 0 24 24"
          fill="rgba(255, 0, 0, 0.5)"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />{" "}
        </svg>
        <div
          className={
            animated
              ? "absolute mt-28 test"
              : "animate__animated animate__shakeX absolute mt-28 test"
          }
        >
          <div className="flex flex-col  justify-center text-xl">
            <span className="flex flex-row justify-center text-xl">
              <div className=" ml-4 mr-4">{a}</div> +
              <input
                className=" ml-4 mr-4 w-7 rounded text-center"
                type="text"
                value={b}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
              />
            </span>
            <div className="flex flex-row justify-center mt-4">
              <span className="pr-2">=</span> <span className="pl-2">10</span>
            </div>
          </div>
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
