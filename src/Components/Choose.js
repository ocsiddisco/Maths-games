import React from "react";

export default function Choose(props) {
  const { handlePickedPlus, handlePickedMins, handlePickedHartjes } = props;

  return (
    <div className="flex flex-col text-center">
      <div className="flex flex-col items-center justify-items-center">
        <button
          className="justify-items-center bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 mt-16 w-36 border border-gray-400 rounded-2xl shadow w-24 tracking-widest"
          onClick={() => {
            handlePickedPlus();
          }}
        >
          Plussommen
        </button>
        <button
          className="justify-items-center	items-center bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 mt-16 w-36 border border-gray-400 rounded-2xl shadow w-24 tracking-widest"
          onClick={() => {
            handlePickedMins();
          }}
        >
          Minssommen
        </button>
        <button
          className="justify-items-center	items-center bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 mt-16 w-36 border border-gray-400 rounded-2xl shadow w-24 tracking-widest"
          onClick={() => {
            handlePickedHartjes("hartjes");
          }}
        >
          Verliefde hartjes
        </button>
      </div>
    </div>
  );
}
