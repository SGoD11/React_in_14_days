import React from 'react';

const ProductItem = ({ product, addToCart }) => {
  return (
    <div className="col-md-4">
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">Price: ${product.price}</p>
          <button className="btn btn-primary" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
