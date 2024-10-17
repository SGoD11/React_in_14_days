import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import AnimatePresence for exit animations

export default function CounterApp() {
    const [counter, setCounter] = useState(0);
    const [showMessage, setShowMessage] = useState(false); // Control visibility of the message

    const increment = () => {
        setCounter(counter => counter + 1);
        showClickMessage();
    };

    const decrement = () => {
        setCounter(counter => counter - 1);
        showClickMessage();
    };

    const reset = () => {
        setCounter(0);
        showClickMessage();
    };

    // Show the message and hide it after 2 seconds
    const showClickMessage = () => {
        setShowMessage(true);
        setTimeout(() => {
            setShowMessage(false); // Hide the message after 2 seconds
        }, 2000);
    };

    return (
        <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="text-center">
                <h1>Counter App</h1>
                <h2 className="fs-1 p-4 fw-bold font-monospace"> {counter}</h2>
                <div className="buttons d-flex gap-2 justify-content-center">
                    <button className="btn btn-success" onClick={decrement}><i className="bi bi-dash-circle-fill"></i></button>
                    <button className="btn btn-success" onClick={reset}><i className="bi bi-arrow-clockwise"></i></button>
                    <button className="btn btn-success" onClick={increment}> <i className="bi bi-plus-circle-fill"></i> </button>
                </div>

                {/* AnimatePresence ensures exit animations work */}
                <AnimatePresence>
                    {showMessage && (
                        <motion.p
                            initial={{ y: 100, opacity: 0 }} // Start from below, invisible
                            animate={{ y: 0, opacity: 1 }} // Move to normal position, fully visible
                            exit={{ y: 100, opacity: 0 }} // Move down and fade out
                            transition={{ duration: 1 }} // Slow down the transition for a smooth fade
                            className="mt-3"
                        >
                            You have clicked {counter} times
                        </motion.p>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
