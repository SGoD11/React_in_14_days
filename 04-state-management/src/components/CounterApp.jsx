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
        <div className="d-flex align-items-center justify-content-center vh-100"> {/* Flex container to center content */}
            <div className="text-center"> {/* Wrap content to center text */}
                <h1 className="text-center">Counter App</h1>
                <p className="fs-1"> {counter}</p>
                <div className="buttons d-flex gap-2 justify-content-center">
                    <button className="btn btn-success" onClick={increment}> <i className="bi bi-plus-circle-fill"></i> </button>
                    <button className="btn btn-success" onClick={reset}><i className="bi bi-arrow-clockwise"></i></button>
                    <button className="btn btn-success" onClick={decrement}><i className="bi bi-dash-circle-fill"></i></button>
                </div>
            </div>
        </div>
    );
}
