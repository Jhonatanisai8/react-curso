import React from "react";
import "./HeaderComponent.css";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <header>
      <h1>Bienvenido a mi aplicación</h1>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderComponent;