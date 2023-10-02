import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// App.js
//import { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';

const App = () => {
  const [products] = useState([
    { id: 1, name: 'Product A', price: 10 },
    { id: 2, name: 'Product B', price: 15 },
    { id: 3, name: 'Product C', price: 20 },
  ]);

  const [cart, setCart] = useState({});

  const addToCart = (itemId) => {
    setCart((prevCart) => ({
      ...prevCart,
      [itemId]: (prevCart[itemId] || 0) + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    if (cart[itemId] === 1) {
      const updatedCart = { ...cart };
      delete updatedCart[itemId];
      setCart(updatedCart);
    } else if (cart[itemId] > 1) {
      setCart((prevCart) => ({
        ...prevCart,
        [itemId]: prevCart[itemId] - 1,
      }));
    }
  };

  return (
    <div>
      <h1>Simple Shopping Cart App</h1>
      <ProductList products={products} addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
};

export default App;
