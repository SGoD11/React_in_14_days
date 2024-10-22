import React, { useState } from "react";


function App() {
  // State to manage form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({}); // State for error messages
  const [submittedData, setSubmittedData] = useState(null); // State to store submitted data

  // Validation function
  const validate = () => {
    const newErrors = {};
    if (!name) newErrors.name = "Name is required";
    if (!email || !/\S+@\S+\.\S+/.test(email)) newErrors.email = "Valid email is required";
    if (!message) newErrors.message = "Message cannot be empty";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // If no errors, return true
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // If form is valid, store the form data
      setSubmittedData({ name, email, message });
      
      // Clear form after submission
      setName("");
      setEmail("");
      setMessage("");
      setErrors({});

      // Automatically clear the submitted data after 5 seconds
      setTimeout(() => {
        setSubmittedData(null); // Clear the submitted data
      }, 5000); // 5000 ms = 5 seconds
    }
  };

  return (
    <div className="container mt-5">
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Name Input */}
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>

        {/* Email Input */}
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        {/* Message Input */}
        <div className="form-group">
          <label>Message</label>
          <textarea
            className={`form-control ${errors.message ? "is-invalid" : ""}`}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          {errors.message && <div className="invalid-feedback">{errors.message}</div>}
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>

      {/* Display submitted data if present */}
      {submittedData && (
        <div className="mt-4">
          <h4>Submitted Data</h4>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Message:</strong> {submittedData.message}</p>
        </div>
      )}
    </div>
  );
}

export default App;
