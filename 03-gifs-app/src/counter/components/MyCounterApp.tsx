import { useCounter } from "../hooks/useCounter";

export const MyCounterApp = () => {

    const {counter,increment,decrement,reset} = useCounter();

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Counter: {counter}</h1>
      <div>
        <button
          onClick={() => {
            increment();
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            decrement();
          }}
        >
          -1
        </button>
        <button
          onClick={() => {
            reset();
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};
