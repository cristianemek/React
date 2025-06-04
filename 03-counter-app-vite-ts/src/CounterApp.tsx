import { useState } from "react";


export const CounterApp = () => {
    const [value,setValue] = useState(0);
    const [counter, setCounter] = useState(value);

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
      <input 
      type="number"
      value={value}
      onChange={(e)=>{
        const newValue= Number(e.target.value);
        setValue(newValue);
        setCounter(newValue);
      }}
      />
    </>
  );
};

export default CounterApp;
