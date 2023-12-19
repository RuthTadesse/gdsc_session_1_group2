/*import React, { useState } from "react";
import "./App.css";
import Grpmembers from "./group2members";
import GroupMembersList from "./GroupMembersList";
import imageOne from "../assets/imagesss/imageone.jfif";
import imageTwo from "../assets/imagesss/imagetwo.jfif";

function App() {
  const [count, setCount] = useState(0);

  const group1Members = [
    { name: 'John Doe' },
    { name: 'Jane Smith' },
    { name: 'Bob Johnson' }
  ];

  return (
    <>
      <div className="container">
        <h2>Group 2 members are:</h2>
        <Grpmembers />
        <h2>Group 1 members are:</h2>
        <GroupMembersList members={group1Members} />
        <img src={imageOne} className="img" alt="group image one" />
        <img src={imageTwo} className="img" alt="group image two" />
      </div>
    </>
  );
}

export default App;*/
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
 import TodoList from './Todolist'
function App() {
    
  return (
    <>
    <div className='App'>
      <TodoList/>
   </div>
  </>
  );
}

export default App;

