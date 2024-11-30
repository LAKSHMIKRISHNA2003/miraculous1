import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
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
          <a href="#services">Services</a> {/* Example: Anchored section */}
        </li>
        <li>
          <a href="#contact">Contact Us</a> {/* Example: Anchored section */}
        </li>
        <li>
          <a href="#admin">Admin</a> {/* Example: Anchored section */}
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
