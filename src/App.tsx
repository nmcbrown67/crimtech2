import React, { useState } from 'react';
import Modal from './components/Modal'; // Import Modal component

function App() {

  const [todos, setTodos] = useState<string[]>([]);

  //  Lifts input text into a state
  const [taskInput, setTaskInput] = useState('');

  //  Handles input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskInput(e.target.value);
  };

  //  Handles form submission to add new task
  const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (taskInput.trim() !== '') {
      setTodos([...todos, taskInput]); // Add new tasks
      setTaskInput(''); // Clears input field
    }
  };

  const handleDeleteTask = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <>
      <ul>
        {/*  Renders tasks using map */}
        {todos.map((todo, index) => (
          <li className = "lists" key={index}>
            {todo}
            <button className = "x-butt" onClick={() => handleDeleteTask(index)}>X</button>
          </li>
        ))}
      </ul>

      <form
        style={{
          marginTop: '10px',
          marginLeft: '10px',
          display: 'flex',
          alignItems: 'center', 
          justifyContent: 'center',
          height: '5rem',
          backgroundColor: 'lightpink',
        }}
        onSubmit={handleAddTask} // 5. Adds task with form submission
      >
        <input 
          type="text"
          value={taskInput}
          onChange={handleInputChange} // 5. Handle input change
          placeholder="Enter task"
        />
        <button type="submit">Create Task</button> {/* 5. Form submission */}
      </form>

      <Modal />
    </>
  );
}

export default App;
