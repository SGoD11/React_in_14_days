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

  return (
    <div className="App">
      <input type="text" onChange={handleChange} value={tasks} />
      <button onClick={addtask}> Submit </button>
      <div className="displayItems">
        <ol>
          {addTasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default App;
