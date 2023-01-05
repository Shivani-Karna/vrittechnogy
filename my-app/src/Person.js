import React, { Component } from 'react';
// import moduleName from 'module';
import FakePerson from './FakePerson';

const User = () => {
    let Users = [
        {id:1, name :"Shivani", isAuthenticate:true},
        {id:2, name:"Rabi", isAuthenticate:true},
        {id:3, name:"Himanshu", isAuthenticate:true},
    ];
    return (
        <>
            {Users.map((obj)=> (
                <FakePerson userName = {obj.name} key={obj.id} userAuth={obj.isAuthenticate} />
            ))}
        </>
    );
};   

export default User;