import type React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggle = () => setIsMenuOpen(!isMenuOpen);
  const closeMobileMenu = () => setIsMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo" onClick={closeMobileMenu}>
          Calculadora CO₂
        </NavLink>
        <div className="menu-icon" onClick={handleToggle}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={isMenuOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              onClick={closeMobileMenu}
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
              onClick={closeMobileMenu}
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
              onClick={closeMobileMenu}
            >
              Sobre CO₂
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
