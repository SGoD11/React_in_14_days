import React, { useState } from "react";


export default function CounterApp() {

    const [counter, setCounter] = useState(0);
    const increment = () => {
        setCounter(counter => counter + 1);
    };
    const decrement = () => {
        setCounter(counter => counter - 1);
    };
    const reset = () => {
        setCounter(0);
    };
    return (
        <div className="mt-5">
            <h1 className="text-center">Counter App</h1>
            <p className="fs-1 text-center"> {counter}</p>
            <div className="buttons d-flex gap-2 justify-content-center">
                <button className="btn btn-success" onClick={increment}> <i class="bi bi-plus-circle-fill"></i> </button>
                <button className="btn btn-success" onClick={reset}><i class="bi bi-arrow-clockwise"></i></button>
                <button className="btn btn-success" onClick={decrement}><i class="bi bi-dash-circle-fill"></i></button>
            </div>
        </div>
    );
}