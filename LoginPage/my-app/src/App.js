import React from 'react'
import Login from './Login'
import Registration from './Registration'
import {useState} from 'react'

function App(){
  const [info, setInfo]= useState [{}];
  
  const addInfo = (loginInfo) => {
    setInfo([...info, setInfo]);
  };
  console.log(info)


  return (
    <div className='App'>
    <Login addInfo ={addInfo}/>
      <Registration/>
      <Login/>
    </div>
  )
}

export default App
