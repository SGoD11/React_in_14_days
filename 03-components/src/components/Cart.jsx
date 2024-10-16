import React, { Component } from 'react';

class Cart extends Component {
  render() {
    const { cartItems } = this.props;

    return (
      <div className="cart">
        <h2>Cart</h2>
        {cartItems.length === 0 ? (
          <p>No items in the cart.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id}>
              <p>{item.name}</p>
              <p>{item.price}</p>
            </div>
          ))
        )}
      </div>
    );
  }
}

export default Cart;
