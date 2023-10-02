import React from 'react'
import { Link } from 'react-router-dom'
import Cart from './Cart'
import Product from './Product'

function Navbar() {
  return (

    <div className='navbar'>
<div className='tittle'><h1>Electronics Shop</h1></div>
<div>
<Link to='/'>Cart</Link>
<Link to='/products'>Products</Link>
</div>
    </div>
  )
}

export default Navbar