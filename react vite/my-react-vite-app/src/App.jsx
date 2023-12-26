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

export default App;
week 2
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

*/
import React, { useState } from 'react';
import Form from './Form';

function App() {
  const [show, setShow] = useState(true);
  const [notes, setNotes] = useState([]);

  const handleSaveNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  return (
    <div>
      {show && <Form onSaveNote={handleSaveNote} />}
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? 'Hide Form' : 'Show Form'}
      </button>

      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            <h3>{note.main}</h3>
            <p>{note.sub}</p>
            <p>{note.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
