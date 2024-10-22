# Contact Form with Validation (React)
This is a simple contact form built with React that demonstrates the use of controlled components, form validation, and state management. After the user submits the form, the submitted data is displayed at the bottom for 5 seconds before disappearing.
## Features
- **Controlled Components:** Each form input is controlled using React's useState hook, allowing real-time data handling.
- **Form Validation:** Input fields are validated to ensure that:
    - The name field is not empty.
    - The email field is correctly formatted.
    - The message field is not empty.
- **Display Submitted Data:** Upon successful form submission, the user's input is displayed for 5 seconds at the bottom of the form.
- **Data Disappears:** The displayed data automatically disappears after 5 seconds.
## Project Structure
- **App.js:** The main file where the entire form logic, state management, validation, and conditional rendering of submitted data are handled.

## Code Explanation
1. State Management
The component uses the following state variables:
    - `name`, `email`, and `message` to store form input values.
    - `errors` to store validation error messages for each field.
    - `submittedData` to store the data entered by the user after successful form submission.
    ```bash
        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [message, setMessage] = useState("");
        const [errors, setErrors] = useState({});
        const [submittedData, setSubmittedData] = useState(null);

2. Form Validation

    The `validate` function checks the values in the form:

        - Ensures the name field is not empty.
        - Ensures the email field contains a valid email address using a regular expression.
        - Ensures the message field is not empty.

    If any field is invalid, the corresponding `error` message is added to the errors state and displayed below the field.
    ```bash
    const validate = () => {
    const newErrors = {};
    if (!name) newErrors.name = "Name is required";
    if (!email || !/\S+@\S+\.\S+/.test(email)) newErrors.email = "Valid email is required";
    if (!message) newErrors.message = "Message cannot be empty";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;};

3. Form Submission

    When the form is submitted:

        - Validation is performed using the `validate()` function.
        - If the form passes validation, the input data is stored in  `submittedData`   and displayed at the bottom of the form.
        - The form is reset after submission, and the submitted data is cleared after 5 seconds using `setTimeout`.

    ```bash
    const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (validate()) {
        setSubmittedData({ name, email, message });
        setName("");
        setEmail("");
        setMessage("");
        setErrors({});

        // Remove the submitted data after 5 seconds
        setTimeout(() => {
        setSubmittedData(null);
        }, 5000);
    }
    };

4. Displaying Submitted Data

    The submitted data is displayed conditionally at the bottom of the form, and it disappears after 5 seconds.
    ```bash 
        {submittedData && (
        <div className="mt-4">
        <h4>Submitted Data</h4>
        <p><strong>Name:</strong> {submittedData.name}</p>
        <p><strong>Email:</strong> {submittedData.email}</p>
        <p><strong>Message:</strong> {submittedData.message}</p>
        </div>
        )}

## Technologies Used
- **React**: For building user interfaces and managing state.
- **Bootstrap**: For styling the form and layout.

## License
    This project is licensed under the MIT License.
