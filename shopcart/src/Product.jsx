// Product.js
import React from 'react';

const Product = ({ product, addToCart }) => {
  const { id, name, price } = product;

  return (
    <li  style={{listStyle:'none'}}>
      <div>
        <h3><img src={name} style={{height:150, width:150}}/></h3>
        <p>${price}</p>
        <button onClick={() => addToCart(id)}>Add to Cart</button>
      </div>
    </li>
  );
};

export default Product;
