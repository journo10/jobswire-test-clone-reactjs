import React, { useState } from "react";
import { Link } from "react-router-dom"
import "./Navbar.css"
import logo_Img from "../../images/svg/logo.png"

const Navbar = () => {
  const [menu, setMenu] = useState(false)

  const handleMenu = () => {
    setMenu(!menu)
  }

  const handleCloseMenu = () => {
    setMenu(false);
  }

  return (
    <nav className="nav">
      <div className="container">
        <div className="logo">
          <img className="image" src={logo_Img} alt="logo-images" />
          <div className="logo-title">
            <Link to="/" onClick={handleCloseMenu}>
            <h3>JobSwire</h3><span>Test</span>
            </Link>
          </div>
        </div>
        <ul className={menu ? 'nav-list active' : 'nav-list'}>
          <li className="nav-item"><Link to ="/" onClick={handleCloseMenu}>JobSwire-Test</Link></li>
          <li className="nav-item"><Link to ="/mentors" onClick={handleCloseMenu}>Mentorlar</Link></li>
          <li className="nav-item"><Link to ="/hiring" onClick={handleCloseMenu}>Hiring</Link></li>
          <li className="nav-item"><Link to ="/contact" onClick={handleCloseMenu}>İletişim</Link></li>
        </ul>
        <div className="menu" onClick={handleMenu}>
          <i className={menu ? "fa-solid fa-xmark" : "fa-solid fa-bars"} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
