import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ onLogin, onSignup }) {
  const [marketOpen, setMarketOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">AgriPortal</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><a href="#crops">Crops</a></li>

        <li className="dropdown">
          <span onClick={() => setMarketOpen(!marketOpen)}>Market ▼</span>
          {marketOpen && (
            <ul className="dropdown-menu show">
              <li><Link to="/market/agrimachines">AgriMachines</Link></li>
              <li><Link to="/market/animals">Animals</Link></li>
              <li><Link to="/market/fertilizers">Fertilizers</Link></li>
              <li><Link to="/market/spray">Spray</Link></li>
            </ul>
          )}
        </li>

        <li><a href="#tips">Farming Tips</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><button className="btn" onClick={onLogin}>Login</button></li>
        <li><button className="btn signup" onClick={onSignup}>Signup</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
