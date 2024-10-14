import React, {useState} from "react";

function App() {
  const [tasks, setTasks] = useState("");
  const [addTasks, setAddtasks] = useState([]);

  const handleChange = (e) => {
    setTasks(e.target.value);
  };

  const addtask = () => {
    if (tasks.trim() !== "") {  // Prevent adding empty tasks
      setAddtasks([...addTasks, tasks]);
      setTasks("");  // Reset input field after adding task
    }
  };

 
  const deleteTask = (taskToDelete) => {
    const updatedTasks = addTasks.filter((task) => task !== taskToDelete);
    setAddtasks(updatedTasks);
  };

  return (
    <div className="App">
      <input type="text" onChange={handleChange} value={tasks} />
      <button onClick={addtask}> Submit </button>
      <div className="displayItems">
        <ul>
          {addTasks.map((task, index) => (
            <li key={index} style={{listStyleType: "none"}}> <input
            type="checkbox"
            onClick={() => deleteTask(task)}
          />{" "} {task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
