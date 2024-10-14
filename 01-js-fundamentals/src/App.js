import React, {useState} from "react";


function App() {

  const [tasks, setTasks] = useState("");
  const [addTasks, setAddtasks] = useState([]);

  const handleChange = (e) =>{
    e.preventDefault();
    setTasks(e.target.value);
    console.log("handle change ", e.target.value  )
  }


  const addtask = (task)=>{
    setAddtasks([...addTasks, task]);
    setTasks([]);
  }

  return (
    <div className="App">
      <input type="text"  onChange={(e)=>{handleChange(e)}} value={tasks} />
      <button onClick={()=>{addtask(tasks)}} > Submit </button>
      
    </div>
  );
}

export default App;
