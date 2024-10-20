import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import ProductItem from './ProductItem';

const products = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 150 },
];

const ProductList = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="container">
      <h2>Products</h2>
      <div className="row">
        {products.map(product => (
          <ProductItem key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
