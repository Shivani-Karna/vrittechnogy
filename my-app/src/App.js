
import { Component } from 'react';
import './App.css';
import ClassComponentDemo from './ClassComponentDemo';
import ComponentLifeCycle from './ComponentLifeCycle';

function App() {
  let name ='Santosh';
  return (
    <div className="App">
    <ComponentLifeCycle name1={name}/>
    {/* <ClassComponentDemo> */}
    </div>
  )
}

export default App;
