import React from "react";
import { Link } from "react-router"

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="landing">Landing</Link> 
      <Link to="about">About</Link> 
      <Link to="products">Products</Link>
      <Link to="cart">Cart</Link>
    </div>
  )
}

export default Navbar;
