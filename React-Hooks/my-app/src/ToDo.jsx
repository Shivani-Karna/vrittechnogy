import React from 'react';
// import React, {useState} from 'react'
import { useState } from 'react';


const ToDo = () => {
    const [list, setList] = useState([])
    const [inputValue, setInputValue] = useState('');
    
    const handleInputValue = ({ target: { value } }) => {
        setInputValue(value);
        console.log(inputValue);
    };

    setInputValue = () => {
        



    }
    return (
        <>
            <ul>TODO Application</ul>
            <input type='text' />
            <button onClick={handleInputValue}>Add ToDo</button>

        </>

    )
}

export default ToDo
