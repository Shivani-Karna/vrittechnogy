import React from 'react';

const DisplayComponent = (fruits) => (
    <>
        <ul>
            {fruits.map((fruits, index) => (
                <li key={index}>{fruits.name}</li>
            ))}
        </ul>
    </>

);


export default DisplayComponent;