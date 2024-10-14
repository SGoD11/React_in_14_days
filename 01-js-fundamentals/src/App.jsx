import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState("");
  const [addTasks, setAddtasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState(new Set()); // Track completed tasks
  const [currentTime, setCurrentTime] = useState(new Date());

  // Handle input change
  const handleChange = (e) => {
    setTasks(e.target.value);
  };

  // Add a new task
  const addtask = () => {
    if (tasks.trim() !== "") {
      setAddtasks([...addTasks, tasks]);
      setTasks(""); // Reset input field
    }
  };

  // Delete a task
  const deleteTask = (taskToDelete) => {
    const updatedTasks = addTasks.filter((task) => task !== taskToDelete);
    setAddtasks(updatedTasks);
    setCompletedTasks((prev) => {
      const newSet = new Set(prev);
      newSet.delete(taskToDelete); // Remove from completed tasks
      return newSet;
    });
  };

  // Mark task as completed
  const toggleTask = (task) => {
    setCompletedTasks((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(task)) {
        newSet.delete(task); // Unmark if already completed
      } else {
        newSet.add(task); // Mark as completed
        setTimeout(() => deleteTask(task), 500); // Delete after animation
      }
      return newSet;
    });
  };

  // Update time every second
  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <h1 className="heading">Basic Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          className="task-input"
          onChange={handleChange}
          value={tasks}
        />
        <button className="submit-btn" onClick={addtask}>
          Submit
        </button>
      </div>
      <div className="todo-container">
        <ul className="task-list">
          {addTasks.map((task, index) => (
            <li key={index} className={completedTasks.has(task) ? 'completed' : ''}>
              <input
                type="checkbox"
                onChange={() => toggleTask(task)} // Use onChange for checkbox
              />{" "}
              {task}
            </li>
          ))}
        </ul>
      </div>
      
      <footer>
        <p className="footer-text">Created by <span className="author">Subhajit</span></p>
        <p className="time-display">
          {currentTime.toLocaleTimeString()} - {currentTime.toLocaleDateString()}
        </p>
        <span><small>no of task: {addTasks.length}</small></span>
      </footer>
    </div>
  );
}

export default App;
