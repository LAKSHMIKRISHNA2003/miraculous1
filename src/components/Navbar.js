import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import "./Navbar.css";
import logo from "../assets/images/2.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the menu on mobile view
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      {/* Hamburger button */}
      <button className="menu-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* Navigation links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          {/* Smooth scrolling to Services (Section2.js) */}
          <a href="#services">Services</a>
        </li>
        <li>
          {/* Smooth scrolling to Contact Us (Section7.js) */}
          <a href="#contact">Contact Us</a>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
        <li>
          <Link to="/appointment" className="appointment-btn">
            Book An Appointment
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
