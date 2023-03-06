import React, { useContext } from "react";
import AppContext from "../AppContext";

export default function Choose() {
  const { setOperator, pickNumbers } = useContext(AppContext);

  return (
    <div className="flex flex-col text-center">
      <h1 className="text-3xl mb-3 mt-60 lg:mt-10 tracking-widest">
        Zin in sommen?
      </h1>
      <div className="justify-items-center">
        <button
          className="justify-items-center bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 mt-16 mr-4 w-36 border border-gray-400 rounded shadow w-24 tracking-widest"
          onClick={() => {
            setOperator("+");
            pickNumbers();
          }}
        >
          Plussommen
        </button>
        <button
          className="justify-items-center	items-center bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 mt-16 ml-4 w-36 border border-gray-400 rounded shadow w-24 tracking-widest"
          onClick={() => {
            setOperator("-");
            pickNumbers();
          }}
        >
          Minssommen
        </button>
      </div>
    </div>
  );
}
