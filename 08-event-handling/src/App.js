import React, { useState } from 'react';
import { quizData } from './object'; // Importing quiz data
import 'bootstrap/dist/css/bootstrap.min.css';

function QuizApp() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle selection of an answer
  const handleAnswerSelect = (questionIndex, option) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: option
    });
  };

  // Handle submission
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="container my-4">
      <h2 className="text-center">Interactive Quiz</h2>
      <form onSubmit={handleSubmit}>
        {quizData.map((item, index) => (
          <div key={index} className="card my-3">
            <div className="card-header bg-dark text-light">
              <h4>{item.question}</h4>
            </div>
            <div className="card-body">
              {item.options.map((option, optionIndex) => {
                // Determine if the answer is correct or incorrect after submission
                let optionClass = '';
                if (isSubmitted) {
                  if (selectedAnswers[index] === option && option === item.correctAnswer) {
                    optionClass = 'text-success'; // Correct answer
                  } else if (selectedAnswers[index] === option && option !== item.correctAnswer) {
                    optionClass = 'text-danger'; // Incorrect answer
                  }
                }

                return (
                  <div className="form-check" key={optionIndex}>
                    <input
                      className="form-check-input"
                      type="radio"
                      name={`question-${index}`}
                      value={option}
                      onChange={() => handleAnswerSelect(index, option)}
                      disabled={isSubmitted} // Disable input after submission
                    />
                    <label className={`form-check-label ${optionClass}`}>
                      {option}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
        <button type="submit" className="btn btn-success" disabled={isSubmitted}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default QuizApp;
