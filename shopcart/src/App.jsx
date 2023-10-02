import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import img1 from './images/pexels-alex-kinkate-205926.jpg'
import img2 from './images/pexels-pixabay-51383.jpg'
import img3 from './images/pexels-pixabay-51383.jpg'
import './App.css'
import './navbar.css'

// App.js
//import { useState } from 'react';
import  {Routes, Route} from 'react-router-dom'
import ProductList from './ProductList';
import Cart from './Cart';
import Navbar from './Navbar'

const App = () => {
  
  const [products] = useState([
    { id: 1, name: img1, price: 10 },
    { id: 2, name: img3, price: 15 },
    { id: 3, name: img2, price: 20 },
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
    
      <h1>Let's do Shopping Now</h1>
      
      <ProductList products={products} addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} />
      
    </div>
    
  );
};

export default App;
