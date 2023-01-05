import React, { Component } from 'react';

const FakePerson = ({userName, userAuth})  =>{
        return (
            <>
                {userAuth ? (
                    <li>
                        {userName}
                    </li>
                ) : (
                    <li> Not Authorized </li>
                )}    
            </>
        )

}

export default FakePerson;