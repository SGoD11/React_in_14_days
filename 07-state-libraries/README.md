# Shopping Cart App

This project demonstrates how to manage global state in a React application using both **Context API** and **Redux**. The app allows users to browse products and add them to a shopping cart. The global state of the cart is managed using Context API in some components and Redux in others, to showcase both methods of state management.

## Features

- Add products to the cart using **Context API**.
- Display the cart contents and remove products from the cart using **Redux**.
- Simple and responsive design using **Bootstrap**.

## Project Structure

/src /components 
- Cart.js 
# Cart component using Redux 
- ProductList.js 
# Product listing component using Context API 
- ProductItem.js 
# Individual product component 
/context 
- CartContext.js 
# Context API implementation for cart state management 
/redux 
- cartSlice.js 
# Redux slice for cart state management 
App.js 
# Main app component 
index.js 
# Entry point of the app (Redux & Context API providers)

## Getting Started

### Prerequisites

- Node.js and npm installed.

### Installation

1. Clone the repository:
2. Navigate to the project directory:
3. Install the dependencies: `npm install -y`
4. Start the development server: `npm start`


The app will be available at `http://localhost:3000`.

## State Management

### Context API

- Used in the `ProductList` and `ProductItem` components to handle adding products to the cart.
- The `CartContext.js` file contains the context logic for managing cart items.

### Redux

- Used in the `Cart` component to manage global cart state.
- The `cartSlice.js` file defines actions (`addItem`, `removeItem`) and reducers to update the cart.

## Technologies Used

- [React](https://reactjs.org/)
- [Bootstrap](https://getbootstrap.com/)
- [Redux](https://redux.js.org/)
- [Context API](https://reactjs.org/docs/context.html)

## Contributing

Feel free to submit issues or pull requests for enhancements or bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


