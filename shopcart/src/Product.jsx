// Product.js
import React from 'react';

const Product = ({ product, addToCart }) => {
  const { id, name, price } = product;

  return (
    <li>
      <div>
        <h3>{name}</h3>
        <p>${price}</p>
        <button onClick={() => addToCart(id)}>Add to Cart</button>
      </div>
    </li>
  );
};

export default Product;
