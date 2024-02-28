import React, { useState } from 'react';
import Modal from './components/Modal'; // Import Modal component

function App() {
  // 1. Fix the state of `todos`
  const [todos, setTodos] = useState<string[]>([]);

  // 4. Lift input text into a state
  const [taskInput, setTaskInput] = useState('');

  // 5. Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskInput(e.target.value);
  };

  // 5. Handle form submission to add new task
  const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (taskInput.trim() !== '') {
      setTodos([...todos, taskInput]); // Add new task to todos array
      setTaskInput(''); // Clear input field
    }
  };

  const handleDeleteTask = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <>
      <ul>
        {/* 3. Render tasks using map */}
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDeleteTask(index)}>X</button>
          </li>
        ))}
      </ul>

      <form
        style={{
          marginTop: '10px',
          marginLeft: '10px'
        }}
        onSubmit={handleAddTask} // 5. Handle form submission
      >
        {/* 4. Lift input text into a state */}
        <input
          value={taskInput}
          onChange={handleInputChange} // 5. Handle input change
          placeholder="Enter task"
        />
        <button type="submit">Create Task</button> {/* 5. Form submission */}
      </form>

      {/* 5. Use the Modal component */}
      <Modal />
    </>
  );
}

export default App;
