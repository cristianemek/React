import { useState } from "react";

export const useCounter = (initialValue: number = 5) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = (val: number = 1) => setCounter(counter + val);
  const decrement = (val: number = 1) => setCounter(counter - val);
  const reset = () => setCounter(initialValue);

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
