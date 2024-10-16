import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card card mb-3">
      <img src={product.image} alt={product.name} className="card-img-top" />
      <div className="card-body">
        <h3 className="card-title">{product.name}</h3>
        <p className="card-text">{product.price}</p>
        <div className="d-flex justify-content-between">
          <button className="btn">Add to Cart</button>
          <button className="btn">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
