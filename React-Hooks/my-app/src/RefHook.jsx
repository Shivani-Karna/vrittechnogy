import React from "react";
import { useState, useRef } from "react";

const RefHook = () => {
    const [inputValue, setInputValue] = useState("");
    const countRef = useRef(0);
    console.log(countRef, "countRef");
    const handleCountIncrement = () => {
        countRef.current = countRef.current + 1;

    };

    console.log(countRef, 'test');
    return (
        <>
            <input
                type='text'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}

            />
            <button onClick={handleCountIncrement}>Click </button>
        </>
    );

};