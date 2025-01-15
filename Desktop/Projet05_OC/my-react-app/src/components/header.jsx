import React from "react";
import Logo from "../assets/Images/Logo.png";
import { Link } from "react-router-dom";
import "../scss/header.scss";

function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar__logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="liens">
          <Link to="/">Accueil</Link>
          <Link to="/About">A propos</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
