import React from "react";

export default function Header(props) {
  const { handleTerugNaarMenu, state } = props;

  return (
    <header className="flex flex-col">
      <span className="h-7 text-left pt-2 pl-2">
        {state !== "" && (
          <button onClick={handleTerugNaarMenu}>Terug naar menu</button>
        )}
      </span>
      <span>
        <h1 className="text-center text-3xl mb-3 mt-9 h-14 lg:mt-10 tracking-widest">
          Zin in sommen?
        </h1>
      </span>
    </header>
  );
}
