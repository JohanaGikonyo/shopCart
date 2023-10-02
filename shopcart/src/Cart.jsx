// Cart.js
import React from 'react';

const Cart = ({ cart, removeFromCart }) => {
  const cartItems = Object.entries(cart);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map(([itemId, quantity]) => (
          <li key={itemId}>
            Item ID: {itemId} | Quantity: {quantity}
            <button onClick={() => removeFromCart(itemId)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
