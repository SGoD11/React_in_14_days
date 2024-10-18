# Team Member Cards Project

This project demonstrates how to use **props** in React by creating a "Team Member Cards" layout using Bootstrap for styling.

## What are Props?

Props (short for "properties") are a way to pass data from one component to another in React. They allow us to send information from a parent component to a child component, making components more dynamic and reusable.

### Key Points About Props:
- **Data Flow**: Props are passed from the parent component to the child component.
- **Read-Only**: Props are immutable, meaning they cannot be modified by the child component.
- **Reusable Components**: Using props allows us to create reusable components that behave differently based on the data passed to them.

## Example in this Project

In this project, we pass the following props to the `TeamMemberCard` component:
- **name**: The team member's name.
- **role**: The team member's role in the project.
- **imageUrl**: The URL of the team member's image.