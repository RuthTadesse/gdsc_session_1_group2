import React, { useState } from 'react';
import TodoItem from './Todoitem';
import TodoForm from './TodoForm';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };
  const editTask = (taskId, newText) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, text: newText } : task
      )
    );
  };
/*
  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const updatedTasks = [...tasks];
    const [removed] = updatedTasks.splice(result.source.index, 1);
    updatedTasks.splice(result.destination.index, 0, removed);

    setTasks(updatedTasks);
  };
*/

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm addTask={addTask} />
      <ul>
        {tasks.map((task,index) => (
          <TodoItem
            key={task.id}
            task={task}
            removeTask={removeTask}
            toggleTaskCompletion={toggleTaskCompletion}
            editTask={editTask}
            index={index}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;


/*
  return ( 
 
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="todo-list">
      <h1>Todo List</h1>
      <TodoForm addTask={addTask} />
     
        {(provided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            {tasks.map((task, index) => (
              <TodoItem
                key={task.id}
                task={task}
                removeTask={removeTask}
                toggleTaskCompletion={toggleTaskCompletion}
                editTask={editTask}
                index={index}
              />
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TodoList;
*/