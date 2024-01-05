import { useState } from "react";

export const useCounter = (iniValue = 10) => {
  const [counter, setCounter] = useState(iniValue);

  const addCounter = () => {
    setCounter(counter + 1);
  };

  const resetCounter = () => {
    setCounter(iniValue);
  };

  const substCounter = () => {
    setCounter(counter - 1);
  };

  return {
    counter,
    addCounter,
    resetCounter,
    substCounter,
  };
};
