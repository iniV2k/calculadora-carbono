import type React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo">
          Calculadora CO₂
        </NavLink>
        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Calculadora
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/metodologia"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Metodologia
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="sobreCo2"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >Sobre CO₂</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
