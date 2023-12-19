import React, { useState } from 'react';

const TodoForm = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={task} onChange={handleInputChange} />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TodoForm;