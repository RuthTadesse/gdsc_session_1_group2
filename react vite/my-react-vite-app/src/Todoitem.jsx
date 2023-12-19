import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd'; // Import Draggable from 'react-beautiful-dnd'
const TodoItem = ({ task, removeTask, toggleTaskCompletion, editTask, index}) => {
  const [isEditing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleEditChange = (e) => {
    setEditedText(e.target.value);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (editedText.trim()) {
      editTask(task.id, editedText);
      setEditing(false);
    }
  };



  return (
   // <Draggable draggableId={task.id.toString()} index={index}>
     // {(provided) => (
        <li
       //   ref={provided.innerRef}
         // {...provided.draggableProps}
         // {...provided.dragHandleProps}
        >
          {!isEditing ? (
        <>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTaskCompletion(task.id)}
          />
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.text}
          </span>
          <button onClick={() => removeTask(task.id)}>Remove</button>
          <button onClick={() => setEditing(true)}>Edit</button>
        </>
         ) : (
        <form onSubmit={handleEditSubmit}>
          <input type="text" value={editedText} onChange={handleEditChange} />
          <button type="submit">Save</button>
          <button onClick={() => setEditing(false)}>Cancel</button>
        </form>
      )}
        </li>
      );
    };
   // </Draggable>
 // );
//};

export default TodoItem;