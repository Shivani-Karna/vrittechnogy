
import { Component } from 'react';
import './App.css';
// import Child from './Child';
// import ClassComponentDemo from './ClassComponentDemo';
// import ComponentLifeCycle from './ComponentLifeCycle';
// import ComponentUnmounting from './ComponentUnmounting';
// import ChildComponent from './ChildComponent';
// import Counter from './Counter';
// import DisplayComponent from './DisplayComponent';
// import List from './List';
import Fruits from './Fruits';
import LoginForm from './LoginForm';
// import FakePerson from './FakePerson';
// import Person from './Person';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';


function App() {
  // let name ='Santosh';
  return (
    <div className="App">
      {/* <ComponentLifeCycle name1={name}/> */}
      {/* <ClassComponentDemo> */}
      {/* <ComponentUnmounting/> */}
      {/* <Component/> */}
      {/* <Counter>I am a new React Developer</Counter> */}
      {/* <List /> */}
      {/* <DisplayComponent/> */}
      {/* <Fruits/> */}
      {/* <ClassComponentDemo /> */}
      {/* <Person/> */}
      {/* <FakePerson/> */}
      <RegistrationForm/>
      <LoginForm/>
    </div>
  );
}

export default App;
