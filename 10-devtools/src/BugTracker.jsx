import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const BugTracker = () => {
  // Initial state with a list of bugs
  const [bugs, setBugs] = useState([{ id: 1, name: 'Bug 1' }, { id: 2, name: 'Bug 2' }]);
  const [newBug, setNewBug] = useState('');

  const handleInputChange = (e) => {
    setNewBug(e.target.value);
  };

  // Corrected addBug function
  const addBug = () => {
    // Create a new bug object
    const newBugObject = { id: bugs.length + 1, name: newBug };
    
    // Create a new array by spreading the existing bugs and adding the new bug
    const newBugsArray = [...bugs, newBugObject];
    
    // Update state with the new array
    setBugs(newBugsArray);
    
    // Clear the input field after adding the bug
    setNewBug('');
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Bug Tracker</h1>

      {/* Bug list */}
      <ul className="list-group mb-4">
        {bugs.map((bug) => (
          <li key={bug.id} className="list-group-item">
            {bug.name}
          </li>
        ))}
      </ul>

      {/* Form to add new bug */}
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="New Bug Name"
          value={newBug}
          onChange={handleInputChange}
        />
        <button className="btn btn-primary" onClick={addBug}>
          Add Bug
        </button>
      </div>
    </div>
  );
};

export default BugTracker;
