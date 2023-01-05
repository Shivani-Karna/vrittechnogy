import React from "react";
import { useReducer } from "react";
import { useState } from "react";
// import { useReducer } from "react";
import ComponentOne from "./ComponentOne";

const initialState = { count: 0 }
const reducer = (state, action) => {
    console.log(action, 'action');
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return { count: 0 }
        default:
            throw new Error();
    }
}
const ReducerHook = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [user, setUser]= useState('test');
    console.log(state, 'state');

    const handleIncrement = () => {
        setUser('Shivani')
        dispatch({ type: 'increment' });
    };
    const handleDecrement = () => {
        dispatch({ type: 'decrement' });
    };
    const handleReset = () => {
        dispatch({ type: 'reset' })
    }


    return (
        <>
            Count:{state.count}
            <br></br>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleReset}>Reset</button>
            <ComponentOne user={user}/>

        </>

    );
}
export default ReducerHook;



