import { useState } from "react";


interface CounterAppProps {
    value: number;
}

export const CounterApp = ({value}: CounterAppProps) => {
    
    const [counter,setCounter] = useState(value);

    const handleAdd = (type:"increase"|"decrease") => {
        if (type==="increase") {
            setCounter(counter+1);
        }else{
            setCounter(counter-1);
        }
    }

    return ( 
        <>
            <h1>Counter App</h1>
            <h2> { counter } </h2>
            <button onClick={()=>handleAdd("increase")}>+1</button>
            <button onClick={()=>handleAdd("decrease")}>-1</button>

        </>
     );
}

export default CounterApp;
