// Cart.js
import React from 'react';

const Cart = ({ cart, removeFromCart }) => {
  const cartItems = Object.entries(cart);

  return (
    <div>
      <h2>Items You have Chosen</h2>
      <ul>
        {cartItems.map(([itemId, quantity]) => (
          <li key={itemId}  style={{listStyle:'none'}}>
            Item ID: {itemId} | Quantity: {quantity}
            <button onClick={() => removeFromCart(itemId)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
