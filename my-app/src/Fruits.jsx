import React from 'react';
import  { useState } from 'react';

// import { useState } from 'react';
import DisplayComponent from './DisplayComponent';

const Fruits = () => {
    const [isAuthenticated, setIsAuthenticated] =  useState(true);
    const fruits = [
        { id: 1, name: 'Papaya' },
        { id: 2, name: 'Mango' },
        { id: 3, name: 'Grapes' },
        { id: 4, name: 'Pineapple' },
    ];
    const handleState = () => {
        setIsAuthenticated(false);
    };
    return <>
        <p>{isAuthenticated ? 'Hello Shivani' : 'Ok Bye'}</p>
        <button type='button' onClick={handleState}>
            Update State
        </button>
        {/* <ul></ul>
        {fruits.map((fruit, index) => <li key={index}>{fruit.name}</li>)} */}
    </>;

};

export default Fruits;



