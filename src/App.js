import "./App.css";
import React, { useContext } from "react";
import Calcul from "./Components/Calcul";
import Score from "./Components/Score";
import Choose from "./Components/Choose";
import AppContext from "./AppContext";

function App() {
  const { isActive } = useContext(AppContext);

  return (
    <div className="app rounded shadow-2xl flex flex-col font-face-gm lg:w-2/5 lg:max-h-[60rem]">
      <Choose />
      {!isActive && (
        <div>
          <Calcul />
          <Score />
        </div>
      )}
    </div>
  );
}

export default App;
