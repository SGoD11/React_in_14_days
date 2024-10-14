import React, { useState, useEffect } from "react";
import "./App.css";
function App() {
  const [tasks, setTasks] = useState("");
  const [addTasks, setAddtasks] = useState([]);
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
            <li key={index}>
              <input
                type="checkbox"
                onClick={() => deleteTask(task)}
              />{" "}
              {task}
            </li>
          ))}
        </ul>
      </div>
      
      <footer>
        <p className="footer-text">Created by <span>Subhajit</span></p>
        <p className="time-display">
          {currentTime.toLocaleTimeString()} - {currentTime.toLocaleDateString()}
        </p>
      </footer>
    </div>
  );
}

export default App;
