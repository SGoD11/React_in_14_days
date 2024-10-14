import React, {useState} from "react";

function App() {
  const [tasks, setTasks] = useState("");
  const [addTasks, setAddtasks] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    setTasks(e.target.value);
    console.log("handle change ", e.target.value);
  };

  const addtask = (task) => {
    setAddtasks([...addTasks, task]);  // Fixed spreading of state
    setTasks("");  // Change to empty string, not an array
    console.log("button pressed and this is the task ", task);
  };

  return (
    <div className="App">
      <input type="text" onChange={handleChange} value={tasks} />
      <button onClick={() => addtask(tasks)}> Submit </button>
      <div className="displayItems">
        <ol>
          {addTasks.map((task, index) => (
            <li key={index}>{task}</li>  // Added key and return statement
          ))}
        </ol>
      </div>
    </div>
  );
}

export default App;
