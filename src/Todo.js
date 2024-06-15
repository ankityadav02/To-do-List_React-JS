import React, { useState } from 'react';
import './App.css';

export default function Todo() {
  const [inputText, setInputText] = useState('');
  const [tasks, setTasks] = useState([]);
  
  function handleSubmit(e) {
    e.preventDefault();
    if (inputText.trim()) {
      setTasks([...tasks, { text: inputText, completed: false }]);
      setInputText('');
    }
  }
  
  function handleInputChange(e) {
    setInputText(e.target.value);
  }

  function handleComplete(index) {
    const newTasks = tasks.map((task, i) => (
      i === index ? { ...task, completed: !task.completed } : task
    ));
    setTasks(newTasks);
  }

  function handleDelete(index) {
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);
  }

  return (
    <div className="main-container">
      <h1>To-do List</h1>
      <div className="input-container">
        <input 
          type='text' 
          className='input-box' 
          placeholder='Enter your To-do' 
          value={inputText} 
          onChange={handleInputChange} 
        />
        <button className='add-btn' onClick={handleSubmit}>+</button>
      </div>
      <div className="tasks-container">
        {tasks.map((task, index) => (
          <div key={index} className={`task-item ${task.completed ? 'completed' : ''}`}>
            {task.text}
            <div className="task-actions">
              <button className='complete-btn' onClick={() => handleComplete(index)}>✔</button>
              <button className='delete-btn' onClick={() => handleDelete(index)}>✖</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
