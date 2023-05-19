import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <Link to='/'>Main</Link>
      <Link to='/about'>About</Link>

      <Link to='/blog'>Blog</Link>
    </nav>
  );
};

export default Menu;
