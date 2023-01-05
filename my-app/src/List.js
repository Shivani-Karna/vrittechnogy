import React from 'react';
import Fruits from './Fruits';


const List = () => {
    const languages = ['Java', 'Python', 'Ruby'];
    let authorisedUser =false;
    return (
        <>

            {!authorisedUser ?(
            <ul>
            {languages.map((language,index) => (
                <li key ={index}>{language}</li>

            ))}

            </ul> 
        ):(
            <>Not authorised</>  

        )}        

        </>
    );
};


export default List;