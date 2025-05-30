import { useState } from "react";

interface CounterAppProps {
  value: number;
}

export const CounterApp = ({ value }: CounterAppProps) => {
  const [counter, setCounter] = useState(value);

//   const handleChange = (type?: "increase" | "decrease") => {
//     if (type === "increase") {
//       setCounter(counter + 1);
//     } else if (type === "decrease") {
//       setCounter(counter - 1);
//     } else {
//       setCounter(value);
//     }
//   };

const handleIncrease = () => setCounter(counter + 1);
const handleDecrease = () => setCounter(counter - 1);
const handleReset = () => setCounter(value);

  return (
    <>
      <h1>Counter App</h1>
      <h2> {counter} </h2>
      <button onClick={() =>handleIncrease()}>+1</button>
      <button onClick={() => handleDecrease()}>-1</button>
      <button onClick={() =>handleReset()}>reset</button>
    </>
  );
};

export default CounterApp;
