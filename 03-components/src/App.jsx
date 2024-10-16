import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/theme.css';

const App = () => {
  const [products] = useState([
    { id: 1, name: 'Product 1', price: '$20', description: 'Description 1', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: '$30', description: 'Description 2', image: 'https://via.placeholder.com/150' },
  ]);

  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="app container">
      <h1>My E-commerce Store</h1>
      <ProductList products={products} />
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default App;
