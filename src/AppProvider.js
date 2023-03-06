import React, { useState } from "react";
import AppContext from "./AppContext";

const AppProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [operator, setOperator] = useState("+");
  const [numb1, setNumb1] = useState(0);
  const [numb2, setNumb2] = useState(0);

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
    setIsActive(false);
  };

  return (
    <AppContext.Provider
      value={{
        count,
        incrementCount,
        isActive,
        setIsActive,
        pickNumbers,
        numb1,
        numb2,
        operator,
        setOperator,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
